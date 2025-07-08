import React from 'react';
import {fetchCommissionsFiltered} from "@/backend/controllers/commissionController";

async function Page() {
  // Fetch the cabinet-level commissions from the controller
  const commissions = await fetchCommissionsFiltered("CABINET-LEVEL COMMISSION");
  
  return (
    <div className="flex flex-col w-full h-fit min-h-60 border border-dark-neutral">
      Government: Executive
      
      <div className="flex flex-col">
        {commissions.map((commission) => (
          <div key={commission.name}>{commission.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Page;