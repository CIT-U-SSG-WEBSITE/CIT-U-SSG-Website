// models/officerModel.ts

import {CommissionModel} from "@/backend/models/commissionModel";

/**
 * MODELS represent the shape of your data as code.
 * We translate tables into TypeScript objects so we can work with them safely and easily in our app.
 * Tables alone aren't usable directly in code — we need structured types like this to define what a "Commission" is.
 */

export type OfficerModel = {
  firstname: string;
  lastname: string;
  position: string;
  // commissionId: string;
  
  // navigation attribute: helpful to quickly get the commission of the officer
  commission: CommissionModel;
}