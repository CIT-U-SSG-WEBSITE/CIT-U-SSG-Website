import React from 'react';
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import {Undo2 as Back} from "lucide-react";

function Page() {
  return (
    <div
      className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center px-12 pb-24 max-w-[640px] mx-auto gap-12">
      <img src="/art_under_construction.svg" alt="Site under construction illustration"/>
      <div className="flex flex-col gap-2">
        <p className="font-serif text-xl">We’re still building this part of the site.</p>
        <p>Hang tight — we’ll be launching it shortly.</p>
      </div>
      <Button variant="default" className="flex items-center">
        <Link href="/">Back to home</Link>
        <Back/>
      </Button>
    </div>
  );
}

export default Page;