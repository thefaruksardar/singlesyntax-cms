import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "../../(blog)/head";
import Pagination from "../others/pagination";
// import { useSearchParams } from "next/navigation";

const getPosts = async (page) => {
  // const res = await axios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get`);
  // return res.data;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get`, {
    next: { revalidate: 60 },
  });
  return res.json();
};

const Homepage = async ({ page }) => {
  const posts = await getPosts(page);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 py-2 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {posts.map(
          (post) =>
            !post.isdraft && (
              <div
                className="mb-3 p-2 rounded-lg hover:bg-[#F5F5F5]"
                key={post._id}
              >
                <Head
                  title={
                    "An Ideal Destination for Mastering Code - SingleSyntax"
                  }
                  metaDescription={
                    "Learn complex concepts in React, Next.js, Node.js, and more are presented in an easily understandable manner"
                  }
                />
                <Link href={post.permalink}>
                  <Image
                    priority
                    src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/images/${post.image}`}
                    width={600}
                    height={250}
                    className="rounded-lg min-w-full h-auto hover:scale-[1.035] ease-in duration-200"
                    title={post.title}
                    alt={post.title}
                  />
                </Link>
                <div className="pt-2 ">
                  <Link href={`http://localhost:3000/${post.category}`}>
                    <p className="text-[#2C74B3] text-md uppercase bg-[#2C74B330] inline-block px-2 rounded-lg">
                      {post.category}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link href={post.permalink}>
                    <h2 className="text-lg" title={post.title}>
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
      {/* Pagination to limit post per page */}
      {/* <div className="my-5">
        <Pagination />
      </div> */}
    </div>
  );
};
export default Homepage;
