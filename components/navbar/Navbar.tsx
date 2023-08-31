"use client";
import Image from "next/image";

const Navbar = () => {
  let simpleNav = (
    <div className=" flex justify-center p-4 flex-col  items-center ">
      <Image src={"/logo.svg"} height={80} width={120} alt="logo" />
    </div>
  );

  return <>{simpleNav}</>;
};

export default Navbar;
