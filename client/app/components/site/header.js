"use client";

import Link from "next/link";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";
import Menu from "../others/menu";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [toogle, setToogle] = useState(false);
  const ref = useRef();

  return (
    <div
      className=" border-b border-gray-300 drop-shadow z-0 relative py-2"
      ref={ref}
    >
      <div className="px-2 py-2 flex items-center max-w-7xl mx-auto lg:px-0">
        <Link href="/">
          {/* <div className="text-2xl">NewBieCoding</div> */}
          <div className="flex justify-center items-center gap-1">
            <Image
              priority
              src="/ncicon.svg"
              height={40}
              width={40}
              alt="Newbiecoding.com"
            />
            <Image
              priority
              src="/newbiecoding.svg"
              height={200}
              width={200}
              className="mt-1"
              alt="Newbiecoding.com"
            />
          </div>
        </Link>

        <div className="hidden lg:block ml-auto">
          <div className="flex justify-center items-center gap-8">
            <ul className="flex justify-center items-center gap-5">
              <li>
                <Link href="/html">HTML</Link>
              </li>
              <li>
                <Link href="/css">CSS</Link>
              </li>
              <li>
                <Link href="/javascript">JavaScript</Link>
              </li>
            </ul>
            <Link
              href={"/search"}
              className="text-3xl cursor-pointer"
              aria-label="Search"
            >
              <FiSearch />
            </Link>
          </div>
        </div>

        <div className="ml-auto flex justify-center items-center gap-5 lg:hidden">
          <Link
            href={"/search"}
            className=" text-3xl cursor-pointer"
            onClick={() => {
              setToogle(false);
            }}
            aria-label="Search"
          >
            <FiSearch />
          </Link>
          <div
            className=" text-3xl cursor-pointer lg:hidden"
            onClick={() => {
              setToogle(!toogle);
            }}
          >
            {!toogle ? <FiMenu /> : <FiX />}
          </div>
        </div>
      </div>
      {toogle && (
        <div
          className={`absolute top-[${ref.current.offsetHeight}px] right-0 left-0 mx-4 my-3 !rounded-lg z-10`}
        >
          <Menu />
        </div>
      )}
    </div>
  );
};
export default Header;
