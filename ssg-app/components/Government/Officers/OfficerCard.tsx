"use client"

import React from 'react';
import { OfficerModel } from "@/backend/models/officerModel";
import {UserRound as UserIcon} from "lucide-react";
import {useMediaQuery} from "react-responsive";
type Props = {
  officer: OfficerModel;
  isMobile?: boolean;
}

function OfficerCard({ officer, isMobile: isMobileProp }: Props) {
  // Use the provided isMobile prop if available, otherwise use mediaQuery
  const isMobile = typeof isMobileProp === "boolean"
    ? isMobileProp
    : useMediaQuery({ maxWidth: 768 });
  
  return (
    (isMobile) ? (
      <div key={`${officer.firstname} ${officer.lastname}`}
        className="w-full rounded-lg bg-near-white flex gap-4 py-3 px-4 items-center border border-light-neutral">
        {officer.photo ? (
          <div className="flex h-12 w-12 justify-center items-start rounded-full bg-maroon_gradient overflow-hidden">
            <img src={`/api/images?filename=${officer.photo}`}
                 alt="officer photo"
                 className="w-full object-cover mt-1/2"/>
          </div>
        ) : (
          <div
            className="flex h-12 w-12 p-2 justify-center items-start rounded-full bg-maroon_gradient overflow-hidden">
            <UserIcon className="w-full h-full text-light-neutral/72" strokeWidth={2}/>
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-serif text-base font-bold text-dark-neutral">
            Hon. {officer.firstname} {officer.lastname}
          </span>
          <span className="font-sans text-sm text-dark-neutral opacity-70">
            {officer.position} • {officer.commission.initials}
          </span>
        </div>
      </div>
    ) : (
      <div key={`${officer.firstname} ${officer.lastname}`} className="flex flex-col gap-4 w-full h-fit">
        {officer.photo ? (
          <div className="flex h-[256px] w-full justify-center items-start rounded-3xl bg-maroon_gradient overflow-hidden">
            <img
              src={`/api/images?filename=${officer.photo}`}
              alt="officer photo"
              className="w-full object-cover mt-1/2" />
          </div>
        ) : (
          <div className="flex h-[256px] w-full  px-3 justify-center items-center rounded-3xl bg-maroon_gradient overflow-hidden">
            <UserIcon className="w-full h-full text-light-neutral/80" strokeWidth={1}/>
          </div>
        )}
        <div className="px-3 flex flex-col gap-1">
          <span className="font-serif font-bold">{officer.position}</span>
          <span className="text-sm">{officer.firstname} {officer.lastname}</span>
        </div>
      </div>
    )
  );
}

export default OfficerCard;