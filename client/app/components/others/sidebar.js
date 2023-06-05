"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  FiLogOut,
  FiSidebar,
  FiMessageSquare,
  FiSettings,
  FiPlusSquare,
  FiUser,
  FiFolder,
  FiFileText,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className=" !max-w-[30%] bg-white lg:!max-w-[12%] min-h-screen flex flex-col justify-between pb-8 flex-grow">
      <div>
        <div>
          <div className="ml-5 pt-5 text-[#205295] font-semibold	text-lg">
            <h2>Welcome Back</h2>
          </div>

          <div className="mx-auto max-w-[75%] flex flex-col gap-5 mt-4">
            <div className="border-b border-gray-200 pb-4">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href={"/dashboard"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiSidebar />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/addpost"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiPlusSquare />
                    <span>Add Post</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/posts"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiFileText />
                    <span>All Post</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/comments"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiMessageSquare />
                    <span>Comments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/media"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiFolder />
                    <span>Media</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href={"/settings"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiSettings />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/profile"}
                    className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 hover:text-white"
                  >
                    <FiUser />
                    <span>Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto min-w-[75%] flex flex-col gap-5 mt-4">
        <ul>
          <li>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 cursor-pointer py-1 px-3 rounded-lg transition-all hover:bg-gray-900 border hover:text-white"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
