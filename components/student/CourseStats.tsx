"use client";

import { Course } from "@/types/student";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

const CourseStats: React.FC<{ course: Course }> = ({ course }) => {
  const { assignments, exams_score, grade, quizzes } = course;
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-6 justify-end  ">
        <div className="flex flex-col gap-2 items-center">
          <h1 className=" text-slate-500 font-semibold">Grade</h1>
          <span className="text-lg font-bold">{grade}</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className=" text-slate-500 font-semibold">Exam Score</h1>
          <span className="text-lg font-bold">{exams_score}</span>
        </div>
      </div>
      <div className=" mb-5">
        <h1 className="font-semibold mb-2">Assignments</h1>
        <div className="flex flex-col gap-2">
          {assignments.map(({ assignment_name, score }) => (
            <div
              className=" w-full grid grid-cols-3 gap-4 bg-slate-100 p-2 items-center"
              key={assignment_name}
            >
              <div className=" border-r-2">{assignment_name}</div>
              <div className="font-bold border-r-2">{score}</div>
              <div className="">
                <Button variant={"outline"} size={"sm"}>
                  <Eye size={15} className="mr-1" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold mb-2">Quizzes</h1>
        <div className="flex flex-col gap-2">
          {quizzes.map(({ quiz_name, score }) => (
            <div
              className=" w-full grid grid-cols-3 gap-4 bg-slate-100 p-2 items-center"
              key={quiz_name}
            >
              <div className=" border-r-2">{quiz_name}</div>
              <div className="font-bold border-r-2">{score}</div>
              <div className="">
                <Button variant={"outline"} size={"sm"}>
                  <Eye size={15} className="mr-1" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
