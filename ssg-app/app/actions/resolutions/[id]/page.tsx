import React from 'react';
import {ResolutionModel} from "@/backend/models/resolutionModel";
import {fetchResolutionById} from "@/backend/controllers/resolutionController";
import {UserIcon} from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {
  const resolution : ResolutionModel | null = await fetchResolutionById(params.id);
  
  if (!resolution) {return <div>Resolution not found.</div>;}
  if (!resolution.number) {return <div>Resolution not yet publicly available</div>;}
  
  const text = resolution.body && resolution.body.length > 0 ? resolution.body : null;
  const sections = text ? text.split("---END OF SECTION---") : [];
  const whereasClauses = sections[0] ? sections[0].split("\\nWHEREAS,").slice(1).map(clause => clause.trim()) : null;
  const nowThereforeClause = sections[1] ? sections[1].split("\\nNOW, THEREFORE,")[1] : null;
  
  const resolvedClauses = sections[2] ? sections[2].split("\\nBE IT FURTHER RESOLVED,").slice(1).map(clause => clause.trim()) : null;
  
  const resolvedClausesCount = resolvedClauses ? resolvedClauses.length : 0;
  const herebyResolvedClause = resolvedClauses && resolvedClausesCount > 0 ? resolvedClauses[0].trim() : undefined;
  const furtherResolvedClauses = resolvedClauses && resolvedClausesCount > 2 ? resolvedClauses.slice(1, resolvedClausesCount - 1).map(clause => clause.trim()) : [];
  const finallyResolvedClause = resolvedClauses && resolvedClausesCount > 1 ? resolvedClauses[resolvedClausesCount - 1].trim() : undefined;
  
  return (
    <div className="flex flex-col w-full max-w-[840px] h-fit gap-8 md:gap-12 mx-auto">
      <div className="flex flex-col w-full gap-8 md:gap-12 pb-8 md:pb-12 border-b border-dark-neutral/20">
        <h1 className="font-serif text-xl md:text-3xl lg:text-4xl leading-8 md:leading-10 lg:leading-14 italic">
          A Resolution to {resolution.title.split("by Hon. ")[0].trim()}
        </h1>
        <div className="flex flex-col gap-6">
          <div className="w-full flex flex-col md:flex-row gap-8 justify-between md:items-end">
            {resolution.author && (
              <div className="flex gap-3">
                <div className="w-14 h-14 rounded-full bg-gold_gradient">
                  {resolution.author.photo ? (
                    <div className="flex w-15 h-15 rounded-full bg-gold_gradient justify-center items-start overflow-hidden">
                      <img
                        src={`/api/images?filename=${resolution.author.photo}`}
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
                Hon. {resolution.author.firstname} {resolution.author.lastname}
              </span>
                  <span className="italic font-medium text-dark-neutral/80">main author</span>
                </div>
              </div>
            )}
            
            {/*<Link href={`/actions/sessions/${resolution.session_id}`} className={`flex text-xs ${resolution.session_type === "EMERGENCY" ? "bg-maroon-light" : "bg-gold"} text-near-white px-3 py-1 rounded-full font-medium`}>
          {resolution.session_number && resolution.session_type &&
            `${toOrdinal(resolution.session_number)} ${resolution.session_type.charAt(0) + resolution.session_type.slice(1).toLowerCase()} Session`}
        </Link>*/}
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-dark-neutral/90 max-w-[720px]">
            <span className="font-medium italic">co-authored with</span>
            <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 md:pl-6">
              {resolution.co_authors && resolution.co_authors.map((coAuthor, index) => (
                <div className="flex gap-2 items-center font-medium" key={index}>
                  {coAuthor.photo ? (
                    <div className="flex w-7 h-7 rounded-full bg-gold_gradient justify-center items-start overflow-hidden border border-light-neutral">
                      <img
                        src={`/api/images?filename=${coAuthor.photo}`}
                        alt="officer photo"
                        className="w-full object-cover mt-1/2" />
                    </div>
                  ) : (
                    <div className="flex w-7 h-7 rounded-full bg-gold_gradient pt-1 px-1 justify-center items-center overflow-hidden border border-light-neutral">
                      <UserIcon className="w-20 h-20 text-light-neutral/80" />
                    </div>
                  )}
                  <span className="">Hon. {coAuthor.firstname} {coAuthor.lastname}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {resolution.body && resolution.body.length > 0 && (
        <article className="flex flex-col gap-4 w-full font-serif">
          <>
            {whereasClauses && whereasClauses.map((section, index) => {
              const [content, list] = section.split("\\list");
              
              return (
                <p key={index}>
                  <p key={index} className="prose prose-lg prose-neutral leading-7">
                    <strong>WHEREAS</strong>, {content.trim()}
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
            <strong>NOW THEREFORE</strong>, {nowThereforeClause}
          </p>
          <p className="prose prose-lg prose-neutral leading-7">
            <strong>RESOLVED, AS IT IS HEREBY RESOLVED</strong>, {herebyResolvedClause}
          </p>
          <>
            {furtherResolvedClauses && furtherResolvedClauses.map((section, index) => {
              const [content, list] = section.split("\\list");
              
              return (
                <p key={index}>
                  <p key={index} className="prose prose-lg prose-neutral leading-7">
                    <strong>BE IT FURTHER RESOLVED</strong>, {content.trim()}
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
          <p className="prose prose-lg prose-neutral leading-7">
            <strong>BE IT FINALLY RESOLVED</strong>, {finallyResolvedClause}
          </p>
        </article>
      )}
    </div>
  );
}
