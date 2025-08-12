"use client";

import React from 'react';
import {ResolutionModelPlus} from "@/backend/models/resolutionModel";
import ResolutionCard from "@/components/Actions/Resolutions/ResolutionCard";
import {useSearchStore} from "@/store/searchStore";
import {toOrdinal} from "@/lib/utils/ordinal";

interface Props {
  resolutions: ResolutionModelPlus[];
}

function ResolutionTable({ resolutions } : Props) {
  const searchTerm = useSearchStore(state => state.search.trim().toLowerCase())
  
  // Filter sessions by session type and search term
  const getFilteredResolutions = (): ResolutionModelPlus[] => {
    return resolutions.filter(resolution => {
      const sessionName = `${resolution.session_number && toOrdinal(resolution.session_number)} ${resolution.session_type} session`;
      
      const fieldsToMatch = [
        resolution.number?.toString(),
        resolution.title,
        resolution.author?.firstname,
        resolution.author?.lastname,
        sessionName,
      ].map(r => r && r.toLowerCase())
      
      return fieldsToMatch.some(field => field && field.includes(searchTerm))
    })
  };
  
  const filteredResolutions = getFilteredResolutions();
  
  return (
    <div className="flex flex-col gap-4">
      {filteredResolutions.length > 0 ? (
        filteredResolutions.map(resolution => (
          <ResolutionCard
            key={resolution.id}
            resolution={resolution} />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-dark-neutral/50 font-sans">
            No resolutions found!
          </p>
        </div>
      )}
    </div>
  );
}

export default ResolutionTable;