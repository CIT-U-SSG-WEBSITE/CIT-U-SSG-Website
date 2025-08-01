"use client"

import React, {useEffect, useRef} from 'react';
import {useSessionSearchStore} from "@/store/sessionSearchStore";
import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "@/components/ui/Button";
import {Search, X} from "lucide-react";

function SessionSearch() {
  const { search: searchTerm, setSearch } = useSessionSearchStore();
  const router = useRouter();
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Load initial query param into Zustand store
  useEffect(() => {
    const query = searchParams.get("search") || ""
    setSearch(query)
  }, [searchParams, setSearch])
  
  // Helper to update the URL
  const updateSearchParam = (value: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    value.trim()
      ? params.set("search", value.trim())
      : params.delete("search")
    router.push(`?${params.toString()}`, { scroll: false })
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateSearchParam(searchTerm)
      inputRef.current?.blur()
    }
  }
  
  const handleSearchClick = () => inputRef.current?.focus()
  
  const handleClear = () => {
    setSearch("")
    updateSearchParam("")
    inputRef.current?.blur()
  }
  
  const showClear = searchTerm.trim().length > 0
  
  return (
    <div className="flex justify-between items-center w-full max-w-[480px] gap-4 px-6 py-1.5 !bg-near-white shadow-2xl/10 text-dark-neutral rounded-full focus-within:ring-2 focus-within:ring-ring/50 focus-within:border-ring">
      <input
        ref={inputRef}
        placeholder="Search sessions..."
        className="!text-base w-full !p-0 !shadow-none placeholder:text-dark-neutral !focus-visible:border-none !focus-visible:ring-0 !outline-none"
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {showClear ? (
        <Button
          variant="ghost"
          className="!p-0"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <X className="text-dark-neutral/90 h-6 w-6" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="!p-0"
          onClick={handleSearchClick}
          aria-label="Focus search"
        >
          <Search className="text-dark-neutral/90 h-6 w-6" />
        </Button>
      )}
    </div>
  );
}

export default SessionSearch;