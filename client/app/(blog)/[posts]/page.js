import axios from "axios";
import PageStructure from "../../components/site/pagestructure";

const getPost = async (posts) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get/${posts}`
  );
  return res.data;
};

const getAllPost = async () => {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get`);

  return res.data;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPost();

  return posts.map((post) => ({
    posts: post.permalink,
  }));
}

const Page = async ({ params: { posts } }) => {
  const post = await getPost(posts);

  return (
    <div>
      <PageStructure post={post[0]} />
    </div>
  );
};
export default Page;
