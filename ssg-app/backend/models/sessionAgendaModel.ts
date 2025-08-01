// models/sessionAgendaModel.ts
import { SessionType } from "./sessionModel";

export type SessionAgendaModel = {
  session_id: string;
  item: string;
  number?: number;
  sequence_number: string;
  // Additional attributes from session
  session_number: number;
  session_type: SessionType;
};

