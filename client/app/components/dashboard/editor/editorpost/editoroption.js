"use client";

import useLocalStorage from "../../../hooks/useLocalStorage";
const axios = require("axios");
import { useState } from "react";
import Image from "next/image";

const Editoroption = ({ editOption }) => {
  // Adding Category to the localstorage
  const [category, setCategory] = useLocalStorage(
    "category",
    editOption.category
  );
  const filterCategory = (e) => {
    setCategory(e.target.value);
  };

  // Adding author to the localstorage
  const [author, setAuthor] = useLocalStorage("author", editOption.author);
  const filterAuthor = (e) => {
    setAuthor(e.target.value);
  };

  // Add Visibility to the Local storage
  const [pushvisibility, setPushisibility] = useLocalStorage(
    "isdraft",
    editOption.isdraft
  );

  const filterVisibility = (e) => {
    const { checked, value } = e.target;
    setPushisibility(value);
  };

  // Storing data to LocalStorage

  const [url, setUrl] = useLocalStorage("url", editOption.permalink);
  const [description, setDescription] = useLocalStorage(
    "description",
    editOption.description
  );
  const [image, setImage] = useLocalStorage("image", editOption.image);

  const uploadImg = async (e) => {
    const formdata = new FormData();

    formdata.append("featuredImage", e.target.files[0], e.target.files[0].name);

    // // Uploading image to the server
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/image`,
      formdata
    );

    // Setting Image name to the LocalStorage
    setImage(e.target.files[0].name);
  };

  const [imageName, setImageName] = useState({
    featuredimage: JSON.parse(localStorage.getItem("image")),
  });

  return (
    <div className="min-w-[20%] max-w-md ml-auto min-h-screen bg-white">
      <div className=" divide-y divide-slate-200">
        <div className="flex flex-col gap-3 px-5 py-2">
          <p>Post URL</p>
          <div>
            <input
              type="text"
              className="border rounded-md px-1 min-w-full focus:outline-none"
              value={url}
              onChange={(e) =>
                setUrl(e.target.value.replaceAll(" ", "-").toLowerCase())
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 py-2">
          <p>Categories</p>
          <div>
            <div className="flex items-center gap-2">
              <select
                className="border rounded-md focus:outline-none"
                onChange={(e) => filterCategory(e)}
                value={category}
              >
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 py-2">
          <p>Features Image</p>
          <div>
            <input
              type="file"
              name="featuredImage"
              accept="image/png, image/jpeg, image/webp"
              onChange={(e) => {
                uploadImg(e);
              }}
            />

            {imageName.featuredimage && (
              <div>
                <Image
                  className="border rounded-lg shadow-md p-2 my-2"
                  src={`http://localhost:4000/images/${imageName.featuredimage}`}
                  width={180}
                  height={130}
                />
                <p className="text-sm">{imageName.featuredimage}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 px-5 py-2">
          <p>Meta Description</p>
          <div>
            <textarea
              className="min-w-full border rounded-md px-1 text-md focus:outline-none"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5 py-2">
          <label htmlFor="cars">Author</label>
          <div>
            <select
              className="border rounded-md focus:outline-none"
              onChange={(e) => filterAuthor(e)}
              value={author}
            >
              <option value="faruk-sardar">Faruk Sardar</option>
              <option value="yasmin-sardar">Yasmin Sardar</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5 py-2">
          <p>Visibility</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <input
                type="radio"
                id="false"
                name="draft"
                className="mt-1"
                value="false"
                // checked={pushvisibility.includes("false")}
                checked={editOption.isdraft}
                onChange={(e) => filterVisibility(e)}
              />

              <div>
                <label htmlFor="false">Public</label>
                <p className="text-md text-gray-500">Visible to everyone.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                id="true"
                name="draft"
                className="mt-1"
                value="true"
                // checked={pushvisibility.includes("true")}
                checked={editOption.isdraft}
                onChange={(e) => filterVisibility(e)}
              />

              <div>
                <label htmlFor="true">Private</label>
                <p className="text-md text-gray-500">
                  Only visible to site admins and editors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editoroption;
