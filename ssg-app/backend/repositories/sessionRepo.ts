// repositories/sessionRepo.ts
import { supabase } from "@/lib/supabase";
import { SessionModel, SessionModelPlus, SessionType } from "@/backend/models/sessionModel";
import { SessionAgendaModel, SessionAgendaModelPlus } from "@/backend/models/sessionAgendaModel";
import { SessionAttendanceModel, SessionAttendanceModelPlus } from "@/backend/models/sessionAttendanceModel";
import { OfficerModel } from "@/backend/models/officerModel";

export async function getAllSessions(): Promise<SessionModelPlus[]> {
  const { data, error } = await supabase
    .from("session")
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`);
 
  if (error) throw new Error(error.message);
  
  return (data || []).map(mapSessionRecordToModel);
}

export async function getSessionById(id: string): Promise<SessionModelPlus | null> {
  const { data, error } = await supabase
    .from("session")
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`)
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // No rows returned
    throw new Error(error.message);
  }

  return mapSessionRecordToModel(data);
}

export async function getSessionByNumberAndType(number: number, type: SessionType): Promise<SessionModelPlus | null> {
  const { data, error } = await supabase
    .from("session")
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`)
    .eq("number", number)
    .eq("type", type)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // No rows returned
    throw new Error(error.message);
  }

  return mapSessionRecordToModel(data);
}

export async function insertSession(params: {
  number: number;
  type: SessionType;
  summary?: string | null;
  date: string; // YYYY-MM-DD
  livestream?: string | null;
}): Promise<SessionModelPlus> {
  const { data, error } = await supabase
    .from("session")
    .insert({
      number: params.number,
      type: params.type,
      summary: params.summary ?? null,
      date: params.date,
      livestream: params.livestream ?? null,
    })
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`)
    .single();

  if (error) throw new Error(error.message);
  return mapSessionRecordToModel(data);
}

export async function insertSessionAgendaBulk(rows: Array<{
  session_id: string;
  item: string;
  number?: number | null;
}>): Promise<void> {
  if (!rows.length) return;
  const { error } = await supabase
    .from("session_agenda")
    .insert(rows);
  if (error) throw new Error(error.message);
}

export async function insertSessionAttendanceBulk(rows: Array<{
  officer_id: string;
  session_id: string;
  attendance?: string | null;
}>): Promise<void> {
  if (!rows.length) return;
  const { error } = await supabase
    .from("session_attendance")
    .insert(rows);
  if (error) throw new Error(error.message);
}

function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function mapSessionRecordToModel(record: any): SessionModelPlus {
  // Map agenda with session number and type
  const agenda: SessionAgendaModelPlus[] = (record.session_agenda || []).map((a: any) => ({
    ...a,
    session_number: record.number,
    session_type: record.type,
  }));
  // Map attendance with session number, type, and officer
  const attendance: SessionAttendanceModelPlus[] = (record.session_attendance || []).map((att: any) => ({
    officer_id: att.officer_id,
    session_id: att.session_id,
    attendance: att.attendance,
    sequence: att.sequence,
    session_number: record.number,
    session_type: record.type,
    officer: att.officers,
  }));
  return {
    id: record.id,
    type: record.type,
    number: record.number,
    numberOrdinal: getOrdinal(record.number),
    livestream: record.livestream,
    date: formatDate(record.date),
    summary: record.summary,
    present: record.present,
    excused: record.excused,
    late: record.late,
    early_leave_ex: record.early_leave_ex,
    early_leave_un: record.early_leave_un,
    absent: record.absent,
    agenda,
    attendance,
    photo: record.photo || null,
  };
}
