import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-8 md:gap-16 px-4 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-4xl font-medium leading-[120%]">FOR THE TECHNOLOGIANS, ALWAYS</span>
          <span className="text-lg lg:text-xl">The sole representative and voice of the Technologians</span>
        </div>
        <Link href="/actions">
          <Button variant="default" className="w-fit">
            Learn more
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div className="flex h-[320px] md:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden">
        <img
          src="/banner-ssg.jpg"
          alt="officer photo"
          loading="lazy"
          className=" object-cover rounded-3xl h-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;