// models/sessionModel.ts
import { SessionAgendaModel } from "./sessionAgendaModel";
import { SessionAttendanceModel } from "./sessionAttendanceModel";

export type SessionType = "REGULAR" | "EMERGENCY" | "JOINT" | "INAUGURAL" | "SPECIAL";

export type SessionModel = {
  id: string;
  type: SessionType;
  number: number;
  numberOrdinal: string; // e.g. 1st, 2nd, 3rd
  livestream?: string | null;
  date: string;
  summary?: string | null;
  present?: number | null;
  excused?: number | null;
  late?: number | null;
  early_leave_ex?: number | null;
  early_leave_un?: number | null;
  absent?: number | null;
  photo?: string | null;
  
  // Additional attributes
  agenda: SessionAgendaModel[];
  attendance: SessionAttendanceModel[];
};
