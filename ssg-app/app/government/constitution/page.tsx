import React from 'react';
import {Constitution} from "@/backend/models/constitutionModel";
import {constitution2024} from "@/data_port/constitution";

function Page() {
  const constitution : Constitution = constitution2024;
  
  return (
    <div className="flex flex-col w-full h-fit gap-14">
      <div className="flex h-[240px] md:h-[360px] lg:h-[420px] rounded-3xl object-cover w-full justify-center items-start overflow-hidden bg-near-white">
        <img
          src="/banner-constitution.png"
          alt="constitution photo"
          loading="lazy"
          className="h-full w-full  object-cover rounded-3xl"
        />
      </div>
      
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-serif text-3xl font-bold">{constitution.title}</h1>
        </div>
      </div>
      
      <article className="flex flex-col gap-3 w-full">
        <h2 className="font-serif text-2xl font-bold">Preamble</h2>
        <p>{constitution.preamble}</p>
      </article>
      
      {constitution.articles.map((article, index) => (
        <article className="flex flex-col gap-4 w-full" key={`article-${index}`} id={`article-${index + 1}`}>
          <h2 className="font-serif text-2xl font-bold">{`Article ${index + 1}: ${article.title}`}</h2>
          {article.sections.map((section, secIndex) => (
            <p key={secIndex}>
              <strong>Section {secIndex + 1}.</strong> {section.text}
              {section.clauses && (
                <ol type="a" style={{ listStyleType: "lower-alpha" }} className="ml-8">
                  {section.clauses.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ol>
              )}
            </p>
          ))}
        </article>
      ))}
    </div>
  );
}

export default Page;