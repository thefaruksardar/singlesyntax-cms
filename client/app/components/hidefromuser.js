"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";

const Hidefromuser = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-20 items-center shadow-md p-10 rounded-2xl">
        <div className="self-start">
          <Link href={"/"} className="flex justify-center items-center gap-1">
            <FiArrowLeft />
            Home
          </Link>
        </div>

        <div>
          <Image src={"notadmin.svg"} width={200} height={200} />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold lg:text-2xl">
              Only Admin can access this Page
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button
              className="bg-[#2C74B3] text-white py-2 px-3 rounded-lg text-sm"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link
              className="bg-[#2C74B340] text-[#2C74B3] py-2 px-3 rounded-lg text-sm"
              href="/contact"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hidefromuser;
