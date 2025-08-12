"use client"

import React from 'react';
import { useSessionFilterStore } from "@/store/sessionFilterStore";
import { SessionType } from "@/backend/models/sessionModel";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/Button";
import {ListFilter} from "lucide-react";

interface Props {
  sessionTypes: (SessionType | "ALL")[];
}

function SessionFilter({ sessionTypes }: Props) {
  const { checkedSessionTypes, setCheckedSessionTypes } = useSessionFilterStore();
  
  // Handle All toggle
  const allChecked = checkedSessionTypes.length === sessionTypes.length;
  const handleAllToggle = (checked: boolean) => {
    setCheckedSessionTypes(checked ? sessionTypes : []);
  };
  
  // Handle individual session type toggle
  const handleSessionTypeToggle = (type: SessionType | "ALL", checked: boolean) => {
    setCheckedSessionTypes(prev => {
      if (checked) return Array.from(new Set([...prev, type]));
      return prev.filter(cid => cid !== type);
    });
  };
  
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
          All sessions
        </DropdownMenuCheckboxItem>
        
        {sessionTypes.filter(type => type !== "ALL").map(type => (
          <DropdownMenuCheckboxItem
            key={type}
            checked={checkedSessionTypes.includes(type)}
            onCheckedChange={checked => handleSessionTypeToggle(type, checked)}
            onSelect={e => e.preventDefault()}
            className="!mx-0"
          >
            {`${type[0]}${type.substring(1).toLowerCase()}`}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SessionFilter;