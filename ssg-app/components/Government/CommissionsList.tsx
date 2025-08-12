import React from 'react';
import {CommissionModel} from "@/backend/models/commissionModel";
import CommissionCard from "@/components/Government/CommissionCard";

interface Props {
  commissions : CommissionModel[];
  title?: string;
  subtitle?: string;
}

function CommissionsList({ commissions,
                           title,
                           subtitle }: Props) {
  return (
    <section className="w-full max-w-[1320px] flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-0">
        <div className="flex flex-col w-full gap-1">
          {title && <span className="font-serif text-3xl font-bold">{title}</span>}
          {subtitle && <span>{subtitle}</span>}
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        {commissions.map((commission : CommissionModel, index) => (
          <CommissionCard key={index} commission={commission} />
        ))}
      </div>
    </section>
  );
}

export default CommissionsList;