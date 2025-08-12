"use client"

import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";
import {fetchExecomOfficers} from "@/backend/controllers/officerController";
import {OfficerModel} from "@/backend/models/officerModel";
import {useMediaQuery} from "react-responsive";
import OfficerCard from "@/components/Government/Officers/OfficerCard";

function MeetTheAdministration() {
  // Fetch the EXECOM officers from the controller
  const [officers, setOfficers] = useState<OfficerModel[]>([]);
  
  useEffect(() => {
    fetchExecomOfficers().then(setOfficers);
  }, []);
  
  // set the count of officers to display based on screen size
  let officerCount : number;
  if (useMediaQuery({ maxWidth: 1280 })) {
    officerCount = 6;
  } else {
    officerCount = 5;
  }
  
  // check is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-16 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col lg:max-w-[600px] gap-1">
          <span className="font-serif text-3xl font-bold">Meet the administration</span>
          <span>Get to know the student leaders behind the Supreme Student Government — united in purpose, driven by service.
            </span>
        </div>
        <Button variant="default" className="w-fit">
          Learn more
          <ArrowRight />
        </Button>
      </div>
      
      <div className="flex md:grid xl:flex gap-4 lg:gap-6 max-md:flex-col grid-cols-3 xl:flex-row max-md:items-end">
        {officers.slice(0, officerCount).map((officer, index) =>
          <OfficerCard key={index} officer={officer} isMobile={isMobile} />
        )}
      </div>
    </section>
  );
}

export default MeetTheAdministration;