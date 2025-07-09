import React from 'react';
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";

function HeroSection() {
  return (
    <section className="HERO w-full max-w-[1320px] flex flex-col gap-16 px-20">
      <div className="HERO_TEXT flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-serif text-4xl font-bold">FOR THE TECHNOLOGIANS, ALWAYS</span>
          <span className="text-xl">The sole representative and voice of the Technologians</span>
        </div>
        <Button variant="default">
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