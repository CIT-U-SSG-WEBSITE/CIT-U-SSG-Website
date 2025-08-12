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
import {linkPair} from "@/lib/link_types";

type Props = {
  links: linkPair[];
  defaultLink: string;
}

function SideNavigation({links, defaultLink}: Props) {
  const pathname = usePathname();
  const currentLink = links.find(link => link.href === pathname);
  const currentLinkName = currentLink ? currentLink.name : defaultLink;
  const isTablet = useMediaQuery({maxWidth: 768});
  
  return (
    <aside className="lg:pr-8">
      {isTablet ? (
        <NavigationMenu>
          <NavigationMenuItem className="list-none">
            <NavigationMenuTrigger className="rounded-none font-serif text-lg pb-1.5 px-0 gap-1 flex w-fit transition-all duration-300 border-b-4 font-bold border-gold ">
              {currentLinkName}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col pl-0 py-2 w-[160px] gap-2">
                {links.filter(link => pathname !== link.href)
                  .map((link) => (
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href={link.href}>{link.name}</Link>
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
            {links.map((link, index) => (
              <li key={index} className={`font-serif lg:text-lg pb-1.5 flex w-fit transition-all duration-300 border-b-4 ${pathname === link.href ? "font-bold border-gold" : "border-transparent"}`}>
                <Link href={link.href} className="whitespace-nowrap">{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}

export default SideNavigation;