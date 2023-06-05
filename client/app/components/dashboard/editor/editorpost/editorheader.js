"use client";

import { useState } from "react";
import { FiMoreVertical, FiChevronRight } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { FiXCircle, FiCheck } from "react-icons/fi";
import Head from "../../../../(dashboard)/head";

const Editorheader = ({ editTitle }) => {
  const router = useRouter();

  const [title, setTitle] = useLocalStorage("title", editTitle.title);
  const [ispublish, setIsPublish] = useState(true);

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

  const updatePost = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/update`,
      {
        id: editTitle._id,
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

      setIsPublish(false);
      localStorage.clear();
    }

    console.log(editTitle._id);
    console.log(postContent.title);
    console.log(postContent.body);
    console.log(postContent.url);
    console.log(postContent.image);
    console.log(postContent.category);
    console.log(postContent.description);
    console.log(postContent.author);
    console.log(postContent.isdraft);
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
          onClick={updatePost}
        >
          Update
          {ispublish ? (
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded ml-2">
              <FiXCircle />
            </span>
          ) : (
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded ml-2">
              <FiCheck />
            </span>
          )}
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
