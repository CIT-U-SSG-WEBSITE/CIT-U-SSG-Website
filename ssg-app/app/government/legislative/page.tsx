import React from 'react';
import {fetchCommissionsFiltered} from "@/backend/controllers/commissionController";

async function Page() {
  // Fetch the legislative committees from the controller
  const committees = await fetchCommissionsFiltered("LEGISLATIVE COMMITTEE");
  
  return (
    <div className="flex flex-col w-full h-fit min-h-60 border border-dark-neutral">
      Government: Legislative
      
      <div className="flex flex-col">
        {committees.map((committee) => (
          <div key={committee.name}>{committee.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Page;