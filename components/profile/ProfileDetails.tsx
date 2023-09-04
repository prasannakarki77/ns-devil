import { User } from "@prisma/client";
import { LucideIcon, UserCircle2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { format } from "date-fns";

interface IProfileSidebar {
  currentUser: User;
}

const ProfileDetails: React.FC<IProfileSidebar> = ({ currentUser }) => {
  const {
    address,
    createdAt,
    email,
    firstname,
    lastname,
    gender,
    dateOfBirth,
    institution,
    module: courseModule,
  } = currentUser;
  const personalDetails = (
    <div className="">
      <h1 className="text-lg font-semibold mb-2">Personal Details</h1>
      <div className=" grid grid-cols-2 gap-4 mb-4">
        <TextWithTitle text={firstname} title="firstname" />
        <TextWithTitle text={lastname} title="lastname" />
        <TextWithTitle text={gender} title="gender" />
        <TextWithTitle
          text={format(dateOfBirth, "PPP")}
          title="Date of Birth"
        />
      </div>
      <TextWithTitle text={address} title="Address" />
    </div>
  );

  const additionalDetails = (
    <div className="">
      <h1 className="text-lg font-semibold mb-2">Additional Details</h1>
      <div className=" grid grid-cols-2 gap-4">
        <TextWithTitle text={institution} title="institution" />
        <TextWithTitle text={courseModule} title="module" />
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-4 p-6   rounded-lg ">
      {personalDetails}
      <Separator className="my-4" />
      {additionalDetails}
    </div>
  );
};
export default ProfileDetails;

const TextWithTitle: React.FC<{
  text: string | null;
  title: string;
}> = ({ text, title }) => (
  <p className="flex flex-col gap-2 text-slate-600 font-medium capitalize">
    <span className="text-sm">{title}</span>
    <span className=" bg-secondary p-2 rounded-lg">{text || "------"}</span>
  </p>
);
