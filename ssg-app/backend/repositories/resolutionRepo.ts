// repositories/resolutionRepo.ts

import { supabase } from "@/lib/supabase";
import { ResolutionModel, ResolutionModelPlus } from "@/backend/models/resolutionModel";
import {OfficerModel} from "@/backend/models/officerModel";

/**
 * REPOSITORIES directly talk to the database.
 * This one inserts a resolution into the "resolution" table.
 */

export async function insertResolution(resolution: ResolutionModel) {
  const { error } = await supabase
    .from("resolution")
    .insert({
      series: resolution.series ?? "2526",
      number: resolution.number ?? 0,
      title: resolution.title,
      body: resolution.body,
      session_id: resolution.session_id,
      is_adopted: resolution.is_adopted ?? false,
      agree_vote: resolution.agree_vote,
      disagree_vote: resolution.disagree_vote,
      abstain_vote: resolution.abstain_vote
    })
    .select()
    .single();
  
  if (error) throw new Error(error.message);
}

export async function insertResolutionsBulk(rows: Array<{
  series?: string | null;
  number?: number | null;
  title: string;
  body?: string | null;
  session_id: string | null;
  is_adopted?: boolean | null;
  agree_vote?: number | null;
  disagree_vote?: number | null;
  abstain_vote?: number | null;
}>): Promise<Array<{ id: string; title: string }>> {
  if (!rows.length) return [];
  const { data, error } = await supabase
    .from("resolution")
    .insert(rows)
    .select("id, title");
  if (error) throw new Error(error.message);
  return (data || []).map((r: any) => ({ id: r.id, title: r.title }));
}

// Helper to fetch authors and co-authors for a set of resolution IDs
async function fetchAuthorsForResolutions(resolutionIds: string[]): Promise<{
  authorMap: Record<string, OfficerModel[]>;
  coAuthorMap: Record<string, OfficerModel[]>;
}> {
  if (!resolutionIds.length) return { authorMap: {}, coAuthorMap: {} };
  const { data: authors, error: authorError } = await supabase
    .from("resolution_author")
    .select(`
      resolution_id,
      role,
      officer:officer_id (
        id,
        firstname,
        lastname,
        position,
        photo,
        commission:commission_id (
          id,
          name,
          initials,
          photo,
          type,
          brief_description,
          full_description
        )
      )
    `)
    .in("resolution_id", resolutionIds);
  if (authorError) throw new Error(authorError.message);
  const authorMap: Record<string, OfficerModel[]> = {};
  const coAuthorMap: Record<string, OfficerModel[]> = {};
  (authors || []).forEach((row: any) => {
    if (!row.officer) return;
    if (row.role === "AUTHOR") {
      if (!authorMap[row.resolution_id]) authorMap[row.resolution_id] = [];
      authorMap[row.resolution_id].push(row.officer);
    } else if (row.role === "CO-AUTHOR") {
      if (!coAuthorMap[row.resolution_id]) coAuthorMap[row.resolution_id] = [];
      coAuthorMap[row.resolution_id].push(row.officer);
    }
  });
  return { authorMap, coAuthorMap };
}

function mapResolution(res: any, authorMap: Record<string, OfficerModel[]>, coAuthorMap: Record<string, OfficerModel[]>): ResolutionModelPlus {
  return {
    id: res.id,
    series: res.series,
    number: res.number,
    title: res.title,
    body: res.body,
    session_id: res.session_id,
    is_adopted: res.is_adopted,
    agree_vote: res.agree_vote,
    disagree_vote: res.disagree_vote,
    abstain_vote: res.abstain_vote,
    author: (authorMap[res.id] && authorMap[res.id][0]) || null,
    co_authors: coAuthorMap[res.id] || [],
    session_type: res.session?.type,
    session_number: res.session?.number
  };
}

export async function getAllResolutions(): Promise<ResolutionModelPlus[]> {
  const { data, error } = await supabase
    .from("resolution")
    .select(`
      id,
      series,
      number,
      title,
      body,
      session_id,
      is_adopted,
      agree_vote,
      disagree_vote,
      abstain_vote,
      session:session_id (
        type,
        number
      )
    `).not("number", "is", null);
  
  if (error) throw new Error(error.message);
  const resolutionIds = (data || []).map((r: any) => r.id);
  const { authorMap, coAuthorMap } = await fetchAuthorsForResolutions(resolutionIds);
  return (data || []).map((res: any) => mapResolution(res, authorMap, coAuthorMap));
}

export async function getResolutionsBySessionId(sessionId: string): Promise<ResolutionModelPlus[]> {
  const { data: resolutions, error: resError } = await supabase
    .from("resolution")
    .select(`
      id,
      series,
      number,
      title,
      body,
      session_id,
      is_adopted,
      agree_vote,
      disagree_vote,
      abstain_vote,
      session:session_id (
        type,
        number
      )
    `)
    .eq("session_id", sessionId);
  if (resError) throw new Error(resError.message);
  if (!resolutions || resolutions.length === 0) return [];
  const resolutionIds = resolutions.map((r: any) => r.id);
  const { authorMap, coAuthorMap } = await fetchAuthorsForResolutions(resolutionIds);
  return (resolutions || []).map((res: any) => mapResolution(res, authorMap, coAuthorMap));
}

export async function getResolutionById(resolutionId: string): Promise<ResolutionModelPlus | null> {
  const { data: resolution, error: resError } = await supabase
    .from("resolution")
    .select(`
      id,
      series,
      number,
      title,
      body,
      session_id,
      is_adopted,
      agree_vote,
      disagree_vote,
      abstain_vote,
      session:session_id (
        type,
        number
      )
    `)
    .eq("id", resolutionId)
    .single();
  
  if (resError) {
    if (resError.code === "PGRST116") return null; // No rows found
    throw new Error(resError.message);
  }
  if (!resolution) return null;
  const { authorMap, coAuthorMap } = await fetchAuthorsForResolutions([resolution.id]);
  return mapResolution(resolution, authorMap, coAuthorMap);
}
