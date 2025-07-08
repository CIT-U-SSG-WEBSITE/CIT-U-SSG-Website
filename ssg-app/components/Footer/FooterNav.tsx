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
    title: "Documents",
    links: [
      { name: "Constitution",       href: "/government/constitution" },
      { name: "Resolutions",        href: "/actions/resolutions" },
      { name: "Executive orders",   href: "/actions/eo" },
      { name: "Letters of Appeal",  href: "/actions/appeals" },
    ]
  },
  {
    title: "Actions",
    links: [
      { name: "Session",    href: "/actions/sessions" },
      { name: "Projects",   href: "/actions/projects" },
      { name: "Incentives", href: "/services" },
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
            <AccordionItem value={linkGroup.title}>
              <AccordionTrigger className="font-serif text-lg">
                {linkGroup.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {Array.isArray(linkGroup.links) && linkGroup.links.map(link => (
                  <Link href={link.href} className="text-sm">
                    {link.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="w-full flex justify-between pt-3 max-w-[640px]">
          {footerLinks.map(linkGroup => (
            <nav className="flex flex-col gap-4">
                <span className="font-serif text-lg">
                  {linkGroup.title}
                </span>
              {Array.isArray(linkGroup.links) && linkGroup.links.map(link => (
                <Link href={link.href} className="text-sm">
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