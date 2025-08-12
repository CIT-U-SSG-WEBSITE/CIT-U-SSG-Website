import React from 'react';
import {Button} from "@/components/ui/Button";
import {ChevronRight} from "lucide-react";
import {CommissionModel} from "@/backend/models/commissionModel";
import Link from "next/link";

interface Props {
  commission: CommissionModel;
}

function CommissionCard({ commission }: Props) {
  // Determine the route based on commission type
  const getCommissionRoute = (type: string) => {
    switch (type) {
      case "CABINET-LEVEL COMMISSION":
        return `/government/commissions/executive/${commission.id}`;
      case "LEGISLATIVE COMMITTEE":
        return `/government/commissions/legislative/${commission.id}`;
      default:
        return `/government/commissions/executive/${commission.id}`; // fallback
    }
  };

  return (
    <Link href={getCommissionRoute(commission.type)} className="block">
      <div key={commission.name} className="flex gap-6 rounded-3xl p-6 justify-between items-start shadow-lg bg-near-white hover:shadow-xl transition-shadow cursor-pointer">
        <div className="flex max-md:flex-col gap-4">
          {commission.photo ? (
            <img src={`/api/images?filename=${commission.photo}`} alt="" className="rounded-full w-20 h-20"/>
          ) : (
            <div className="min-w-20 grow"></div>
          )}
          <div className="md:px-3 flex flex-col gap-1">
            <span className="font-serif font-medium text-lg">{commission.name}</span>
            <span className="text-sm">{commission.brief_description}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CommissionCard;