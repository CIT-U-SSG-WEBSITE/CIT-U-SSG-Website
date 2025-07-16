"use client";

import React, { useState } from "react";
import SessionCard from "../../../components/Home/SessionCard";
import SearchBar from "../../../components/Home/SearchBar";

type SessionCardProps = {
  title: string;
  date: string;
  present: number;
  description: string;
  imageUrl: string;
  department: string | null;
  sessionType: string | null;
};

const sessions: SessionCardProps[] = [
  {
    title: "8th Regular Session",
    date: "Feb 25, 2025",
    present: 48,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Legislative",
    sessionType: "Regular",
  },
  {
    title: "9th Emergency Session",
    date: "Mar 10, 2025",
    present: 52,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Executive",
    sessionType: "Regular",
  },
  {
    title: "10th Planning Session",
    date: "Apr 5, 2025",
    present: 46,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Judicial",
    sessionType: "Regular",
  },
  {
    title: "11th Planning Session",
    date: "Apr 5, 2025",
    present: 46,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Judicial",
    sessionType: "Regular",
  },
  {
    title: "12th Planning Session",
    date: "Apr 5, 2025",
    present: 46,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Judicial",
    sessionType: "Regular",
  },
  {
    title: "13th Planning Session",
    date: "Apr 5, 2025",
    present: 46,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Judicial",
    sessionType: "Regular",
  },
  {
    title: "14th Regular Session",
    date: "Feb 25, 2025",
    present: 48,
    description:
      "The Legislative Department convened its regular session to deliberate on proposed measures and exercise its oversight function. The session opened with the approval of the previous minutes, followed by committee reports and privileged speeches. Key motions were introduced, including a resolution urging the administration to enhance library operating hours and a motion to form a special committee on student welfare. Points of order and clarifications were raised during deliberations, demonstrating active parliamentary engagement. The session closed with announcements and a scheduled continuation for unresolved agenda items.",
    imageUrl: "/cover.png",
    department: "Legislative",
    sessionType: "Regular",
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
            <SessionCard key={index} {...session} />
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
