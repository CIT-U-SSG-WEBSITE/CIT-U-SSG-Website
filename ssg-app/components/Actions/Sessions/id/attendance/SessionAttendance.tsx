import React from 'react';
import {AttendanceTypeCount} from "@/backend/models/sessionAttendanceModel";
import {SessionModel} from "@/backend/models/sessionModel";
import SessionAttendanceCard from "@/components/Actions/Sessions/id/attendance/SessionAttendanceCard";

interface Props {
  session: SessionModel | null;
}

function SessionAttendance({ session }: Props) {
  const representativeCount = 55; // This should be fetched from a representative controller or similar
  
  const attendanceCounts : AttendanceTypeCount[] = [
    {
      type: "Present",
      count: (session?.present ? session.present : 0),
      percentage: 0
    },
    {
      type: "Late",
      count: (session?.late ? session.late : 0),
      percentage: 0
    },
    {
      type: "Excused",
      count: (session?.excused ? session.excused : 0),
      percentage: 0
    },
    {
      type: "Excused early",
      count: (session?.early_leave_ex ? session.early_leave_ex : 0),
      percentage: 0
    },
    {
      type: "Left early",
      count: (session?.early_leave_un ? session.early_leave_un : 0),
      percentage: 0
    },
    {
      type: "Absent",
      count: (session?.absent ? session.absent : 0),
      percentage: 0
    },
  ];
  
  // Filter out attendance types with zero count
  const filteredAttendanceCounts = attendanceCounts.filter(attendance => attendance.count > 0);
  filteredAttendanceCounts.forEach(attendance => {
    attendance.percentage = +(attendance.count / representativeCount * 100).toFixed(2);
  });
  
  const colorMap : Record<string, string> = {
    Present: "bg-present text-near-white",
    "Excused early": "bg-excused text-dark-neutral/83",
    Late: "bg-late text-near-white",
    Excused: "bg-excused text-dark-neutral/67",
    "Left early": "bg-unexcused text-dark-neutral/67",
    Absent: "bg-unexcused text-dark-neutral/67"
  };
  
  return (
    <div className="flex flex-col gap-16 w-full">
      <div className="flex flex-col w-full gap-8">
        <h2 className="text-2xl font-serif">Attendance Meter</h2>
        <div className="w-full flex flex-col gap-2">
          <div className="flex h-fit gap-0 w-full rounded-lg overflow-hidden">
            {filteredAttendanceCounts.map((attendance, index) => (
              <div
                key={index}
                className={`flex h-fit px-2 py-1 ${colorMap[attendance.type]}`}
                style={{ width: `${attendance.percentage}%`}}
              >
                {attendance.percentage > 4 ? `${Math.round(attendance.percentage)}%` : '.'}
              </div>
            ))}
          </div>
          <div className="flex h-fit gap-0 w-full rounded-lg overflow-hidden">
            {filteredAttendanceCounts.map((attendance, index) => (
              <div
                key={index}
                className={`flex h-fit px-1 text-sm`}
                style={{ width: `${attendance.percentage}%`}}
              >
                {attendance.percentage > 8 && attendance.type}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {session?.attendance ? (
              session.attendance.map(sessionAttendee => (
                <SessionAttendanceCard
                  key={sessionAttendee.officer.position + sessionAttendee.officer.lastname}
                  sessionAttendee={sessionAttendee}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-dark-neutral/50 font-sans">
                  No officers found!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionAttendance;