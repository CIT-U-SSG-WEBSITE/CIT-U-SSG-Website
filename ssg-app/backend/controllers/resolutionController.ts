// controllers/resolutionController.ts

import {getAllResolutions, getResolutionsBySessionId, insertResolution} from "@/backend/repositories/resolutionRepo";
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


export async function fetchAllResolutions() {
  const allResolutions = await getAllResolutions();
  
  // sort resolutions by number. if number is null, put it at the end ordered by name
  return allResolutions.sort((a, b) => {
    if (a.number === null && b.number === null) {
      return a.title.localeCompare(b.title);
    }
    if (a.number === null) return 1; // a goes to the end
    else if (b.number === null) return -1; // b goes to the end
    
    if (a.number && b.number) {
      return a.number - b.number; // sort by number
    }
  });
}

export async function fetchResolutionsBySessionId(sessionId: string) {
  return await getResolutionsBySessionId(sessionId);
}