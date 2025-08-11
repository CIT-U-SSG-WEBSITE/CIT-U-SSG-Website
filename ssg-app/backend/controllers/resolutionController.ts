// controllers/resolutionController.ts

import {
  getAllResolutions,
  getResolutionById,
  getResolutionsBySessionId,
  insertResolution,
  insertResolutionsBulk,
} from "@/backend/repositories/resolutionRepo";
import {ResolutionModel} from "@/backend/models/resolutionModel";

/**
 * CONTROLLERS apply business logic or validation before passing data to repositories.
 * This one handles inserting a resolution and returning it to the frontend.
 */

export async function createResolution(resolution: ResolutionModel) {
  // Example logic: auto-capitalize the title before saving
  const cleanedTitle = resolution.title?.trim();
  
  const toInsert = {
    ...resolution,
    title: cleanedTitle
  };
  
  return await insertResolution(toInsert);
}

export async function createResolutionsFromRows(sessionId: string, rows: Array<{
  series?: string | null;
  number?: number | null;
  title: string;
  body?: string | null;
  is_adopted?: boolean | null;
  agree_vote?: number | null;
  disagree_vote?: number | null;
  abstain_vote?: number | null;
}>) {
  const payload = rows.map(r => ({ ...r, session_id: sessionId }));
  await insertResolutionsBulk(payload);
}


export async function fetchAllResolutions() : Promise<ResolutionModel[]> {
  const allResolutions = await getAllResolutions();
  
  // sort resolutions by number. if number is null, put it at the end ordered by name
  return allResolutions.sort((a, b) => {
    if (a.number === null && b.number === null) {
      return a.title.localeCompare(b.title);
    }
    if (a.number === null) return 1; // a goes to the end
    else if (b.number === null) return -1; // b goes to the end
    
    if (a.number && b.number) {
      return b.number - a.number; // sort by number
    }
  });
}

export async function fetchResolutionsBySessionId(sessionId: string) : Promise<ResolutionModel[]> {
  return await getResolutionsBySessionId(sessionId);
}

export async function fetchResolutionById(id: string): Promise<ResolutionModel | null> {
  return await getResolutionById(id);
}