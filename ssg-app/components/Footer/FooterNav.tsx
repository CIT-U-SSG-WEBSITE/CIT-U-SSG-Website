"use client"

import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

interface linkPair {
  name: string;
  href: string;
}

interface linkGroup {
  title: string;
  links: linkPair[];
}

const footerLinks : linkGroup[] = [
  {
    title: "Government",
    links: [
      { name: "Executive",    href: "/" },
      { name: "Legislative",  href: "/" },
      { name: "Judiciary",    href: "/" },
      { name: "Officers",     href: "/" },
    ]
  },
  {
    title: "Documents",
    links: [
      { name: "Constitution",       href: "/" },
      { name: "Resolutions",        href: "/" },
      { name: "Executive orders",   href: "/" },
      { name: "Letters of Appeal",  href: "/" },
    ]
  },
  {
    title: "Activities",
    links: [
      { name: "Sessions",   href: "/" },
      { name: "Projects",   href: "/" },
      { name: "Incentives", href: "/" },
    ]
  },
];

function FooterNav(props) {
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
                {linkGroup.links.map(link => (
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
              {linkGroup.links.map(link => (
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