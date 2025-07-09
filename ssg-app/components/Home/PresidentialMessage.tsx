import React from 'react';

function PresidentialMessage() {
  return (
    <section className="MESSAGE flex gap-12 w-full h-[268px] bg-maroon_gradient text-light-neutral justify-center">
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