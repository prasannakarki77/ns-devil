"use client";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
interface UserMenuProps {
  currentUser?: User | null;
}
const Navbar: React.FC<UserMenuProps> = ({ currentUser }) => {
  let simpleNav = (
    <Link className=" flex justify-center p-4 flex-col  items-center " href="/">
      <Image src={"/logo.svg"} height={80} width={120} alt="logo" />
    </Link>
  );

  let nav = (
    <div className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  ">
      <div className=" container flex h-14 items-center  ">
        <Link href="/">
          <Image src={"/logo.svg"} height={60} width={80} alt="logo" />
        </Link>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
    </div>
  );

  return <>{currentUser ? nav : simpleNav}</>;
};

export default Navbar;
