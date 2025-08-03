"use client";

import React from 'react';
import {useSearchStore} from "@/store/searchStore";
import {ExecutiveOrderModel} from "@/backend/models/executiveOrderModel";
import ExecutiveOrderCard from "@/components/Actions/ExecutiveOrders/ExecutiveOrderCard";

interface Props {
  executiveOrders: ExecutiveOrderModel[];
}

function ExecutiveOrdersTable({ executiveOrders } : Props) {
  const searchTerm = useSearchStore(state => state.search.trim().toLowerCase())
  
  // Filter sessions by session type and search term
  const getFilteredExecutiveOrders = (): ExecutiveOrderModel[] => {
    return executiveOrders.filter(executiveOrder => {
      const fieldsToMatch = [
        executiveOrder.number?.toString(),
        executiveOrder.title
      ].map(r => r && r.toLowerCase())
      
      return fieldsToMatch.some(field => field && field.includes(searchTerm))
    })
  };
  
  const filteredExecutiveOrders = getFilteredExecutiveOrders();
  
  return (
    <div className="flex flex-col gap-4">
      {filteredExecutiveOrders.length > 0 ? (
        filteredExecutiveOrders.map(executiveOrder => (
          <ExecutiveOrderCard
            key={executiveOrder.id}
            executiveOrder={executiveOrder} />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-dark-neutral/50 font-sans">
            No Executive Orders found!
          </p>
        </div>
      )}
    </div>
  );
}

export default ExecutiveOrdersTable;