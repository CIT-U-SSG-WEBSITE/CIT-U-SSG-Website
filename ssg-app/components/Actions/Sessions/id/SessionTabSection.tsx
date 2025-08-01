"use client";

import {JSX} from 'react';
import {useSearchParams} from "next/navigation";

type Props = {
  tabs : Record<string, JSX.Element>
}

function SessionTabSection({ tabs }: Props) {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");
  
  return tabs[currentTab || Object.keys(tabs)[0]];
}

export default SessionTabSection;
