// repositories/sessionRepo.ts
import { supabase } from "@/lib/supabase";
import { SessionModel, SessionType } from "@/backend/models/sessionModel";
import { SessionAgendaModel } from "@/backend/models/sessionAgendaModel";
import { SessionAttendanceModel } from "@/backend/models/sessionAttendanceModel";
import { OfficerModel } from "@/backend/models/officerModel";

export async function getAllSessions(): Promise<SessionModel[]> {
  const { data, error } = await supabase
    .from("session")
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`);
 
  if (error) throw new Error(error.message);
  
  return (data || []).map(mapSessionRecordToModel);
}

export async function getSessionById(id: string): Promise<SessionModel | null> {
  const { data, error } = await supabase
    .from("session")
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`)
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data ? mapSessionRecordToModel(data) : null;
}

export async function getSessionByNumberAndType(number: number, type: SessionType): Promise<SessionModel | null> {
  const { data, error } = await supabase
    .from("session")
    .select(`*, session_agenda(*), session_attendance(*, officers:officer_id(*, commission:commission_id(*)))`)
    .eq("number", number)
    .eq("type", type)
    .single();
  if (error) throw new Error(error.message);
  return data ? mapSessionRecordToModel(data) : null;
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

function mapSessionRecordToModel(record: any): SessionModel {
  // Map agenda with session number and type
  const agenda: SessionAgendaModel[] = (record.session_agenda || []).map((a: any) => ({
    ...a,
    session_number: record.number,
    session_type: record.type,
  }));
  // Map attendance with session number, type, and officer
  const attendance: SessionAttendanceModel[] = (record.session_attendance || []).map((att: any) => ({
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
