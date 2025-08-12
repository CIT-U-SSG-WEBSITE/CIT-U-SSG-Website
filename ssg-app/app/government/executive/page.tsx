import React from 'react';
import {fetchCommissionsFiltered} from "@/backend/controllers/commissionController";
import {fetchOfficersByCommission} from "@/backend/controllers/officerController";
import MeetTheTeam from "@/components/Government/MeetTheTeam";
import CommissionsList from "@/components/Government/CommissionsList";
import {CommissionModel} from "@/backend/models/commissionModel";
import {OfficerModel} from "@/backend/models/officerModel";

async function Page() {
  // Fetch the cabinet-level commissions from the controller
  let commissions: CommissionModel[] = [];
  let executiveCommittee: OfficerModel[] = [];
  
  try {
    commissions = await fetchCommissionsFiltered("CABINET-LEVEL COMMISSION");
    
    const order = [
      "President",
      "Vice President",
      "Secretary General",
      "Treasurer General",
      "Executive Auditor",
      "Cabinet Secretary",
      "Solicitor General",
    ];
    executiveCommittee = await fetchOfficersByCommission("EXECOM", order);
  } catch (error) {
    console.error("Error loading executive page data:", error);
    // Continue with empty arrays if database is not available
  }
  
  return (
    <div className="flex flex-col w-full h-fit gap-14 md:gap-16">
      <div className="w-full flex flex-col gap-10">
        <div className="flex h-[240px] md:h-[360px] lg:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden bg-near-white">
          <img
            src="/banner-executive.png"
            alt="officer photo"
            loading="lazy"
            className="h-full w-full  object-cover rounded-3xl"
          />
        </div>
        
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col w-full gap-1">
            <h1 className="font-serif text-3xl font-medium">Executive Branch</h1>
            <span className="text-lg">Leading with Vision and Action</span>
          </div>
          <p>The Executive Branch, led by the SSG President, drives the Supreme Student Government&apos;s initiatives. Supported by its <i>commissions</i>, it turns student concerns into action, oversees programs, and works with all sectors to uphold student welfare through responsive leadership and service.</p>
        </div>
      </div>
      
      <MeetTheTeam
        officers={executiveCommittee}
        title="Executive committee"
        subtitle="Meet the key leaders shaping student governance."
      />
      
      <CommissionsList
        commissions={commissions}
        title="Cabinet-level commissions"
        subtitle="Specialized bodies supporting the Executive Branch."
      />
    </div>
  );
}

export default Page;