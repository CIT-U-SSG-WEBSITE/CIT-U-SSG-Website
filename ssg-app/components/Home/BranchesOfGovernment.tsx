import React from 'react';
import {Button} from "@/components/ui/Button";
import {
  ArrowRight,
  Landmark as ExecutiveIcon,
  Scale as JudiciaryIcon,
  ScrollText as LegislativeIcon
} from "lucide-react";
import Link from "next/link";

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
  return (
    <section className="BRANCHES w-full max-w-[1320px] flex flex-col gap-16 px-20">
      <div className="BRANCHES_TEXT flex justify-between items-end">
        <div className="flex flex-col max-w-[600px] gap-1">
          <span className="font-serif text-3xl font-bold">Branches of government</span>
          <span>The Supreme Student Government stands on three strong pillars, each playing a unique role, working together to serve and represent every Technologian.
            </span>
        </div>
        <Button variant="default">
          Learn more
          <ArrowRight />
        </Button>
      </div>
      <div className="flex gap-16 w-full">
        {Branches.map(branch => {
          const Icon = branch.icon;
          return (
            <div className="flex flex-col gap-8 w-full items-start">
              <div className="rounded-full p-3 bg-gold text-light-neutral">
                <Icon size={32} strokeWidth={2} />
              </div>
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
          )
        })}
      </div>
    </section>
  );
}

export default BranchesOfGovernment;