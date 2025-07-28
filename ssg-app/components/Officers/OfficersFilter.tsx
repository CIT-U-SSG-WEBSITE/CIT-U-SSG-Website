"use client"

import * as React from "react"
import { ListFilter } from "lucide-react"

import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"

import { useOfficerCommissionFilterStore } from "@/store/officerCommissionFilterStore"
import { CommissionModel } from "@/backend/models/commissionModel"

interface OfficersFilterProps {
  commissions: CommissionModel[]
}

export function OfficersFilter({ commissions }: OfficersFilterProps) {
  // Grouping commissions
  const execomCommissions = commissions.filter(c => c.type === "EXECOM")
  const commissionsByType: Record<string, CommissionModel[]> = {
    "Executive Commissions": commissions.filter(c => c.type === "CABINET-LEVEL COMMISSION"),
    "Legislative Committees": commissions.filter(c => c.type === "LEGISLATIVE COMMITTEE"),
    "Others": commissions.filter(c =>
      c.type === "SUPREME COURT" || c.type === "CONSTITUTIONAL COMMISSION"
    ),
  }
  const typeOrder = ["Executive Commissions", "Legislative Committees", "Others"]
  
  // Zustand state and updater
  const { checkedCommissionIds, setCheckedCommissionIds } = useOfficerCommissionFilterStore();


  // Handle All toggle
  const allChecked = checkedCommissionIds.length === commissions.length;
  const handleAllToggle = (checked: boolean) => {
    setCheckedCommissionIds(checked ? commissions.map(c => c.id) : []);
  };

  // Handle individual commission toggle
  const handleCommissionToggle = (id: string, checked: boolean) => {
    setCheckedCommissionIds(prev => {
      if (checked) return Array.from(new Set([...prev, id]));
      return prev.filter(cid => cid !== id);
    });
  };
  
  const renderCommissionCheckbox = (commission: CommissionModel) => (
    <DropdownMenuCheckboxItem
      key={commission.id}
      checked={checkedCommissionIds.includes(commission.id)}
      onCheckedChange={checked => handleCommissionToggle(commission.id, checked)}
      onSelect={e => e.preventDefault()}
      className="!mx-0"
    >
      {commission.name} ({commission.initials})
    </DropdownMenuCheckboxItem>
  )
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="text-dark-neutral/90 !gap-5 !pl-5 !pr-4 !py-1.5"
        >
          <span>Filter</span>
          <ListFilter />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        className="w-80"
        align="end"
        sideOffset={8}
        onCloseAutoFocus={e => e.preventDefault()}
      >
        <DropdownMenuCheckboxItem
          checked={allChecked}
          onCheckedChange={handleAllToggle}
          onSelect={e => e.preventDefault()}
        >
          All
        </DropdownMenuCheckboxItem>
        
        {execomCommissions.length > 0 && execomCommissions.map(renderCommissionCheckbox)}
        
        <Accordion type="multiple" className="px-4 pt-2">
          {typeOrder.map(type =>
            commissionsByType[type]?.length > 0 ? (
              <AccordionItem key={type} value={type}>
                <AccordionTrigger>{type}</AccordionTrigger>
                <AccordionContent>
                  {commissionsByType[type].map(renderCommissionCheckbox)}
                </AccordionContent>
              </AccordionItem>
            ) : null
          )}
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
