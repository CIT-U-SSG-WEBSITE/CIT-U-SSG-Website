"use client"

import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";
import {fetchOfficersByCommission} from "@/backend/controllers/officerController";
import {OfficerModel} from "@/backend/models/officerModel";

function MeetTheAdministration() {
  // Fetch the EXECOM officers from the controller
  const [officers, setOfficers] = useState<OfficerModel[]>([]);
  
  useEffect(() => {
    fetchOfficersByCommission("EXECOM").then(setOfficers);
  }, []);
  
  console.log(officers);
  
  return (
    <section className="ADMIN w-full max-w-[1320px] flex flex-col gap-16 px-20">
      <div className="ADMIN_TEXT flex justify-between items-end">
        <div className="flex flex-col max-w-[600px] gap-1">
          <span className="font-serif text-3xl font-bold">Meet the administration</span>
          <span>Get to know the student leaders behind the Supreme Student Government — united in purpose, driven by service.
            </span>
        </div>
        <Button variant="default">
          Learn more
          <ArrowRight />
        </Button>
      </div>
      
      <div className="flex gap-6">
        {officers.map((officer) => (
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
        ))}
      </div>
    </section>
  );
}

export default MeetTheAdministration;