import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Head from "../../head";

const getSearchResults = async (q) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/search/${q}`
  );
  return res.data;
};

const Page = async ({ searchParams: { q } }) => {
  const posts = await getSearchResults(q);
  return (
    <div>
      <Head
        title={q}
        metaDescription={
          "Relevant results for your search query will be displayed on this page."
        }
      />
      <div className="max-w-7xl mx-auto px-2 py-2 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {posts.map(
          (post) =>
            !post.isdraft && (
              <div
                className="mb-3 p-2 rounded-lg hover:bg-[#F5F5F5]"
                key={post._id}
              >
                <Link href={post.permalink}>
                  <Image
                    priority
                    src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/images/${post.image}`}
                    width={600}
                    height={250}
                    className="rounded-lg min-w-full h-auto"
                    title={post.title}
                    alt={post.title}
                  />
                </Link>
                <div className="pt-2 ">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/${post.category}`}
                  >
                    <p className="text-[#2C74B3] text-sm bg-[#2C74B330] inline-block px-2 rounded-lg">
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
                  <p className="text-slate-500 text-sm">{post.description}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default Page;
