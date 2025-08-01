"use client"

import React from 'react';
import {SessionModel} from "@/backend/models/sessionModel";
import SessionCard from "@/components/Actions/Sessions/SessionCard";
import { useSessionFilterStore } from "@/store/sessionFilterStore";
import {useSessionSearchStore} from "@/store/sessionSearchStore";

interface Props {
  sessions: SessionModel[];
}

function SessionTable( {sessions} : Props ) {
  // Zustand stores for search and session filters
  const searchTerm = useSessionSearchStore(state => state.search.trim().toLowerCase())
  const checkedSessionTypes = useSessionFilterStore(state => state.checkedSessionTypes)
  
  // Filter sessions by session type and search term
  const getFilteredSessions = (): SessionModel[] => {
    const filteredBySearchType =
      checkedSessionTypes.length > 0
        ? sessions.filter(session => checkedSessionTypes.includes(session.type))
        : sessions
    
    return filteredBySearchType.filter(session => {
      const fieldsToMatch = [
        session.type,
        session.numberOrdinal,
      ].map(s => s.toLowerCase())
      
      return fieldsToMatch.some(field => field.includes(searchTerm))
    })
  };

  const filteredSessions = getFilteredSessions();

  return (
    <div className="flex flex-col gap-4">
      {filteredSessions.length > 0 ? (
        filteredSessions.map(session => (
          <SessionCard
            key={session.numberOrdinal + session.type.toLowerCase()}
            session={session}
          />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-dark-neutral/50 font-sans">
            No sessions found!
          </p>
        </div>
      )}
    </div>
  );
}

export default SessionTable;