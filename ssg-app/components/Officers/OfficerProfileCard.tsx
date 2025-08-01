import React from 'react';
import { UserRound as UserIcon } from 'lucide-react';
import { OfficerModel } from "@/backend/models/officerModel";
type Props = {
  officer: OfficerModel;
}

function OfficerProfileCard({ officer }: Props) {
  return (
    <div
      key={`${officer.firstname} ${officer.lastname}`}
      className="w-full rounded-4xl bg-near-white flex gap-4 py-3 px-3 items-center border border-light-neutral">
      
      {officer.photo ? (
        <div className="flex h-20 w-20 justify-center items-start rounded-3xl bg-maroon_gradient overflow-hidden">
          <img
            src={`/api/images?filename=${officer.photo}`}
            alt="officer photo"
            className="w-full object-cover mt-1/2" />
        </div>
        ) : (
        <div className="flex h-20 w-20 pt-2 px-3 justify-center items-center rounded-3xl bg-maroon_gradient overflow-hidden">
          <UserIcon className="w-20 h-20 text-light-neutral/80" />
        </div>
      )}
      <div className="flex flex-col">
          <span className="font-serif text-lg font-bold text-dark-neutral">
            {officer.firstname} {officer.lastname}
          </span>
        <span className="font-sans text-base text-dark-neutral opacity-70">
            {officer.position} • {officer.commission.initials}
          </span>
      </div>
    </div>
  );
}

export default OfficerProfileCard;