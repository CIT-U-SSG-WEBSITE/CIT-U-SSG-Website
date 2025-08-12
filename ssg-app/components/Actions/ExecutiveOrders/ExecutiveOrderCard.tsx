import React from 'react';
import {UserRound as UserIcon} from "lucide-react";
import Link from "next/link";
import {ExecutiveOrderModel} from "@/backend/models/executiveOrderModel";

interface Props {
  executiveOrder: ExecutiveOrderModel;
}

function ExecutiveOrderCard({ executiveOrder}: Props) {
  return (
    <div className="flex flex-col gap-6 p-5 md:p-6 rounded-3xl bg-near-white shadow-3xl shadow-lxl shadow-dark-neutral/10">
      <Link href={`/actions/eo/${executiveOrder.id}`} className="font-serif font-medium text-base md:text-lg italic">
        {executiveOrder.title}
      </Link>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-between md:items-end">
        {executiveOrder.officer && (
          <div className="flex gap-3">
            <div className="w-15 h-15 rounded-full bg-gold_gradient">
              {executiveOrder.officer.photo ? (
                <div className="flex w-15 h-15 rounded-full bg-gold_gradient justify-center items-start overflow-hidden">
                  <img
                    src={`/api/images?filename=${executiveOrder.officer.photo}`}
                    alt="officer photo"
                    className="w-full object-cover mt-1/2" />
                </div>
              ) : (
                <div className="flex w-15 h-15 rounded-full bg-gold_gradient px-3 justify-center items-center overflow-hidden">
                  <UserIcon className="w-20 h-20 text-light-neutral/80" />
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg font-semibold">
                Hon. {executiveOrder.officer.firstname} {executiveOrder.officer.lastname}
              </span>
              <span className="italic font-medium text-dark-neutral/80">SSG President, &apos;{executiveOrder.series}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExecutiveOrderCard;