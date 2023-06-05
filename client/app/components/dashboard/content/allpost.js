import axios from "axios";
import Link from "next/link";
import Posteditoption from "./posteditoption";

const getPost = async () => {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get`);
  return res.data;
};

export default async function Allpost() {
  const posts = await getPost();

  return (
    <div className="!flex-grow pt-5 px-8 mx-5 min-h-screen min-w-[100%] bg-white rounded-lg hover:rounded-lg">
      <div className="flex max-w-[75%] text-slate-600 mb-2 uppercase">
        <h2>Title</h2>
        <div className="flex justify-between gap-9 ml-auto pr-3">
          <h2>Category</h2>
          <h2>Visibility</h2>
        </div>
      </div>
      {posts.map((post) => (
        <div className="post grid grid-cols-2 items-center gap-20 py-3 px-2  border-b hover:bg-slate-100">
          <div>
            <Link href={post.permalink}>
              <h2 className=" text-xl">{post.title}</h2>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-2 justify-start gap-8 ">
              <p className="bg-gray-100 text-center rounded-lg border px-1">
                {post.category}
              </p>
              <p
                className={`${
                  post.isdraft ? "bg-[#FFBD4450]" : "bg-[#00CA4E50]"
                } text-center rounded-lg border px-1`}
              >
                {post.isdraft ? "Draft" : "Published"}
              </p>
            </div>

            <div className="ml-auto">
              <Posteditoption post={post} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
