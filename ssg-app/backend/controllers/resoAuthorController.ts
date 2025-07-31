// controllers/resoAuthorController.ts
import { insertResoAuthor } from "@/backend/repositories/resoAuthorRepo";
import { ResoAuthorModel } from "@/backend/models/resoAuthorModel";
import {ResolutionModel} from "@/backend/models/resolutionModel";
import {fetchAllResolutions} from "@/backend/controllers/resolutionController";
import type {OfficerModel} from "@/backend/models/officerModel";
import {fetchLegislativeOfficers} from "@/backend/controllers/officerController";
import path from "path";
import fs from "fs";
import Papa from 'papaparse';

/**
 * CONTROLLERS apply business logic or validation before passing data to repositories.
 * This one handles inserting a resolution author and returning it to the frontend.
 */
export async function createResoAuthor(author: ResoAuthorModel) {
  return await insertResoAuthor(author);
}

export async function createResoAuthorsFromCSV(
  csvFilePath: string
) {
  const resolutions: ResolutionModel[] = await fetchAllResolutions();
  const representatives: OfficerModel[] = await fetchLegislativeOfficers();
  
  const resolutionDict = Object.fromEntries(resolutions.map(r => [r.title, r.id]));
  const officerDict = Object.fromEntries(representatives.map(o => [o.lastname, o.id]));
  
  const csvPath = path.join(process.cwd(), csvFilePath);
  const csvContent = fs.readFileSync(csvPath, "utf8");
  const { data: csvRows } = Papa.parse(csvContent, { header: true });
  
  for (const row of csvRows as any[]) {
    const officer_id = officerDict[row.officer];
    const resolution_id = resolutionDict[row.resolution];
    const role = row.role;
    
    if (officer_id && resolution_id && (role === "AUTHOR" || role === "CO-AUTHOR")) {
      await createResoAuthor({ officer_id, resolution_id, role });
    }
  }
}