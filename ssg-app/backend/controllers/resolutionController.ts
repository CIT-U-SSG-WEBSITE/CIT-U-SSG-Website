// controllers/resolutionController.ts

import { insertResolution } from "@/backend/repositories/resolutionRepo";
import { ResolutionModel } from "@/backend/models/resolutionModel";

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
