import React from 'react';
import {ResolutionModelPlus} from "@/backend/models/resolutionModel";
import ResolutionCard from "@/components/Actions/Resolutions/ResolutionCard";

interface Props {
  resolutions: ResolutionModelPlus[];
}

function SessionResolutions({ resolutions } : Props) {
  const adoptedResolutions = resolutions.filter(resolution => resolution.is_adopted && resolution.number);
  const pendingResolutions = resolutions.filter(resolution => resolution.is_adopted && !resolution.number);
  const blockedResolutions = resolutions.filter(resolution => !resolution.is_adopted && !resolution.number);
  
  return (
    <div className="flex flex-col gap-4 w-full h-fit">
      {resolutions && resolutions.length > 0 ? (
        <div className="w-full flex flex-col gap-16">
          {adoptedResolutions.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium font-serif pb-2">Adopted Resolutions</h2>
              {adoptedResolutions.map(resolution => (
                <ResolutionCard
                  key={resolution.id}
                  resolution={resolution}
                  showVotes={true}
                />
              ))}
            </div>
          )}
          {pendingResolutions.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium font-serif pb-2">Pending Documentation</h2>
              {pendingResolutions.map(resolution => (
                <ResolutionCard
                  key={resolution.id}
                  resolution={resolution}
                  showVotes={true}
                />
              ))}
            </div>
          )}
          {blockedResolutions.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-medium font-serif pb-2">Blocked Resolutions</h2>
              {blockedResolutions.map(resolution => (
                <ResolutionCard
                  key={resolution.id}
                  resolution={resolution}
                  showVotes={true}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>No resolutions available.</p>
      )}
    </div>
  );
}

export default SessionResolutions;