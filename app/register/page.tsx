"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [active, setActive] = useState(2);

  const handlePrevious = () => setActive((p) => p - 1);

  const handleNext = () => setActive((p) => p + 1);
  return (
    <div className="p-4 flex justify-center flex-col items-center">
      <Card className=" max-w-2xl p-10 ">
        <h1 className="text-xl font-semibold mb-4 max-w-2xl text-left ">
          Create an account
        </h1>
        <div className=" grid grid-cols-5 gap-2 items-center">
          <Progress step={1} title={"Account Details"} active={active} />
          <div
            className={`${
              active >= 2 ? "bg-slate-900" : " bg-slate-400"
            } h-1 rounded-lg`}
          ></div>

          <Progress step={2} title={"Personal Details"} active={active} />
          <div
            className={`${
              active >= 3 ? "bg-slate-900" : " bg-slate-400"
            } h-1 rounded-lg `}
          ></div>

          <Progress step={3} title={"Additional Details"} active={active} />
        </div>
        <div className="flex-1 h-[200px]"></div>
        <div className="flex justify-between">
          <Button onClick={handlePrevious} disabled={active == 1}>
            Previous
          </Button>{" "}
          <Button onClick={handleNext} disabled={active == 3}>
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

const Progress: React.FC<{ step: number; active: number; title: string }> = ({
  step,
  active,
  title,
}) => (
  <div className="flex items-center gap-2 flex-col justify-center text-center ">
    <div
      className={`p-1 rounded-full  w-7 h-7 ${
        active >= step
          ? "bg-slate-700 font-bold text-white"
          : "bg-slate-400 text-slate-200 font-bold"
      } text-center text-sm`}
    >
      {step < active ? <Check size={20} /> : step}
    </div>
    <span
      className={`${
        active >= step ? " text-slate-900 " : "text-slate-400 "
      }font-bold`}
    >
      {title}
    </span>
  </div>
);
export default Register;
