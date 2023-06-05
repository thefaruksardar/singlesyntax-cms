"use client";

import { use, useState } from "react";
import { FiMoreVertical, FiChevronRight } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import Head from "../../../(dashboard)/head";

const Editorheader = () => {
  const router = useRouter();

  const [title, setTitle] = useLocalStorage("title", "");
  const [postContent, setPostContent] = useState({
    title: JSON.parse(localStorage.getItem("title")),
    body: JSON.parse(localStorage.getItem("body")),
    url: JSON.parse(localStorage.getItem("url")),
    image: JSON.parse(localStorage.getItem("image")),
    category: JSON.parse(localStorage.getItem("category")),
    description: JSON.parse(localStorage.getItem("description")),
    author: JSON.parse(localStorage.getItem("author")),
    isdraft: JSON.parse(localStorage.getItem("isdraft")),
  });

  // Send Post data to the MongoDB

  const publishPost = async () => {
    let emptyFields = [];

    if (!title) {
      emptyFields.push("title");
    }
    if (!postContent.body) {
      emptyFields.push("body");
    }
    if (!postContent.url) {
      emptyFields.push("permalink");
    }
    if (!postContent.image) {
      emptyFields.push("image");
    }
    if (!postContent.category) {
      emptyFields.push("category");
    }
    if (!postContent.description) {
      emptyFields.push("description");
    }
    if (!postContent.author) {
      emptyFields.push("author");
    }
    if (!postContent.isdraft) {
      emptyFields.push("isdraft");
    }
    if (emptyFields.length > 0) {
      alert(`Please fill in all the feilds: [${emptyFields}]`);
      return;
    }

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/send`,
      {
        title: postContent.title,
        body: postContent.body,
        permalink: postContent.url,
        image: postContent.image,
        category: postContent.category,
        description: postContent.description,
        author: postContent.author,
        isdraft: postContent.isdraft,
      }
    );

    if (res.status == "200") {
      toast.success(`Great🚀! Post Published`, {
        position: "top-right",
        autoClose: 2650,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        router.push("/posts");
      }, 2600);

      localStorage.clear();
    } else {
      toast.error(`Refresh the page to Publish`, {
        position: "top-right",
        autoClose: 2650,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex gap-5 px-6 min-w-full py-2 bg-white mb-2">
      <Head title={title} />
      <div className="min-w-[80%] mx-auto px-2">
        <input
          type="text"
          placeholder="Add Title"
          className="w-full mx-auto text-3xl focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex justify-between min-w-[20%] ml-auto px-2">
        <button
          type="button"
          className="flex justify-center items-center gap-1 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={publishPost}
        >
          Publish
          <FiChevronRight className="text-xl" />
        </button>

        <button
          type="button"
          className="flex justify-center items-center text-2xl rounded-full bg-gray-600 text-white leading-normal uppercase shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
        >
          <FiMoreVertical />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Editorheader;
