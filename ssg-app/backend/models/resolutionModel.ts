/**
 * ResolutionModel represents the structure of a resolution record.
 * It maps the SQL `resolution` table into a TypeScript object.
 */
import {OfficerModel} from "@/backend/models/officerModel";

export type ResolutionModel = {
  id: string;
  series?: string;
  number?: number;
  title: string;
  body?: string;
  session_id?: string;
  is_adopted?: boolean;
  
  // Vote counts (nullable decimals)
  agree_vote?: number;
  disagree_vote?: number;
  abstain_vote?: number;
  
  author: OfficerModel;
  co_authors?: OfficerModel[];
};
