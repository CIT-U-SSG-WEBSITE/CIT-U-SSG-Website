import React from 'react';
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import {Undo2 as Back} from "lucide-react";

function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center px-12 pb-24 max-w-[640px] mx-auto gap-12">
      <img src="/loading.gif" alt="Loading illustration"/>
    </div>
  );
}

export default Loading;