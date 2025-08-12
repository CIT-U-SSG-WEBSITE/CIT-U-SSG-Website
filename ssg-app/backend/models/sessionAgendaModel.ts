// models/sessionAgendaModel.ts
import { SessionType } from "./sessionModel";

// Base model that matches the database table exactly
export type SessionAgendaModel = {
  session_id: string;
  item: string;
  number?: number;
  sequence_number: string;
};

// Plus model that includes navigation attributes
export type SessionAgendaModelPlus = SessionAgendaModel & {
  session_number: number;
  session_type: SessionType;
};

// Type for CSV import - creating session agenda from rows
export type SessionAgendaCreateFromRow = {
  item: string;
  number?: number | null;
};

