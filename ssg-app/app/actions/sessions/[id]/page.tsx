import React from 'react';
import { fetchSessionById } from "@/backend/controllers/sessionController";
import {SessionModel} from "@/backend/models/sessionModel";
import SessionSummary from "@/components/Actions/Sessions/SessionSummary";
import SessionTabMenu from "@/components/Actions/Sessions/SessionTabMenu";

export default async function Page({ params }: { params: { id: string } }) {
  const session : SessionModel | null = await fetchSessionById(params.id);
  const tabs : string[] = ["Agenda", "Resolutions", "Attendance"];
  
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
      <SessionTabMenu tabs={tabs} />
    </div>
  );
}
