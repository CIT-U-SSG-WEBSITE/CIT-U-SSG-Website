

import React from 'react';
import {OfficerModel} from "@/backend/models/officerModel";
import OfficerCard from "@/components/Government/Officers/OfficerCard";

interface Props {
  officers: OfficerModel[];
  title?: string;
  subtitle?: string;
}

export default function MeetTheTeam({ officers,
                                 title,
                                 subtitle }: Props) {
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col w-full gap-1">
          {title && <h2 className="font-serif text-3xl font-bold">{title}</h2>}
          {subtitle && <span>{subtitle}</span>}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {officers.map((officer, index) =>
          <OfficerCard key={index} officer={officer} />
        )}
      </div>
    </section>
  );
}