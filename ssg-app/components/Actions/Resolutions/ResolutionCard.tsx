import React from 'react';
import {UserRound as UserIcon} from "lucide-react";
import {ResolutionModelPlus} from "@/backend/models/resolutionModel";
import {toOrdinal} from "@/lib/utils/ordinal";
import Link from "next/link";

interface Props {
  resolution: ResolutionModelPlus;
  showVotes?: boolean;
}

function ResolutionCard({ resolution, showVotes = false }: Props) {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 rounded-3xl bg-near-white shadow-3xl shadow-lxl shadow-dark-neutral/10">
      <div className="flex flex-col w-full gap-2">
        <span className="text-xs font-medium uppercase px-1">{resolution.number && resolution.is_adopted ? (<>Resolution #<span className="font-medium text-sm">{resolution.number!}</span></>) : "Proposed Resolution" }</span>
        <Link href={`/actions/resolutions/${resolution.id}`} className="font-serif font-medium leading-[160%] px-1 text-base md:text-lg italic">
          {resolution.is_adopted ? "A Resolution" : "A Proposed Resolution"} {resolution.title}
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-between md:items-end">
        {resolution.author ? (
          <div className="flex gap-3">
            <div className="w-15 h-15 rounded-full bg-gold_gradient">
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
              <span className="text-lg font-medium">
                {`Hon. ${resolution.author.firstname} ${resolution.author.lastname}`}
              </span>
              <div className="flex gap-2">
                <div className="flex -space-x-1">
                  {resolution.co_authors && resolution.co_authors.slice(0, Math.min(resolution.co_authors.length, 3)).map((coAuthor) => (
                    <>
                      {coAuthor.photo ? (
                        <div className="flex w-6 h-6 rounded-full bg-gold_gradient justify-center items-start overflow-hidden border border-light-neutral">
                          <img
                            src={`/api/images?filename=${coAuthor.photo}`}
                            alt="officer photo"
                            className="w-full object-cover mt-1/2" />
                        </div>
                      ) : (
                        <div className="flex w-6 h-6 rounded-full bg-gold_gradient pt-1 px-1 justify-center items-center overflow-hidden border border-light-neutral">
                          <UserIcon className="w-20 h-20 text-light-neutral/80" />
                        </div>
                      )}
                    </>
                  ))}
                </div>
                <span className="italic">
                {resolution.co_authors && resolution.co_authors.length > 0
                  ? `${resolution.co_authors.length} co-author${resolution.co_authors.length > 1 ? 's' : ''}`
                  : 'No co-authors'}
              </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <div className="w-15 h-15 rounded-full bg-gold_gradient">
              <div className="flex w-15 h-15 rounded-full bg-gold_gradient px-3 justify-center items-center overflow-hidden">
                <UserIcon className="w-20 h-20 text-light-neutral/60" />
              </div>
            </div>
            <div className="flex flex-col gap-0 justify-center text-sm">
              <span className="leading-5 font-medium">
                unknown authors
              </span>
              <span className="leading-5 font-medium">
                and co-authors
              </span>
            </div>
          </div>
        )}
        
        {showVotes ? (
          <div className="flex gap-2 md:gap-6 w-full md:w-fit justify-between items-center">
            <div className="flex flex-row md:flex-col gap-1 md:gap-0 px-3 md:px-0 justify-center items-center">
              <span className="text-sm md:text-lg font-medium">{resolution.agree_vote}</span>
              <span className="text-sm max-md:font-medium">agree</span>
            </div>
            <div className="flex flex-row md:flex-col gap-1 md:gap-0 px-3 md:px-0 justify-center items-center">
              <span className="text-sm md:text-lg font-medium">{resolution.disagree_vote}</span>
              <span className="text-sm max-md:font-medium">disagree</span>
            </div>
            <div className="flex flex-row md:flex-col gap-1 md:gap-0 px-3 md:px-0 justify-center items-center">
              <span className="text-sm md:text-lg font-medium">{resolution.abstain_vote}</span>
              <span className="text-sm max-md:font-medium">abstain</span>
            </div>
          </div>
        ) : (
          <Link href={`/actions/sessions/${resolution.session_id}`} className={`flex text-xs font-medium w-fit ${resolution.session_type === "EMERGENCY" ? "bg-maroon-light" : "bg-gold"} text-near-white px-3 py-1 rounded-full font-medium`}>
            {resolution.session_number && resolution.session_type &&
              `${toOrdinal(resolution.session_number)} ${resolution.session_type.charAt(0) + resolution.session_type.slice(1).toLowerCase()} Session`}
          </Link>
        )}
      </div>
    </div>
  );
}

export default ResolutionCard;