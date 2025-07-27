"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { ListFilter } from "lucide-react";

import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {CommissionModel} from "@/backend/models/commissionModel";

type Checked = DropdownMenuCheckboxItemProps["checked"]

interface OfficersSearchProps {
  commissions: CommissionModel[]
}

export function OfficersFilter({ commissions }: OfficersSearchProps) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="text-dark-neutral/90 !gap-5 !pl-5 !pr-4 !py-1.5">
          <span>Filter</span>
          <ListFilter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>Commissions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {commissions.map((commission : CommissionModel) => (
          <DropdownMenuCheckboxItem
            key={commission.id}
            checked={showStatusBar}
            onCheckedChange={(checked) => setShowStatusBar(checked)}
          >
            {commission.name} ({commission.initials})
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
