// controllers/resoAuthorController.ts
import { insertResoAuthor, insertResoAuthorsBulk } from "@/backend/repositories/resoAuthorRepo";
import { ResoAuthorModel, ResoAuthorCreateFromRow } from "@/backend/models/resoAuthorModel";
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

export async function createResoAuthorsFromRows(rows: ResoAuthorCreateFromRow[]) {
  await insertResoAuthorsBulk(rows);
}