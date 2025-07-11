"use client"

import React from 'react';
import {useMediaQuery} from "react-responsive";

function PresidentialMessage() {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  
  return isTablet ? (
    <section className="flex flex-col gap-8 px-8 md:px-12 py-8 w-full bg-maroon_gradient text-light-neutral justify-center items-center">
      <div className="flex gap-4 w-fit justify-center items-center">
        <div className="flex h-[64px] w-[64px] justify-center items-center rounded-full bg-gold_gradient">
          <img
            src="/zeth.png"
            alt="officer photo"
            className="h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold">Zeth Villamala</span>
          <span>SSG President, '2425</span>
        </div>
      </div>
      <p className="italic text-center">“The SSG exists to serve, to listen, and to lead with integrity. This term, we move forward together — guided by purpose, and grounded in the voice of every Technologian.”
      </p>
    </section>
  ) : (
    <section className="flex gap-12 px-20 w-full h-[268px] bg-maroon_gradient text-light-neutral justify-center">
      <img
        src="/zeth.png"
        alt="41st CIT University Supreme Student Government President Zeth Villamala"
        className="HERO_BANNER w-[280px] h-full object-cover"
      />
      <div className="MESSAGE_CONTENT flex flex-col gap-8 w-full max-w-[780px] justify-center">
        <p>“The SSG exists to serve, to listen, and to lead with integrity. This term, we move forward together — guided by purpose, and grounded in the voice of every Technologian.”
        </p>
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold">Zeth Villamala</span>
          <span>SSG President, '2425</span>
        </div>
      </div>
    </section>
  );
}

export default PresidentialMessage;