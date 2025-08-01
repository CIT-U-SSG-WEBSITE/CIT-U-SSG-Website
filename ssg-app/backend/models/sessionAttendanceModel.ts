// models/sessionAttendanceModel.ts
import { OfficerModel } from "./officerModel";
import { SessionType } from "./sessionModel";

export type SessionAttendanceModel = {
  officer_id: string;
  session_id: string;
  attendance: string | null;
  sequence: string;
  // Additional attributes
  session_number: number;
  session_type: SessionType;
  officer: OfficerModel;
};

