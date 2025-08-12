// models/resoAuthorModel.ts

/**
 * ResoAuthorModel represents the structure of a resolution_author record.
 * It maps the SQL `resolution_author` table into a TypeScript object.
 */
export type ResoAuthorModel = {
  officer_id: string;
  resolution_id: string;
  role: "AUTHOR" | "CO-AUTHOR";
  sequence: string;
};

// Plus model that includes navigation attributes
export type ResoAuthorModelPlus = ResoAuthorModel & {
  officer?: any; // OfficerModel when needed
  resolution?: any; // ResolutionModel when needed
};

// Type for CSV import - creating resolution authors from rows
export type ResoAuthorCreateFromRow = {
  officer_id: string;
  resolution_id: string;
  role: "AUTHOR" | "CO-AUTHOR";
};

