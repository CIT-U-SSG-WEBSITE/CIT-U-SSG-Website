// models/resoAuthorModel.ts

/**
 * ResoAuthorModel represents the structure of a resolution_author record.
 * It maps the SQL `resolution_author` table into a TypeScript object.
 */
export type ResoAuthorModel = {
  officer_id: string;
  resolution_id: string;
  role: "AUTHOR" | "CO-AUTHOR";
};

