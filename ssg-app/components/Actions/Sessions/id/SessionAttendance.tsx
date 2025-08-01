import React from 'react';
import {SessionAttendanceModel} from "@/backend/models/sessionAttendanceModel";

interface Props {
  attendance: SessionAttendanceModel[] | undefined;
}

function SessionAttendance({ attendance }: Props) {
  console.log(attendance);
  
  return (
    <div>Attendance</div>
  );
}

export default SessionAttendance;