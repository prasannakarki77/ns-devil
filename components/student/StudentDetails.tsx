"use client";

import { Student } from "@/types/student";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface StudentDetailsProps {
  student: Student;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ student }) => {
  const { name, class: classTitle, courses } = student;
  return (
    <div className="flex justify-between items-center p-4 border rounded-xl shadow">
      <div className="flex flex-row gap-4   items-center  rounded-lg ">
        <Avatar className=" h-24 w-24 ">
          <AvatarFallback className=" text-xl">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="">
          <p className=" text-lg font-semibold text-slate-600 ">{name}</p>
          <p className=" text-sm flex gap-2 font-semibold text-slate-600 ">
            {classTitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <p className=" text-lg font-semibold text-slate-600 ">Enrolled In</p>
        <Badge variant="secondary" className="text-sm">
          {courses.length} courses
        </Badge>
      </div>
    </div>
  );
};
export default StudentDetails;
