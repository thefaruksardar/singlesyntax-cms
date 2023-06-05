"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import Head from "../head";

const Page = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const sendUserToResults = (e) => {
    e.preventDefault();
    router.push(`/search/results/?q=${query}`);
  };

  return (
    <div className="">
      <Head
        title={"Search"}
        metaDescription={"Search any query to get the results"}
      />
      <form
        className="input-group flex items-center w-full my-4 min-w-7xl"
        onSubmit={(e) => sendUserToResults(e)}
      >
        <input
          type="text"
          autoFocus
          placeholder="HTML, CSS, JavaScript"
          className="form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        {query === "" ? (
          <button
            className={` px-3 py-2 ${
              query === "" ? "bg-blue-500" : "bg-blue-600"
            } text-white font-medium text-xl leading-tight uppercase rounded-r-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center`}
          >
            <FiArrowRight />
          </button>
        ) : (
          <Link
            href={`/search/results/?q=${query}`}
            className={` px-3 py-2 ${
              query === "" ? "bg-blue-500" : "bg-blue-600"
            } text-white font-medium text-xl leading-tight uppercase rounded-r-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center`}
          >
            <FiArrowRight />
          </Link>
        )}
      </form>
    </div>
  );
};
export default Page;
