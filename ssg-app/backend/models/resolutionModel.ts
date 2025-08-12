/**
 * ResolutionModel represents the structure of a resolution record.
 * It maps the SQL `resolution` table into a TypeScript object.
 */
import {OfficerModel} from "@/backend/models/officerModel";

// Base model that matches the database table exactly
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
};

// Plus model that includes navigation attributes for minimized queries
export type ResolutionModelPlus = ResolutionModel & {
  author: OfficerModel;
  co_authors?: OfficerModel[];
  
  session_number?: number;
  session_type?: string;
};

// Type for CSV import - creating resolutions from rows
export type ResolutionCreateFromRow = {
  series?: string | null;
  number?: number | null;
  title: string;
  body?: string | null;
  is_adopted?: boolean | null;
  agree_vote?: number | null;
  disagree_vote?: number | null;
  abstain_vote?: number | null;
};
