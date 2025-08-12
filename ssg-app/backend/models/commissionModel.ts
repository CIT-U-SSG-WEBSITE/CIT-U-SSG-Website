// models/commissionModel.ts

/**
 * MODELS represent the shape of your data as code.
 * We translate tables into TypeScript objects so we can work with them safely and easily in our app.
 * Tables alone aren't usable directly in code — we need structured types like this to define what a "Commission" is.
 */

export type CommissionModel = {
  id: string;
  name: string;
  initials: string;
  photo: string;
  type: "EXECOM"
    | "CABINET-LEVEL COMMISSION"
    | "LEGISLATIVE COMMITTEE"
    | "SUPREME COURT"
    | "CONSTITUTIONAL COMMISSION";
  full_description?: string;
  brief_description?: string;
};
