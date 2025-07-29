"use client";

import React, { useState } from "react";
import ProjectCard from "../../../components/Home/ProjectCard";
import SearchBar from "../../../components/Actions/SearchBar";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  lead: string;
  leadUrl: string;
  coordinator: number;
  department: string;
  sessionType: string;
};

const sessions: ProjectCardProps[] = [
  {
    title:
      "Pathways to Excellence: The First Semester State of the Student Government Address (SOSGA)",
    description:
      "A hybrid project that organizes and documents open forums where students can voice concerns or suggestions about policies.",
    imageUrl: "/cover.png",
    lead: "Jhon Phil Sabac",
    leadUrl: "/zeth.png",
    department: "Legislative",
    sessionType: "Regular",
    coordinator: 3,
  },
];

function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [session, setSession] = useState("");

  const filteredSessions = sessions.filter((s) => {
    const matchesSearch = s.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment = department ? s.department === department : true;
    const matchesSession = session ? s.sessionType === session : true;
    return matchesSearch && matchesDepartment && matchesSession;
  });

  return (
    <div className="w-full max-w-[920px] mx-auto px-4 space-y-6 pb-[120px]">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        department={department}
        onDepartmentChange={setDepartment}
        session={session}
        onSessionChange={setSession}
      />

      <div className="min-h-[150px] w-full flex flex-col gap-4">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session, index) => (
            <ProjectCard key={index} {...session} />
          ))
        ) : (
          <p className="text-gray-500 italic py-5 text-center w-full">
            No sessions found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Page;
