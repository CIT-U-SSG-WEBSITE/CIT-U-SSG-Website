// scripts/seedResolutions.ts
import { createResolution } from "@/backend/controllers/resolutionController";
import {extractAllResolutions} from "@/data_port/pdf_converter";

async function seed() {
  const resolutions = await extractAllResolutions();
  for (const res of resolutions) {
    await createResolution(res);
  }
  console.log("Seeding complete.");
}

seed();
