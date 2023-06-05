"use client";
import axios from "axios";
import Link from "next/link";
import { FiEdit2, FiEyeOff, FiXOctagon } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Posteditoption = ({ post }) => {
  const router = useRouter();

  const handleVisibility = async (id, isdraft, refresh) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/update/`,
      {
        id,
        isdraft,
      }
    );

    refresh();
  };

  const handleDelete = async (id, refresh) => {
    const res = await axios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/delete/${id}`
    );
    refresh();
  };

  return (
    <div>
      <div className="postOption flex gap-4  opacity-0">
        <span className="bg-[#00CA4E] p-1 px-[.3rem] rounded-2xl flex items-center justify-center ">
          <Link href={`edit/${post._id}`} target="_blank" className="opacity-0">
            <FiEdit2 />
          </Link>
        </span>

        <span
          className="bg-[#FFBD44] p-1 px-[.3rem] rounded-2xl flex items-center justify-center"
          onClick={() =>
            // handleVisibility(
            //   post._id,
            //   post.isdraft ? false : true,
            //   router.refresh
            // )
            confirm(
              `${
                post.isdraft
                  ? "Make this Post Public?"
                  : "Make this Post Private?"
              }`
            )
              ? handleVisibility(
                  post._id,
                  post.isdraft ? false : true,
                  router.refresh
                )
              : handleVisibility(
                  post._id,
                  post.isdraft ? false : true,
                  router.refresh
                )
          }
        >
          <button className="opacity-0">
            <FiEyeOff />
          </button>
        </span>

        <span
          className="bg-[#FF605C] p-1 px-[.3rem] rounded-2xl flex items-center justify-center"
          onClick={() =>
            // handleDelete(post._id, router.refresh)
            confirm(`${"Want to delete this Post?"}`)
              ? handleDelete(post._id, router.refresh)
              : ""
          }
        >
          <button className="opacity-0">
            <FiXOctagon />
          </button>
        </span>
      </div>
    </div>
  );
};
export default Posteditoption;
