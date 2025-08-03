"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/Button";
import { useSearchParams } from 'next/navigation';

type Props = {
  tabs: string[];
};

function SessionTabMenu({ tabs }: Props) {
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]);
  
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && tabs.includes(tabParam)) {
      setCurrentTab(tabParam);
    }
  }, [searchParams, tabs]);
  
  const handleTabClick = (clickedTab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", clickedTab);
    window.history.replaceState(null, '', `?${params.toString()}`);
    setCurrentTab(clickedTab); // update local state
  };
  
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
