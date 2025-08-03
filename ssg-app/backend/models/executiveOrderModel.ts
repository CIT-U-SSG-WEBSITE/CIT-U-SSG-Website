import {OfficerModel} from "@/backend/models/officerModel";

export interface ExecutiveOrderModel {
  id: string;
  number: number;
  series: string;
  title: string;
  body?: string | null;
  president?: string | null; // officer id
  
  officer? : OfficerModel | null; // officer model
}

