import React from 'react';
import { notFound } from 'next/navigation';
import {UserIcon} from "lucide-react";
import {fetchExecutiveOrderById} from "@/backend/controllers/executiveOrderController";
import {ExecutiveOrderModel} from "@/backend/models/executiveOrderModel";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let executiveOrder: ExecutiveOrderModel | null = null;
  
  try {
    executiveOrder = await fetchExecutiveOrderById(id);
  } catch (error) {
    console.error("Error loading executive order data:", error);
  }
  
  if (!executiveOrder) {
    notFound();
  }
  
  if (!executiveOrder.number) {return <div>Executive order  not yet publicly available</div>;}
  
  const text = executiveOrder.body && executiveOrder.body.length > 0 ? executiveOrder.body : null;
  const sections = text ? text.split("---END OF SECTION---") : [];
  const whereasClauses = sections[0] ? sections[0].split("\\n").map(clause => clause.trim()) : null;
  const nowThereforeClause = sections[1] ? sections[1].split("\\NOW, THEREFORE,")[0] : null;
  const sectionClauses = sections[2] ? sections[2].split("\\n").map(clause => clause.trim()) : null;
  
  return (
    <div className="flex flex-col w-full max-w-[840px] h-fit gap-8 md:gap-12 mx-auto">
      <div className="flex flex-col w-full gap-8 md:gap-12 pb-8 md:pb-12 border-b border-dark-neutral/20">
        <h1 className="font-serif text-xl md:text-3xl lg:text-4xl leading-8 md:leading-10 lg:leading-14 italic">
          {executiveOrder.title}
        </h1>
        <div className="flex flex-col gap-6">
          <div className="w-full flex flex-col md:flex-row gap-8 justify-between md:items-end">
            {executiveOrder.officer && (
              <div className="flex gap-3">
                <div className="w-14 h-14 rounded-full bg-gold_gradient">
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
              <span className="text-lg font-bold">
                Hon. {executiveOrder.officer.firstname} {executiveOrder.officer.lastname}
              </span>
                  <span className="italic font-medium text-dark-neutral/80">SSG President, &apos;{executiveOrder.series}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {executiveOrder.body && executiveOrder.body.length > 0 && (
        <article className="flex flex-col gap-4 w-full font-serif">
          <>
            {whereasClauses && whereasClauses.map((section, index) => {
              const clause = section.split("\\list");
              const content = clause[0];
              const list = clause[1];
              
              return (
                <p key={index}>
                  <p key={index} className="prose prose-lg prose-neutral leading-7">
                    {content.trim()}
                  </p>
                  <p className="pl-2 gap-2">
                    {list && list.trim().length > 0 && (list.split("\\i").map((item, index) => (
                      <p key={index}>{item}</p>
                    )))}
                  </p>
                </p>
              )
            })}
          </>
          <p className="prose prose-lg prose-neutral leading-7">
            {nowThereforeClause}
          </p>
          <>
            {sectionClauses && sectionClauses.map((section, index) => {
              const [content, list] = section.split("\\list");
              
              return (
                <p key={index}>
                  <p key={index} className="prose prose-lg prose-neutral leading-7">
                    {content.trim()}
                  </p>
                  <p className="pl-4 gap-1">
                    {list && list.trim().length > 0 && (list.split("\\i").map((item, index) => (
                      <p key={index} className="pb-2">{item}</p>
                    )))}
                  </p>
                </p>
              )
            })}
          </>
        </article>
      )}
    </div>
  );
}
