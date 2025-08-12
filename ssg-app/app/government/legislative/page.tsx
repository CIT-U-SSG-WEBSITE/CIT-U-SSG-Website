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
  let legislativeCore: OfficerModel[] = [];
  
  try {
    commissions = await fetchCommissionsFiltered("LEGISLATIVE COMMITTEE", ["LEGISCORE"]);
    
    const order = [
      "House Speaker",
      "Speaker pro Tempore",
      "Legislative Secretary",
      "Asst. Legislative Secretary",
    ];
    legislativeCore = await fetchOfficersByCommission("LEGISCORE", order);
  } catch (error) {
    console.error("Error loading legislative page data:", error);
    // Continue with empty arrays if database is not available
  }
  
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      <div className="flex h-[240px] md:h-[360px] lg:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden bg-near-white">
        <img
          src="/banner-legislative.png"
          alt="officer photo"
          loading="lazy"
          className="h-full w-full  object-cover rounded-3xl"
        />
      </div>
      
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-serif text-3xl font-bold">Legislative Branch</h1>
          <span className="text-lg">Voices United for Progress</span>
        </div>
        <p>The Legislative Branch, led by the SSG Vice President, drives the Supreme Student Government&apos;s initiatives. Supported by its <i>commissions</i>, it turns student concerns into action, oversees programs, and works with all sectors to uphold student welfare through responsive leadership and service.</p>
      </div>
      
      <MeetTheTeam
        officers={legislativeCore}
        title="Legislative Core"
        subtitle="Meet the student leaders driving policy and representation."
      />
      
      <CommissionsList
        commissions={commissions}
        title="Legislative Committees"
        subtitle="Oversight, policy-making, and student representation in action."
      />
    </div>
  );
}

export default Page;