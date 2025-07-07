"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {AlignRight as Hamburger} from 'lucide-react';
import {useMediaQuery} from "react-responsive";

import { Button } from "@/components/ui/Button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/NavigationMenu";

interface linkPair {
  name: string;
  href: string;
}

interface linkGroup {
  title: string;
  links: linkPair[] | string;
}

/**
 * These are the links for the header navigation. Links are organized into groups. These groups are rendered as
 * dropdowns (tab and desktop) or list in a sidebar (mobile).
 * */
const headerLinks : linkGroup[] = [
  {
    title: "Government",
    links: [
      { name: "List of officers", href: "/government/officers" },
      { name: "Executive",        href: "/government/executive" },
      { name: "Legislative",      href: "/government/legislative" },
      { name: "Judiciary",        href: "/government/judiciary" },
      { name: "Constitution",     href: "/government/constitution" },
    ]
  },
  {
    title: "Actions",
    links: [
      { name: "Session",            href: "/actions/sessions" },
      { name: "Projects",           href: "/actions/projects" },
      { name: "Resolutions",        href: "/actions/resolutions" },
      { name: "Executive orders",   href: "/actions/eo" },
      { name: "Letters of Appeal",  href: "/actions/appeals" },
    ]
  },
  {
    title: "Services",
    links: "/services"
  },
  {
    title: "Contact",
    links: "/"
  },
];

function HeaderBar() {
  const isMobile = useMediaQuery({maxWidth: 640});

  return (
    <header className="flex w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 justify-between fixed top-0 z-50 bg-background backdrop-blur-sm text-dark-neutral">
      <Link href="/" className="flex gap-3 items-center">
        <Image width={42} height={20} src="/icon_logo.png" alt="SSG Bridge the Gap logo"/>
        <span className="font-bold hidden lg:block font-serif text-md select-none">
          CIT-U Supreme Student Government
        </span>
      </Link>

      { /**
       This is the header navigation links.
       In mobile (<640px), it renders a hamburger with a toggle sidebar.
       In tab and desktop, it renders a row of link tabs.
       */
        isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Hamburger />
            </Button>
          </SheetTrigger>
          <SheetContent >
            <div className="flex flex-col py-12 gap-10 px-6 overflow-y-auto scrollbar-thin">
              {headerLinks.map(linkGroup =>
                <>
                  {Array.isArray(linkGroup.links) ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-lg font-serif flex">{linkGroup.title}</span>
                      <div className="flex flex-col gap-4 text-balance">
                        {linkGroup.links.map(link => (
                          <Link href={link.href} className="text-sm">
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={linkGroup.links} className="text-lg font-serif flex">{linkGroup.title}</Link>
                  )}
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {headerLinks.map(linkGroup =>
              (Array.isArray(linkGroup.links) ? (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{linkGroup.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col pl-0 py-2 w-[160px] gap-2">
                      {linkGroup.links.map(link => (
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href={link.href}>{link.name}</Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={linkGroup.links}>{linkGroup.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))
            )}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
}

export default HeaderBar;