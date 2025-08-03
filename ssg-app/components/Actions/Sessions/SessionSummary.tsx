"use client";

import React from 'react';

type Props = {
  summary: string  | null | undefined;
}

function SessionSummary({ summary }: Props) {
  const paragraphs = summary?.split("\\n");
  
  return (
    <div className="w-full flex flex-col gap-4 text-dark-neutral mt-2">
      {paragraphs && paragraphs.map((line, index) => (
        <p key={index}>
          {line.trim()}
        </p>
      ))}
    </div>
  );
}

export default SessionSummary;