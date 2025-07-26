import React from 'react';
import { OfficerModel } from "@/backend/models/officerModel";
type Props = {
  officer: OfficerModel;
  isMobile: boolean;
}

function OfficerCard({ officer, isMobile }: Props) {
  return (
    (isMobile) ? (
      <div
        key={`${officer.firstname} ${officer.lastname}`}
        className="w-full rounded-lg bg-near-white flex gap-4 py-3 px-4 items-center border border-light-neutral">
        <div className="flex h-12 w-12 justify-center items-center rounded-full bg-maroon overflow-hidden">
          <img src="/zeth.png" alt="officer photo" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-base font-bold text-dark-neutral">
            Hon. {officer.firstname} {officer.lastname}
          </span>
          <span className="font-sans text-sm text-dark-neutral opacity-70">
            {officer.position} • {officer.commission.name}
          </span>
        </div>
      </div>
    ) : (
      <div key={`${officer.firstname} ${officer.lastname}`} className="flex flex-col gap-4 w-full h-fit">
        <div className="flex h-[256px] w-full justify-center items-start rounded-3xl bg-maroon_gradient overflow-hidden">
          <img
            src={`api/images?filename=${officer.photo}`}
            alt="officer photo"
            loading="lazy"
            className="w-[90%] object-cover rounded-3xl mt-[-16px] xl:mt-2"
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