// app/not-found.tsx

import {Button} from "@/components/ui/Button";
import { Undo2 as Back } from 'lucide-react';
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center px-12 pb-24 max-w-[640px] mx-auto gap-12">
      <img src="/art_404.svg" alt="Paga not found illustration"/>
      <p className="text-dark-neutral/80">Sorry, the page you're looking for doesn't exist.</p>
      <Button variant="default" className="flex items-center">
        <Link href="/">Back to home</Link>
        <Back/>
      </Button>
    </div>
  );
}
