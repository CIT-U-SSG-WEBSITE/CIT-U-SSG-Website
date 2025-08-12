"use client";

import React from 'react';
import {Button} from "@/components/ui/Button";
import {
  ArrowRight,
  Landmark as ExecutiveIcon,
  Scale as JudiciaryIcon,
  ScrollText as LegislativeIcon
} from "lucide-react";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

type Branch = {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
}

const Branches : Branch[] = [
  {
    name: "Executive",
    description: "The Executive Branch carries out the day-to-day leadership of the government. Headed by the President, it ensures that programs and initiatives are implemented efficiently and in line with the student body's needs.",
    url: "/government/executive",
    icon: ExecutiveIcon,
  },
  {
    name: "Legislative",
    description: "The Legislative Branch represents the student population by crafting resolutions, policies, and initiatives. Comprised of elected representatives, it ensures that every voice is heard and translated into action.",
    url: "/government/legislative",
    icon: LegislativeIcon,
  },
  {
    name: "Judiciary",
    description: "The Judiciary Branch safeguards justice and accountability within the SSG. It interprets the constitution, resolves disputes, and ensures that all actions comply with the principles of good governance.",
    url: "/government/judiciary",
    icon: JudiciaryIcon,
  },
]

function BranchesOfGovernment() {
  // Always call useMediaQuery at the top level
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-12 md:gap-16 px-4 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col lg:max-w-[600px] gap-2">
          <span className="font-serif text-3xl font-medium leading-[120%]">Branches of government</span>
          <span>The Supreme Student Government stands on three strong pillars, each playing a unique role, working together to serve and represent every Technologian.
            </span>
        </div>
        <Link href="/government">
          <Button variant="default" className="w-fit">
            Learn more
            <ArrowRight />
          </Button>
        </Link>
      </div>
      
      <div className="flex gap-8 md:gap-12 lg:gap-16 w-full flex-col lg:flex-row">
        {(isMobile) ? (
          <>
            {Branches.map((branch, index) => {
              const Icon = branch.icon;
              return (
                <div key={index} className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full items-start">
                  <div className="flex gap-4 items-center">
                    <div className="flex rounded-full w-12 h-12 p-2.5 bg-gold text-light-neutral justify-center items-center">
                      <Icon size={32} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col grow-1 items-start">
                      <span className="text-2xl font-serif font-bold">The {branch.name}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 lg:gap-8 w-full items-start">
                    <div className="CONTENT flex flex-col gap-4 w-full pl-2">
                      <span>{branch.description}</span>
                      <Link href={branch.url}>
                        <Button variant="ghost" className="!px-0">
                          Learn more
                          <ArrowRight />
                        </Button>
                      </Link>
                    </div>
                    
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <>
            {Branches.map((branch, index) => {
              const Icon = branch.icon;
              return (
                <div key={index} className="flex lg:flex-col gap-6 lg:gap-8 w-full items-start">
                  <div className="rounded-full p-3 bg-gold text-light-neutral">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-6 lg:gap-8 w-full items-start">
                    <div className="CONTENT flex flex-col gap-4 w-full">
                      <span className="text-2xl font-serif font-bold">The {branch.name}</span>
                      <span>{branch.description}</span>
                    </div>
                    <Link href={branch.url}>
                      <Button variant="ghost" className="!px-0">
                        Learn more
                        <ArrowRight />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
    </section>
  );
}

export default BranchesOfGovernment;