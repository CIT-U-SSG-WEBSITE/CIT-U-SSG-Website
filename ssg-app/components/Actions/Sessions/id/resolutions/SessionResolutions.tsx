import React from 'react';
import {ResolutionModel} from "@/backend/models/resolutionModel";
import ResolutionCard from "@/components/Actions/Resolutions/ResolutionCard";

interface Props {
  resolutions: ResolutionModel[];
}

function SessionResolutions({ resolutions } : Props) {
  console.log(resolutions);
  
  return (
    <div className="flex flex-col gap-4 w-full h-fit">
      {resolutions && resolutions.length > 0 ? (
        resolutions.map((resolution, index) => (
          <ResolutionCard resolution={resolution} showVotes={true} key={index} />
        ))
      ) : (
        <p>No resolutions available.</p>
      )}
    </div>
  );
}

export default SessionResolutions;