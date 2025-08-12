import React, {JSX} from 'react';
import { notFound } from 'next/navigation';
import { fetchSessionById } from "@/backend/controllers/sessionController";
import {SessionModelPlus} from "@/backend/models/sessionModel";
import SessionSummary from "@/components/Actions/Sessions/SessionSummary";
import SessionTabMenu from "@/components/Actions/Sessions/id/SessionTabMenu";
import SessionAgenda from "@/components/Actions/Sessions/id/agenda/SessionAgenda";
import SessionResolutions from "@/components/Actions/Sessions/id/resolutions/SessionResolutions";
import SessionAttendance from "@/components/Actions/Sessions/id/attendance/SessionAttendance";
import SessionTabSection from "@/components/Actions/Sessions/id/SessionTabSection";
import {ResolutionModelPlus} from "@/backend/models/resolutionModel";
import {fetchResolutionsBySessionId} from "@/backend/controllers/resolutionController";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let session: SessionModelPlus | null = null;
  let sessionResolutions: ResolutionModelPlus[] = [];
  
  try {
    session = await fetchSessionById(id);
    
    if (session) {
      sessionResolutions = await fetchResolutionsBySessionId(session.id);
    }
  } catch (error) {
    console.error("Error loading session data:", error);
  }
  
  if (!session) {
    notFound();
  }
  
  const tabs : Record<string, JSX.Element> = {
    "Agenda": <SessionAgenda agenda={session.agenda} />,
    "Resolutions": <SessionResolutions resolutions={sessionResolutions} />,
    "Attendance": <SessionAttendance session={session} />
  }
  
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-serif text-3xl font-medium">
            {session.numberOrdinal} {session.type.charAt(0) + session.type.slice(1).toLowerCase()} Session
          </h1>
          <span className="text-lg">{session.date}</span>
        </div>
        <SessionSummary summary={session.summary} />
      </div>
      <SessionTabMenu tabs={Object.keys(tabs)} />
      <SessionTabSection tabs={tabs} />
    </div>
  );
}
