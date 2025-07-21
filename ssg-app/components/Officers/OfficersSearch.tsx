"use client"

import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import type { CommissionModel } from "@/backend/models/commissionModel"

interface OfficersSearchProps {
  commissions: CommissionModel[]
  searchTerm: string
  selectedDepartment: string
  selectedCommittee: string
  onSearchChange: (search: string) => void
  onDepartmentChange: (department: string) => void
  onCommitteeChange: (committee: string) => void
}

export default function OfficersSearch({
  commissions,
  searchTerm,
  selectedDepartment,
  selectedCommittee,
  onSearchChange,
  onDepartmentChange,
  onCommitteeChange,
}: OfficersSearchProps) {
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
  const [showCommitteeDropdown, setShowCommitteeDropdown] = useState(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  const departmentTypes = Array.from(new Set(commissions.map((c) => c.type)))

  const availableCommittees =
    selectedDepartment === "all" ? commissions : commissions.filter((c) => c.type === selectedDepartment)

  const handleDepartmentChange = (value: string) => {
    onDepartmentChange(value)
    setShowDepartmentDropdown(false)
    if (value !== selectedDepartment) {
      onCommitteeChange("all")
    }
  }

  const handleCommitteeChange = (value: string) => {
    onCommitteeChange(value)
    setShowCommitteeDropdown(false)
  }

  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-neutral opacity-50 h-4 w-4" />
        <Input
          placeholder="Search officers..."
          className="pl-10 bg-white font-sans text-base border border-light-neutral rounded-lg w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}/>
      </div>

      <div className={`${isSmallScreen ? "w-32" : "w-48"} relative`}>
        <button
          type="button"
          onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-light-neutral bg-white px-3 py-2 text-sm font-sans text-dark-neutral focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2">
          <span>
            {isSmallScreen
              ? "Filter"
              : selectedDepartment === "all"
                ? "Department"
                : selectedDepartment.replace(/_/g, " ")}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
        {showDepartmentDropdown && (
          <div className="absolute top-full mt-1 w-full bg-white border border-light-neutral rounded-md shadow-lg z-10 max-h-60 overflow-auto">
            <div
              className="px-3 py-2 hover:bg-light-neutral cursor-pointer text-sm font-sans text-dark-neutral"
              onClick={() => handleDepartmentChange("all")}>
              All Departments
            </div>
            {departmentTypes.map((type) => (
              <div
                key={type}
                className="px-3 py-2 hover:bg-light-neutral cursor-pointer text-sm font-sans text-dark-neutral"
                onClick={() => handleDepartmentChange(type)}>
                {type.replace(/_/g, " ")}
              </div>
            ))}
          </div>
        )}
      </div>

      {!isSmallScreen && (
        <div className="w-48 relative">
          <button
            type="button"
            onClick={() => setShowCommitteeDropdown(!showCommitteeDropdown)}
            className="flex h-10 w-full items-center justify-between rounded-md border border-light-neutral bg-white px-3 py-2 text-sm font-sans text-dark-neutral focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-2">
            <span>{selectedCommittee === "all" ? "Committee" : selectedCommittee}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </button>
          {showCommitteeDropdown && (
            <div className="absolute top-full mt-1 w-full bg-white border border-light-neutral rounded-md shadow-lg z-10 max-h-60 overflow-auto">
              <div
                className="px-3 py-2 hover:bg-light-neutral cursor-pointer text-sm font-sans text-dark-neutral"
                onClick={() => handleCommitteeChange("all")}>
                All Committees
              </div>
              {availableCommittees.map((commission) => (
                <div
                  key={commission.id}
                  className="px-3 py-2 hover:bg-light-neutral cursor-pointer text-sm font-sans text-dark-neutral"
                  onClick={() => handleCommitteeChange(commission.name)}>
                  {commission.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
