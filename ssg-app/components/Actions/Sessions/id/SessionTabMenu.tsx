"use client";

import React from 'react';
import {Button} from "@/components/ui/Button";
import { useSearchParams } from 'next/navigation';

type Props = {
  tabs: string[];
}

function SessionTabMenu({ tabs }: Props) {
  // This can be dynamic based on the current tab in the params
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || tabs[0];
  
  const handleTabClick = (clickedTab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", clickedTab);
    window.history.replaceState(null, '', `?${params.toString()}`);
  }
  
  return (
    <nav>
      <ul className="flex gap-8">
        {tabs.map((tab) => (
          <li key={tab} className={`font-serif pb-1.5 flex w-fit transition-all duration-300 border-b-4 ${currentTab === tab ? "font-bold border-gold" : "border-transparent"}`}>
            <Button
              variant="ghost"
              className="whitespace-nowrap p-0 lg:font-medium"
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SessionTabMenu;