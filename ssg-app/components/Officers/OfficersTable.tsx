"use client"

import type { OfficerModel } from "@/backend/models/officerModel"
import OfficerProfileCard from "@/components/Officers/OfficerProfileCard";
import {useOfficerSearchStore} from "@/app/store/officerSearchStore";

interface OfficersTableProps {
  officers: OfficerModel[];
}

export default function OfficersTable({
                                        officers,
                                      }: OfficersTableProps) {
  // Zustand store for search term
  const { search } = useOfficerSearchStore();
  
  const searchTerm = search.trim().toLowerCase();
  const filteredOfficers = officers.filter(officer => {
    const fullName = `${officer.firstname} ${officer.lastname}`.toLowerCase();
    const position = officer.position.toLowerCase();
    const commissionName = officer.commission.name.toLowerCase();
    const commissionInitials = officer.commission.initials.toLowerCase();
    
    return (
      fullName.includes(searchTerm) ||
      position.includes(searchTerm) ||
      commissionName.includes(searchTerm) ||
      commissionInitials.includes(searchTerm)
    );
  });
  
  return (
    <div className="flex max-md:flex-col md:grid md:grid-cols-2 gap-4">
      {filteredOfficers.length > 0 ? (
        filteredOfficers.map((officer, index) => (
          <OfficerProfileCard
            key={`${officer.position}-${officer.lastname}-${index}`}
            officer={officer}
          />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-dark-neutral/50 font-sans">No officers found!</p>
        </div>
      )}
    </div>
  )
}
