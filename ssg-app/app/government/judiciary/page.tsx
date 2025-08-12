import React from 'react';
import {fetchOfficersByCommission} from "@/backend/controllers/officerController";
import MeetTheTeam from "@/components/Government/MeetTheTeam";

async function Page() {
  const order = [
    "Chief Justice",
    "Associate Justice",
  ];
  const legislativeCore = await fetchOfficersByCommission("SSC", order);
  
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      <div className="w-full flex flex-col gap-10">
        <div className="flex h-[240px] md:h-[360px] lg:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden bg-near-white">
          <img
            src="/banner-judiciary.png"
            alt="officer photo"
            loading="lazy"
            className="h-full w-full  object-cover rounded-3xl"
          />
        </div>
      
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col w-full gap-1">
            <h1 className="font-serif text-3xl font-medium">Judicial Branch</h1>
            <span className="text-lg">Upholding Justice and Integrity</span>
          </div>
          <p>The Judicial Branch, embodied by the Student Supreme Court, ensures the fair interpretation and application of the SSG Constitution and by-laws. It resolves disputes, safeguards student rights, and upholds the rule of law within the university community.</p>
        </div>
      </div>
      
      <MeetTheTeam
        officers={legislativeCore}
        title="Student Supreme Court"
        subtitle="Meet the stewards of justice and integrity in student governance."
      />
    </div>
  );
}

export default Page;