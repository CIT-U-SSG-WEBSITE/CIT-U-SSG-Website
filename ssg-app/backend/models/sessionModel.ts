// models/sessionModel.ts
import { SessionAgendaModelPlus } from "./sessionAgendaModel";
import { SessionAttendanceModelPlus } from "./sessionAttendanceModel";

export type SessionType = "REGULAR" | "EMERGENCY" | "JOINT" | "INAUGURAL" | "SPECIAL";

// Base model that matches the database table exactly
export type SessionModel = {
  id: string;
  type: SessionType;
  number: number;
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
};

// Plus model that includes navigation attributes and computed fields
export type SessionModelPlus = SessionModel & {
  numberOrdinal: string; // e.g. 1st, 2nd, 3rd
  agenda: SessionAgendaModelPlus[];
  attendance: SessionAttendanceModelPlus[];
};
