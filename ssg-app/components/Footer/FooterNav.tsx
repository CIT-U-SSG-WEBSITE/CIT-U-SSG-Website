"use client"

import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/Accordion";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";
import {linkGroup} from "@/lib/link_types";

const footerLinks : linkGroup[] = [
  {
    title: "Government",
    links: [
      { name: "List of officers", href: "/government/officers" },
      { name: "Executive",        href: "/government/executive" },
      { name: "Legislative",      href: "/government/legislative" },
      { name: "Judiciary",        href: "/government/judiciary" },
    ]
  },
  {
    title: "Actions",
    links: [
      { name: "Session",    href: "/actions/sessions" },
      { name: "Resolutions",        href: "/actions/resolutions" },
      { name: "Executive orders",   href: "/actions/eo" },
    ]
  },
];

function FooterNav() {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      {isMobile ? (
        <Accordion type="single" collapsible className="w-full">
          {footerLinks.map(linkGroup => (
            <AccordionItem value={linkGroup.title} key={linkGroup.title}>
              <AccordionTrigger className="font-serif text-lg">
                {linkGroup.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {Array.isArray(linkGroup.links) && linkGroup.links.map(link => (
                  <Link key={link.name} href={link.href} className="text-sm">
                    {link.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="w-full flex justify-between pt-3 sm:max-w-[440px] lg:max-w-[360px] xl:max-w-[480px]">
          {footerLinks.map(linkGroup => (
            <nav className="flex flex-col gap-4" key={linkGroup.title}>
                <span className="font-serif text-lg">
                  {linkGroup.title}
                </span>
              {Array.isArray(linkGroup.links) && linkGroup.links.map(link => (
                <Link key={link.name} href={link.href} className="text-sm">
                  {link.name}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      )}
    </>
  );
}

export default FooterNav;