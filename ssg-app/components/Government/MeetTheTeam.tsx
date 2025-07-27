"use client"

import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/Button";
import {OfficerModel} from "@/backend/models/officerModel";
import {useMediaQuery} from "react-responsive";
import OfficerCard from "@/components/ui/OfficerCard";

interface Props {
  officers: OfficerModel[];
  title?: string;
  subtitle?: string;
}

export default function MeetTheTeam({ officers,
                                 title,
                                 subtitle }: Props) {
  // check is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col w-full gap-1">
          {title && <span className="font-serif text-3xl font-bold">{title}</span>}
          {subtitle && <span>{subtitle}</span>}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {officers.map((officer) =>
          <OfficerCard officer={officer} isMobile={isMobile} />
        )}
      </div>
    </section>
  );
}