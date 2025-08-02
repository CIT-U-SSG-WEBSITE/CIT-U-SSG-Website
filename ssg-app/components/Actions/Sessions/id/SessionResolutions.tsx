import React from 'react';
import {ResolutionModel} from "@/backend/models/resolutionModel";

interface Props {
  resolutions: ResolutionModel[];
}

function SessionResolutions({ resolutions } : Props) {
  console.log(resolutions);
  
  return (
    <div>Resolutions</div>
  );
}

export default SessionResolutions;