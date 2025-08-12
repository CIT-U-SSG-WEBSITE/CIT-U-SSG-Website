"use client";

// app/not-found.tsx

import {Button} from "@/components/ui/Button";
import { Undo2 as Back } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center px-12 pb-24 max-w-[640px] mx-auto gap-12">
      <img src="/art_404.svg" alt="Page not found illustration"/>
      <p className="text-dark-neutral/80">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Button variant="default" className="flex items-center gap-2" onClick={handleGoBack}>
        <Back/>
        Go Back
      </Button>
    </div>
  );
}
