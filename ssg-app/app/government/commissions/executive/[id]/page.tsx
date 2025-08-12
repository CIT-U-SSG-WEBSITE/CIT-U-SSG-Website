import React from 'react';
import { notFound } from 'next/navigation';
import {fetchCommissionById} from "@/backend/controllers/commissionController";
import {fetchOfficersByCommission} from "@/backend/controllers/officerController";
import MeetTheTeam from "@/components/Government/MeetTheTeam";
import {CommissionModel} from "@/backend/models/commissionModel";
import {OfficerModel} from "@/backend/models/officerModel";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let commission: CommissionModel | null = null;
  let officers: OfficerModel[] = [];
  
  try {
    commission = await fetchCommissionById(id);
    
    if (commission) {
      // Get officers for this commission
      officers = await fetchOfficersByCommission(commission.initials);
    }
  } catch (error) {
    console.error("Error loading commission data:", error);
  }
  
  if (!commission) {
    notFound();
  }
  
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      <div className="flex h-[240px] md:h-[360px] lg:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden bg-near-white">
        <img
          src="/banner-executive.png"
          alt="commission banner"
          loading="lazy"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-serif text-3xl font-bold">{commission.name}</h1>
        </div>
        <p>{commission.full_description}</p>
      </div>
      
      <MeetTheTeam
        officers={officers}
        title="Commission Members"
        subtitle="Meet the dedicated officers serving this commission."
      />
    </div>
  );
}
