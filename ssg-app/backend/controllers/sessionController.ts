// controllers/sessionController.ts
import {
  getAllSessions,
  getSessionById,
  getSessionByNumberAndType,
  insertSession,
  insertSessionAgendaBulk,
  insertSessionAttendanceBulk,
} from "@/backend/repositories/sessionRepo";
import { SessionModel, SessionType } from "@/backend/models/sessionModel";

export async function fetchAllSessionsSorted(): Promise<SessionModel[]> {
  const sessions = await getAllSessions();
  return sessions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function fetchSessionById(id: string): Promise<SessionModel | null> {
  return await getSessionById(id);
}

export async function fetchSessionByNumberAndType(number: number, type: SessionType): Promise<SessionModel | null> {
  return await getSessionByNumberAndType(number, type);
}

export async function createSession(params: {
  number: number;
  type: SessionType;
  summary?: string | null;
  date: string; // YYYY-MM-DD
  livestream?: string | null;
}): Promise<SessionModel> {
  // basic normalization/validation
  const normalizedType = params.type.toUpperCase() as SessionType;
  const summary = (params.summary ?? '').trim() || null;

  return await insertSession({
    number: params.number,
    type: normalizedType,
    summary,
    date: params.date,
    livestream: params.livestream ?? null,
  });
}

export async function createAgendaFromRows(sessionId: string, rows: Array<{ item: string; number?: number | null }>) {
  const payload = rows.map(r => ({ 
    session_id: sessionId, 
    item: r.item, 
    number: r.number ?? null 
  }));
  await insertSessionAgendaBulk(payload);
}

export async function createAttendanceFromRows(sessionId: string, rows: Array<{ officer_id: string; attendance?: string | null }>) {
  const payload = rows.map(r => ({ 
    session_id: sessionId, 
    officer_id: r.officer_id, 
    attendance: r.attendance ?? null 
  }));
  await insertSessionAttendanceBulk(payload);
}

