import React from 'react';
import { UserRound as UserIcon } from 'lucide-react';
import { OfficerModel } from "@/backend/models/officerModel";
import {SessionAttendanceModel} from "@/backend/models/sessionAttendanceModel";
type Props = {
  sessionAttendee: SessionAttendanceModel;
}

function SessionAttendanceCard({ sessionAttendee }: Props) {
  const officer : OfficerModel = sessionAttendee.officer;
  
  const attendanceMap: Record<string, string> = {
    PRESENT: "Present",
    LATE: "Late",
    EARLY_LEAVE_EXCUSED: "Excused early",
    EXCUSED: "Excused",
    EARLY_LEAVE_UNEXCUSED: "Left early",
    ABSENT: "Absent"
  }
  
  const colorMap : Record<string, string> = {
    PRESENT: "bg-present text-near-white",
    EARLY_LEAVE_EXCUSED: "bg-excused text-dark-neutral/83",
    LATE: "bg-late text-near-white",
    EXCUSED: "bg-excused text-dark-neutral/67",
    EARLY_LEAVE_UNEXCUSED: "bg-unexcused text-dark-neutral/67",
    ABSENT: "bg-unexcused text-dark-neutral/67"
  };
  
  return (
    <div
      key={`${officer.firstname} ${officer.lastname}`}
      className="w-full rounded-4xl bg-near-white flex flex-col md:flex-row gap-4 py-3 pl-3 pr-6 items-center border border-light-neutral justify-between">
      <div className="gap-4 flex items-center">
        {officer.photo ? (
          <div className="flex h-20 w-20 justify-center items-start rounded-3xl bg-maroon_gradient overflow-hidden">
            <img
              src={`/api/images?filename=${officer.photo}`}
              alt="officer photo"
              className="w-full object-cover mt-1/2" />
          </div>
        ) : (
          <div className="flex h-20 w-20 pt-2 px-3 justify-center items-center rounded-3xl bg-maroon_gradient overflow-hidden">
            <UserIcon className="w-20 h-20 text-light-neutral/80" />
          </div>
        )}
        <div className="flex flex-col">
        <span className="font-serif text-lg font-bold text-dark-neutral">
          {officer.firstname} {officer.lastname}
        </span>
          <span className="font-sans text-base text-dark-neutral opacity-70">
          {officer.position} • {officer.commission.initials}
        </span>
        </div>
      </div>
      
      <div className={`px-2 py-1.5 ${colorMap[sessionAttendee.attendance!]} rounded-lg text-xs font-medium`}>
        <span>{attendanceMap[sessionAttendee.attendance!].toUpperCase()}</span>
      </div>
    </div>
  );
}

export default SessionAttendanceCard;