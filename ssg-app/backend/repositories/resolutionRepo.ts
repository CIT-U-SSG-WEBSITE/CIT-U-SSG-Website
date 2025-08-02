// repositories/resolutionRepo.ts

import { supabase } from "@/lib/supabase";
import { ResolutionModel } from "@/backend/models/resolutionModel";
import {OfficerModel} from "@/backend/models/officerModel";

/**
 * REPOSITORIES directly talk to the database.
 * This one inserts a resolution into the "resolution" table.
 */

export async function insertResolution(resolution: ResolutionModel): Promise<ResolutionModel> {
  const { data, error } = await supabase
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
  
  return {
    id: data.id,
    series: data.series,
    number: data.number,
    title: data.title,
    body: data.body,
    session_id: data.session_id,
    is_adopted: data.is_adopted,
    agree_vote: data.agree_vote,
    disagree_vote: data.disagree_vote,
    abstain_vote: data.abstain_vote
  };
}

export async function getAllResolutions(): Promise<ResolutionModel[]> {
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
      abstain_vote
    `);
  
  if (error) throw new Error(error.message);
  
  return (data || []).map((res: any) => ({
    id: res.id,
    series: res.series,
    number: res.number,
    title: res.title,
    body: res.body,
    session_id: res.session_id,
    is_adopted: res.is_adopted,
    agree_vote: res.agree_vote,
    disagree_vote: res.disagree_vote,
    abstain_vote: res.abstain_vote
  }));
}

export async function getResolutionsBySessionId(sessionId: string): Promise<ResolutionModel[]> {
  // Fetch resolutions for the session
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
      abstain_vote
    `)
    .eq("session_id", sessionId);
  if (resError) throw new Error(resError.message);
  if (!resolutions || resolutions.length === 0) return [];
  
  // Get all resolution ids for this session
  const resolutionIds = resolutions.map((r: any) => r.id);
  
  // Fetch all resolution authors for these resolutions, with officer details
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
          type
        )
      )
    `)
    .in("resolution_id", resolutionIds);
  if (authorError) throw new Error(authorError.message);
  
  // Group authors by resolution_id and role
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
  
  // Map resolutions with authors and co-authors
  return (resolutions || []).map((res: any) => ({
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
    co_authors: coAuthorMap[res.id] || []
  }));
}