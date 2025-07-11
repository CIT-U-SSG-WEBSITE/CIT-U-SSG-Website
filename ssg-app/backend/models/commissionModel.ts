// models/commissionModel.ts

/**
 * MODELS represent the shape of your data as code.
 * We translate tables into TypeScript objects so we can work with them safely and easily in our app.
 * Tables alone aren't usable directly in code — we need structured types like this to define what a "Commission" is.
 */

export type CommissionModel = {
  id: string;
  created_at: string;
  name: string;
  initials: string;
  type: "CABINET-LEVEL COMMISSION"
    | "LEGISLATIVE COMMITTEE"
    | "CONSTITUTIONAL COMMISSION"
    | "SUPREME COURT"
    | "EXECOM";
  full_description?: string;
  brief_description?: string;
};
