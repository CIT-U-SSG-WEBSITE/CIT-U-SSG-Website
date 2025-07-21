import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';
import {ResolutionModel} from "@/backend/models/resolutionModel";
import {createResolution} from "@/backend/controllers/resolutionController";

// Define paths
const resolutionsPath = path.join(__dirname, 'resolutions');
const markdownPath = path.join(__dirname, 'markdown');

// Ensure markdown directory exists
if (!fs.existsSync(markdownPath)) {
  fs.mkdirSync(markdownPath);
}

// Metadata extraction function
function extractMetadata(text: string) {
  const seriesMatch = text.match(/Series\s+(\d{4})/i);
  const resoNoMatch = text.match(/Resolution\s+No\.\s*(\d+)/i);
  const authorMatch = text.match(/Authored by:\s*(.+)/i);
  const coAuthorMatch = text.match(/Co-authored by:\s*(.+)/i);
  const titleMatch = text.match(/“([^”]+)”/); // Quoted string
  
  const rawTitle = titleMatch?.[1].split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(" ")
    .replace(/\n/g, '')
    .replace(/\s+/g, ' ')
    .replace("Ssg", "SSG")
    .replace("Cit-u", "CIT-U")
    .replace("Cit", "CIT")
    .replace("ssg", "SSG")
    .replace("cit-u", "CIT-U")
    .replace("Of", "of")
    .replace("A", "a")
    .replace("An", "an")
    .replace("The", "the")
    .trim() ?? '';
  
  const title = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1)
  
  return {
    series: seriesMatch?.[1] ?? '',
    resolutionNumber: resoNoMatch?.[1] ?? '',
    author: authorMatch?.[1].slice(5).trim() ?? '',
    coAuthors: coAuthorMatch?.[1]?.split(/,\s*|and\s+/).map(s => s.slice(5).trim()) ?? [],
    title: title,
  };
}

// Markdown formatting
function formatToMarkdown(text: string): string {
  // Remove everything after "Attested by:"
  const cutoffIndex = text.search(/Attested by:/i);
  const sliced = cutoffIndex !== -1 ? text.slice(0, cutoffIndex).trim() : text.trim();
  
  // Emphasize keywords
  let md= sliced.replace(/(\[\d+\])/g, '$1');
  
  // Highlight keywords
  const highlightWords = [
    'WHEREAS',
    'RESOLVED, AS IT IS HEREBY RESOLVED',
    'BE IT FURTHER RESOLVED',
    'BE IT FINALLY RESOLVED',
    'ADOPTED',
    'REFERENCES:'
  ];
  highlightWords.forEach(word => {
    const regex = new RegExp(`(^|\\s)(${word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})(?=[\\s,])`, 'g');
    md = md.replace(regex, `$1<strong>${word}</strong>`);
  });
  
  return md;
}

function formatTitle(raw: string): string {
  if (!raw) return '';
  
  // Lowercase the whole string first
  const lower = raw.toLowerCase();
  
  // Capitalize each word unless it's one letter
  const words = lower.split(' ').map((word, index) => {
    if (word.length === 1) return word; // leave 1-letter words lowercase
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // Join words back into a string
  const formatted = words.join(' ');
  
  // Capitalize the first letter of the sentence
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}


// Create markdown frontmatter
function createFrontmatter(meta: ReturnType<typeof extractMetadata>) {
  const coAuthorList = meta.coAuthors.map(ca => `  - ${ca}`).join('\n');
  return `---
title: ${meta.title}
series: ${meta.series}
author: ${meta.author}
coAuthors:
${coAuthorList}
---`;
}

// Main processor
async function processPdf(file: string) {
  const inputPath = path.join(resolutionsPath, file);
  const outputPath = path.join(markdownPath, file.replace(/\.pdf$/, '.md'));
  
  const buffer = fs.readFileSync(inputPath);
  const data = await pdf(buffer);
  const meta = extractMetadata(data.text);
  const body = formatToMarkdown(data.text);
  const frontmatter = createFrontmatter(meta);
  
  const fullMarkdown = `${frontmatter}\n${body}`;
  
  fs.writeFileSync(outputPath, fullMarkdown, 'utf8');
  console.log(`✅ Converted: ${file}`);
}


export async function  extractAllResolutions(): Promise<ResolutionModel[]> {
  const files = fs.readdirSync(resolutionsPath).filter(file => file.endsWith('.pdf'));
  const results: ResolutionModel[] = [];
  
  for (const file of files) {
    const inputPath = path.join(resolutionsPath, file);
    const buffer = fs.readFileSync(inputPath);
    const data = await pdf(buffer);
    
    const meta = extractMetadata(data.text);
    const body = formatToMarkdown(data.text);
    
    results.push({
      id: crypto.randomUUID(),
      series: meta.series ?? "2526",
      number: Number(meta.resolutionNumber) || 0,
      title: meta.title,
      body: body,
      is_adopted: true,
      agree_vote: 0,
      disagree_vote: 0,
      abstain_vote: 0
    });
  }
  return results;
}

// Read and process all PDFs
async function main() {
  const resolutions = await extractAllResolutions();
  
  for (const res of resolutions) {
    try {
      const result = await createResolution(res);
      console.log("Inserted resolution:", result);
    } catch (error) {
      console.error("Insert error:", error);
    }
  }
}

main();


