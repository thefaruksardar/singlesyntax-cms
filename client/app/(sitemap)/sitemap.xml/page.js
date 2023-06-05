import axios from "axios";
import Link from "next/link";

const getPosts = async () => {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get`);
  return res.data;
};

const Page = async () => {
  const posts = await getPosts();
  return (
    <div className="lg:max-w-5xl mx-auto flex flex-col gap-5 my-4">
      <div>
        <h1 className="text-3xl mb-3">XML Sitemap</h1>
        <p className="">Number of URLs in this XML Sitemap: {posts.length}</p>
      </div>

      <table className="min-w-full border">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              URLs
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr className="bg-white border-b">
              <td className="text-sm text-blue-700 font-light px-6 py-3 whitespace-nowrap">
                <Link
                  href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/${post.permalink}`}
                >
                  {post.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Page;
