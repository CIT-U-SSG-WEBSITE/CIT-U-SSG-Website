'use client';

import { ArrowRight } from "lucide-react";
import {SessionModelPlus} from "@/backend/models/sessionModel";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import DOMPurify from 'dompurify';
import {toOrdinal} from "@/lib/utils/ordinal";
import Image from "next/image";

type Props = {
  session: SessionModelPlus;
}

export default function SessionCard({session}: Props) {
  return (
    <div className="bg-near-white w-full h-fit rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-start md:items-center p-3 md:py-2 md:px-3 gap-4 md:gap-6 shrink-0 !border-none">
      {/* Image as background */}
      <div
        className="justify-between w-full md:w-[300px] lg:w-[240px] xl:w-[300px] h-[184px] rounded-xl overflow-hidden flex-shrink-0 bg-cover bg-center"
        style={ session.photo ? { backgroundImage: `url(/api/images?filename=${session.photo})` } : { backgroundImage: `url('/cover.png')` }}
        aria-label={`${session.type.toLowerCase()} session ${session.number} thumbnail`}>
        <Link href={`/actions/sessions/${session.id}`} className={`flex flex-col p-4 gap-2 w-full h-full justify-between bg-gradient-to-tr ${session.type === "EMERGENCY" ? "from-maroon via-maroon-light/70" : "from-gold via-gold/70"} to-transparent`}>
          <Image src="/logo-ssg.png" alt="SSG logo" className="w-9 h-9 opacity-90 rounded-full select-none" width={40} height={40} />
          <div className={`flex flex-col w-[180px] font-medium ${session.type === "EMERGENCY" ? "text-gold-light/80" : "text-light-neutral/80"}`}>
            <span className="w-full text-4xl font-serif select-none">{toOrdinal(session.number).toUpperCase()}</span>
            <span className="w-full text-xl select-none">
            {session.number && session.type &&
              session.type}
          </span>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow max-md:px-2 md:pt-5 md:pb-3 gap-4 md:pr-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium font-serif text-dark-neutral">
            {session.numberOrdinal} {session.type.charAt(0) + session.type.slice(1).toLowerCase()} Session
          </h2>
          <p className="text-sm italic">
            {session.present} present • {session.date}
          </p>
          <div
            className="text-dark-neutral mt-2 line-clamp-2 font-sans"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(session.summary || "") }}
          />
        </div>

        {/* Learn More */}
        <Link href={`/actions/sessions/${session.id}`}>
          <Button variant="ghost" className="!px-0 cursor-pointer hover:underline hover:text-gold">
            Learn more
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
