"use client"

import { useEffect, useState } from "react"
import { fetchOfficersByCommission } from "@/backend/controllers/officerController"
import { fetchCommissionsFiltered } from "@/backend/controllers/commissionController"
import OfficersSearch from "@/components/Officers/OfficersSearch"
import OfficersTable from "@/components/Officers/OfficersTable"
import OfficersLoading from "@/components/Officers/OfficersLoading"
import type { OfficerModel } from "@/backend/models/officerModel"
import type { CommissionModel } from "@/backend/models/commissionModel"

export default function Page() {
  const [officers, setOfficers] = useState<OfficerModel[]>([])
  const [commissions, setCommissions] = useState<CommissionModel[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")
  const [selectedCommittee, setSelectedCommittee] = useState<string>("all")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [fetchedOfficers, fetchedCommissions] = await Promise.all([
          fetchOfficersByCommission(),
          fetchCommissionsFiltered(),
        ])
        setOfficers(fetchedOfficers)
        setCommissions(fetchedCommissions)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <OfficersLoading />
  }

  return (
    <div className="flex w-full h-fit min-h-screen bg-light-neutral p-6">
      <div className="flex-1 max-w-5xl mx-auto">
        <OfficersSearch
          commissions={commissions}
          searchTerm={searchTerm}
          selectedDepartment={selectedDepartment}
          selectedCommittee={selectedCommittee}
          onSearchChange={setSearchTerm}
          onDepartmentChange={setSelectedDepartment}
          onCommitteeChange={setSelectedCommittee}/>
        <OfficersTable
          officers={officers}
          commissions={commissions}
          searchTerm={searchTerm}
          selectedDepartment={selectedDepartment}
          selectedCommittee={selectedCommittee}/>
      </div>
    </div>
  )
}
