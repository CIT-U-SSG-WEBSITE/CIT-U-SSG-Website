"use client"

import { useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import OfficerCard from "@/components/ui/OfficerCard"
import type { OfficerModel } from "@/backend/models/officerModel"
import type { CommissionModel } from "@/backend/models/commissionModel"

interface OfficersTableProps {
  officers: OfficerModel[]
  commissions: CommissionModel[]
  searchTerm: string
  selectedDepartment: string
  selectedCommittee: string
}

export default function OfficersTable({
  officers,
  commissions,
  searchTerm,
  selectedDepartment,
  selectedCommittee,
}: OfficersTableProps) {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  const filteredOfficers = useMemo(() => {
    return officers.filter((officer) => {
      const matchesSearch = searchTerm
        ? officer.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          officer.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          officer.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
          officer.commission.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true

      const matchesDepartment = selectedDepartment === "all" || officer.commission.type === selectedDepartment

      const matchesCommittee = selectedCommittee === "all" || officer.commission.name === selectedCommittee

      return matchesSearch && matchesDepartment && matchesCommittee
    })
  }, [officers, searchTerm, selectedDepartment, selectedCommittee])

  if (isSmallScreen) {
    return (
      <div className="space-y-4">
        {filteredOfficers.length > 0 ? (
          filteredOfficers.map((officer, index) => (
            <OfficerCard
              key={`${officer.firstname}-${officer.lastname}-${index}-mobile`}
              officer={officer}
              isMobile={true}
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

  return (
    <div className="bg-near-white rounded-lg shadow-sm border-2 border-light-neutral overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-light-neutral">
            <tr>
              <th className="text-left py-3 px-6 font-sans text-sm font-medium text-[#171615]/80">
                <i>Officer</i>
              </th>
              <th className="text-center py-3 px-6 font-sans text-sm font-medium text-[#171615]/80">
                <i>Position</i>
              </th>
              <th className="text-right py-3 px-6 font-sans text-sm font-medium text-[#171615]/80">
                <i>Committee</i>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-light-neutral">
            {filteredOfficers.length > 0 ? (
              filteredOfficers.map((officer, index) => (
                <tr
                  key={`${officer.firstname}-${officer.lastname}-${index}`}
                  className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-maroon_gradient flex-shrink-0">
                        <img
                          src="/zeth.png"
                          alt={`${officer.firstname} ${officer.lastname}`}
                          className="w-full h-full object-cover"/>
                      </div>
                      <span className="font-sans text-dark-neutral">
                        Hon. {officer.firstname} {officer.lastname}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-center">
                    <span className="font-sans text-dark-neutral">{officer.position}</span>
                  </td>

                  <td className="py-4 px-6 text-right">
                    <span className="font-sans text-dark-neutral">{officer.commission.name}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-12 text-center">
                  <p className="text-lg text-dark-neutral/50 font-sans">No officers found matching your criteria</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
