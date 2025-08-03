import React from 'react';
import {ResolutionModel} from "@/backend/models/resolutionModel";
import {fetchAllResolutions} from "@/backend/controllers/resolutionController";
import ResolutionTable from "@/components/Actions/Resolutions/ResolutionTable";
import SearchBar from "@/components/ui/SearchBar";

export default async function Page() {
  const resolutions : ResolutionModel[] = await fetchAllResolutions();
  
  return (
    <div className="flex flex-col w-full h-fit min-h-screen bg-light-neutral">
      <div className="flex justify-between items-center gap-4 mb-10">
        <SearchBar placeholder="Search for a topic or resolution..." />
        {/*<SessionFilter sessionTypes={sessionTypes} />*/}
      </div>
      <ResolutionTable resolutions={resolutions} />
    </div>
  );
}