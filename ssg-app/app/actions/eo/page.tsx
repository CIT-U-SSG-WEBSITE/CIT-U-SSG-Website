import React from 'react';
import {fetchAllExecutiveOrders} from "@/backend/controllers/executiveOrderController";
import SearchBar from "@/components/ui/SearchBar";
import ExecutiveOrdersTable from "@/components/Actions/ExecutiveOrders/ExecutiveOrdersTable";

async function Page() {
  const executiveOrders = await fetchAllExecutiveOrders();
  
  return (
    <div className="flex flex-col w-full h-fit min-h-screen bg-light-neutral">
      <div className="flex justify-between items-center gap-4 mb-10">
        <SearchBar placeholder="Search for an executive order.." />
        {/*<SessionFilter sessionTypes={sessionTypes} />*/}
      </div>
      <ExecutiveOrdersTable executiveOrders={executiveOrders} />
    </div>
  );
}

export default Page;