"use client"

import React from "react"
import type { OfficerModel } from "@/backend/models/officerModel"
import OfficerProfileCard from "@/components/Officers/OfficerProfileCard"
import { useOfficerSearchStore } from "@/store/officerSearchStore"
import { useOfficerCommissionFilterStore } from "@/store/officerCommissionFilterStore"

interface Props {
  officers: OfficerModel[]
}

export default function OfficersTable({ officers }: Props) {
  // Zustand stores for search and commission filters
  const searchTerm = useOfficerSearchStore(state => state.search.trim().toLowerCase())
  const checkedCommissionIds = useOfficerCommissionFilterStore(state => state.checkedCommissionIds)
  
  // Filter officers by commission and search term
  const getFilteredOfficers = (): OfficerModel[] => {
    const filteredByCommission =
      checkedCommissionIds.length > 0
        ? officers.filter(officer => checkedCommissionIds.includes(officer.commission.id))
        : officers
    
    return filteredByCommission.filter(officer => {
      const fieldsToMatch = [
        `${officer.firstname} ${officer.lastname}`,
        officer.position,
        officer.commission.name,
        officer.commission.initials,
      ].map(s => s.toLowerCase())
      
      return fieldsToMatch.some(field => field.includes(searchTerm))
    })
  }
  
  const filteredOfficers = getFilteredOfficers()
  
  return (
    <div className="flex max-md:flex-col md:grid md:grid-cols-2 gap-4">
      {filteredOfficers.length > 0 ? (
        filteredOfficers.map(officer => (
          <OfficerProfileCard
            key={officer.position + officer.lastname + officer.firstname}
            officer={officer}
          />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-dark-neutral/50 font-sans">
            No officers found!
          </p>
        </div>
      )}
    </div>
  )
}