import React from 'react';
import {OfficerModel} from "@/backend/models/officerModel";

type Props = {
  officer: OfficerModel;
  isMobile: boolean;
}

function OfficerCard({ officer, isMobile }: Props) {
  return (
    (isMobile) ? (
      <div key={`${officer.firstname} ${officer.lastname}`} className="w-full rounded-4xl bg-near-white flex gap-4 py-2 pl-2 pr-6">
        <div className="flex h-[96px] w-[96px] justify-center items-center rounded-3xl bg-maroon_gradient">
          <img
            src="/zeth.png"
            alt="officer photo"
            className="h-full object-cover rounded-3xl"
          />
        </div>
        <div className="py-4 flex flex-col gap-1">
          <span className="font-serif font-bold">{officer.position}</span>
          <span className="text-sm">{officer.firstname} {officer.lastname}</span>
        </div>
      </div>
    ) : (
      <div key={`${officer.firstname} ${officer.lastname}`} className="flex flex-col gap-4 w-full h-fit">
        <div className="flex h-[256px] w-full justify-center items-center rounded-3xl bg-maroon_gradient">
          <img
            src="/zeth.png"
            alt="officer photo"
            className="h-full object-cover rounded-3xl"
          />
        </div>
        <div className="px-3 flex flex-col gap-1">
          <span className="font-serif font-bold">{officer.position}</span>
          <span className="text-sm">{officer.firstname} {officer.lastname}</span>
        </div>
      </div>
    )
  );
}

export default OfficerCard;