"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {useMediaQuery} from "react-responsive";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "@/components/ui/NavigationMenu";

type Props = {
  links: string[];
}

function SideNavigation({links}: Props) {
  const pathname = usePathname();
  const pathTokens = pathname.split("/");
  const currentPage = pathTokens[1];
  const currentSection = pathTokens[2];
  const isTablet = useMediaQuery({maxWidth: 768});
  
  return (
    <>
      {isTablet ? (
        <NavigationMenu>
          <NavigationMenuItem className="list-none">
            <NavigationMenuTrigger className="rounded-none font-serif text-base lg:text-lg pb-1.5 px-0 gap-1 flex w-fit transition-all duration-300 border-b-4 font-bold border-gold ">
              {`${currentSection[0].toUpperCase()}${currentSection.slice(1)}`}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col pl-0 py-2 w-[160px] gap-2">
                {links.filter(link => currentSection !== link.toLowerCase())
                  .map((link) => (
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={`/${currentPage}/${link.toLowerCase()}`}>{link}</Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
      ) : (
        <nav>
          <ul className="flex lg:flex-col gap-5">
            {links.map((link) => (
              <li className={`font-serif lg:text-lg pb-1.5 flex w-fit transition-all duration-300 border-b-4 ${currentSection === link.toLowerCase() ? "font-bold border-gold" : "border-transparent"}`}>
                <Link href={`/${currentPage}/${link.toLowerCase()}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default SideNavigation;