import React from 'react';
import {SessionAgendaModelPlus} from "@/backend/models/sessionAgendaModel";
import SessionAgendaCard from "@/components/Actions/Sessions/id/agenda/SessionAgendaCard";

interface Props {
  agenda: SessionAgendaModelPlus[] | undefined;
}

function SessionAgenda({ agenda }: Props) {
  return (
    <div className="flex flex-col w-full h-fit gap-4">
      {agenda && agenda.length > 0 ? (
        agenda.map(agendum => (
          <SessionAgendaCard key={agendum.number} number={agendum.number} item={agendum.item}/>
        ))
      ) : (
        <p>No agenda items available.</p>
      )}
    </div>
  );
}

export default SessionAgenda;