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