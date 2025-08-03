import React from 'react';
import {ResolutionModel} from "@/backend/models/resolutionModel";
import {fetchResolutionById} from "@/backend/controllers/resolutionController";

export default async function Page({ params }: { params: { id: string } }) {
  const resolution : ResolutionModel | null = await fetchResolutionById(params.id);
  
  if (!resolution) {return <div>Resolution not found.</div>;}
  
  return (
    <div className="flex flex-col w-full h-fit gap-16">
      {resolution.title}
    </div>
  );
}
