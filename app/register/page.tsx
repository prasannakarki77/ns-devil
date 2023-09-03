"use client";

import { AccountDetailsForm } from "@/components/forms/AccountDetailsForm";
import { AdditionalDetailsForm } from "@/components/forms/AdditionalDetailsForm";
import { PersonalDetailsForm } from "@/components/forms/PersonalDetailsForm";
import { Card } from "@/components/ui/card";
import {} from "@/components/ui/form";

import { Check } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [active, setActive] = useState(1);

  const handlePrevious = () => setActive((p) => p - 1);

  const handleNext = () => {
    setActive((p) => p + 1);
  };

  let currentForm;

  if (active == 1) {
    currentForm = <AccountDetailsForm onNext={handleNext} />;
  }
  if (active == 2) {
    currentForm = (
      <PersonalDetailsForm onNext={handleNext} onPrevious={handlePrevious} />
    );
  }
  if (active == 3) {
    currentForm = (
      <AdditionalDetailsForm onNext={handleNext} onPrevious={handlePrevious} />
    );
  }

  return (
    <div className="p-4 flex justify-center flex-col items-center">
      <Card className=" max-w-5xl p-10 ">
        <h1 className="text-lg font-semibold mb-6 max-w-2xl text-left ">
          Create an account
        </h1>
        <div className=" grid grid-cols-5 gap-2 items-center">
          <Progress step={1} title={"Account Details"} active={active} />
          <div
            className={`${
              active >= 2 ? "bg-slate-900" : " bg-slate-400"
            } h-[3px] rounded-lg`}
          ></div>

          <Progress step={2} title={"Personal Details"} active={active} />
          <div
            className={`${
              active >= 3 ? "bg-slate-900" : " bg-slate-400"
            }  h-[3px] rounded-lg `}
          ></div>

          <Progress step={3} title={"Additional Details"} active={active} />
        </div>
        <div className=" mt-10">{currentForm}</div>
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
      }font-bold text-sm`}
    >
      {title}
    </span>
  </div>
);

export default Register;
