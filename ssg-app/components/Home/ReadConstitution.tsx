import React from 'react';
import {Button} from "@/components/ui/Button";
import {ArrowRight} from "lucide-react";

function ReadConstitution() {
  return (
    <section className="flex w-full px-36 py-10 bg-maroon_gradient text-light-neutral justify-center">
      <div className="flex flex-row gap-16 w-full max-w-[1320px] items-center justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold font-serif">The Supreme Student Government Constitution</h2>
          <p>
            The Constitution of the CIT University Supreme Student Government is the guiding document that outlines our
            principles, structure, and operations. It serves as the foundation for our governance and ensures transparency,
            accountability, and representation for all Technologians.
          </p>
          <Button variant="secondary" className="w-fit">
            Read now
            <ArrowRight />
          </Button>
        </div>
        <img
          src="/cover.png"
          alt="Artistic representation of the CIT University Supreme Student Government"
          className="HERO_BANNER h-full w-1/2 rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

export default ReadConstitution;