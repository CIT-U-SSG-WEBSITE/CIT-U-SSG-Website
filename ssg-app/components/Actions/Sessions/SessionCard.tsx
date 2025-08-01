'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {SessionModel} from "@/backend/models/sessionModel";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import DOMPurify from 'dompurify';

type Props = {
  session: SessionModel;
}

export default function SessionCard({session}: Props) {
  return (
    <div className="bg-near-white w-full h-full rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-start md:items-center p-4 pb-10 md:p-[8px] gap-4 md:gap-6 shrink-0 !border-none">
      {/* Image */}
      <div className="relative w-full aspect-[320/184] md:max-w-[320px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[320px] rounded-xl overflow-hidden flex-shrink-0">
        <Image src="/cover.png" alt={`${session.type.toLowerCase()} session ${session.number} thumbnail`} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow pr-[10px]">
        <div>
          <h2
            className="text-[24px] font-bold font-serif text-dark-neutral">
            {session.numberOrdinal} {session.type.charAt(0) + session.type.slice(1).toLowerCase()} Session
          </h2>
          <p
            className="text-[14px] italic text-gray-500 font-sans"
            style={{ color: "var(--color-dark-neutral)" }}
          >
            {session.present} present • {session.date}
          </p>
          <div
            className="text-dark-neutral mt-2 line-clamp-3 font-sans"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(session.summary || "") }}
          />
        </div>

        {/* Learn More */}
        <Link href={`/actions/sessions/${session.id}`}>
          <Button variant="ghost" className="!px-0">
            Learn more
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
