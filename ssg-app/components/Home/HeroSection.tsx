import React from 'react';
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-16 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col">
          <span className="font-serif text-2xl lg:text-4xl font-bold">FOR THE TECHNOLOGIANS, ALWAYS</span>
          <span className="text-md md:text-lg lg:text-xl">The sole representative and voice of the Technologians</span>
        </div>
        <Button variant="default" className="w-fit">
          Learn more
          <ArrowRight />
        </Button>
      </div>
      <img
        src="/cover.png"
        alt="Artistic representation of the CIT University Supreme Student Government"
        className="HERO_BANNER h-[420px] w-full rounded-3xl object-cover"
      />
    </section>
  );
}

export default HeroSection;