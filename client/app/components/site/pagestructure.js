import { notFound } from "next/navigation";

import Rightsidebar from "./rightsidebar";
import { format } from "date-fns";
import Head from "../../(blog)/head";

const PageStructure = ({ post }) => {
  const formatDate = (date) => {
    return format(date, "MMMM d, yyyy");
  };

  if (!post) {
    notFound();
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Head title={post.title} metaDescription={post.description} />
      <div className="lg:flex lg:justify-between lg:gap-8 mt-4">
        <article className="postContent px-2 lg:max-w-[70%]">
          <h1 className="font-medium leading-tight text-3xl mt-0 mb-2">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <p className="!mb-0 !text-slate-800 flex gap-1">
              By
              <span className="capitalize border-b-2 border-[#60A5FA]">
                {post.author.replace("-", " ")}
              </span>
            </p>

            <p className="!mb-0 ">({formatDate(new Date(post.updatedAt))})</p>
          </div>
          <main dangerouslySetInnerHTML={{ __html: post.body }}></main>
        </article>

        <div className="min-w-[25%] self-start sticky top-5 my-5">
          {/* <Rightsidebar /> */}
        </div>
      </div>
    </div>
  );
};
export default PageStructure;
