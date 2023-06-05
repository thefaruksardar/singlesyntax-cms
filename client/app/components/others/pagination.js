"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Pagination = () => {
  let [page, setPage] = useState(1);

  // #1D5295
  // #1D5295
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex justify-center">
        {page == 1 ? (
          <p className="bg-slate-300 text-[#1D5295] border p-1 rounded-md cursor-not-allowed">
            <FiArrowLeft />
          </p>
        ) : (
          <Link
            href={`/?p=${page - 1}`}
            className="bg-slate-100 text-[#1D5295] border p-1 rounded-md "
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <FiArrowLeft />
          </Link>
        )}
      </div>

      <div className="flex justify-center items-center gap-3">
        <p className="bg-[#1D5295] text-white px-2 rounded-md">{page}</p>
      </div>

      <Link
        href={`/?p=${page == 1 ? 2 : page}`}
        className="bg-slate-100 text-[#1D5295] border  p-1 rounded-md"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <FiArrowRight />
      </Link>
    </div>
  );
};
export default Pagination;
