import React, {JSX} from 'react';
import { fetchSessionById } from "@/backend/controllers/sessionController";
import {SessionModel} from "@/backend/models/sessionModel";
import SessionSummary from "@/components/Actions/Sessions/SessionSummary";
import SessionTabMenu from "@/components/Actions/Sessions/id/SessionTabMenu";
import SessionAgenda from "@/components/Actions/Sessions/id/SessionAgenda";
import SessionResolutions from "@/components/Actions/Sessions/id/SessionResolutions";
import SessionAttendance from "@/components/Actions/Sessions/id/attendance/SessionAttendance";
import SessionTabSection from "@/components/Actions/Sessions/id/SessionTabSection";

export default async function Page({ params }: { params: { id: string } }) {
  const session : SessionModel | null = await fetchSessionById(params.id);
  
  const tabs : Record<string, JSX.Element> = {
    "Agenda": <SessionAgenda agenda={session?.agenda} />,
    "Resolutions": <SessionResolutions />,
    "Attendance": <SessionAttendance session={session} />
  }
  
  if (!session) {return <div>Session not found.</div>;}
  
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-serif text-3xl font-bold">
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
