"use client";

import React from 'react';
import DOMPurify from "dompurify";

type Props = {
  summary: string  | null | undefined;
}

function SessionSummary({ summary }: Props) {
  return (
    <div
      className="text-dark-neutral mt-2"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(summary || "") }}
    />
  );
}

export default SessionSummary;