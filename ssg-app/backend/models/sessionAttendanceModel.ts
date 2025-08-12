// models/sessionAttendanceModel.ts
import { OfficerModel } from "./officerModel";
import { SessionType } from "./sessionModel";

// Base model that matches the database table exactly
export type SessionAttendanceModel = {
  officer_id: string;
  session_id: string;
  attendance: string | null;
  sequence: string;
};

// Plus model that includes navigation attributes
export type SessionAttendanceModelPlus = SessionAttendanceModel & {
  session_number: number;
  session_type: SessionType;
  officer: OfficerModel;
};

// Type for CSV import - creating session attendance from rows
export type SessionAttendanceCreateFromRow = {
  officer_id: string;
  attendance?: string | null;
};

export interface AttendanceTypeCount {
  type: string;
  count: number;
  percentage: number;
}