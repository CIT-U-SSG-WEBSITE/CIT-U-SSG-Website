// controllers/sessionController.ts
import { getAllSessions, getSessionById, getSessionByNumberAndType } from "@/backend/repositories/sessionRepo";
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

