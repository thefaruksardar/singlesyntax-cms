import axios from "axios";
import { unstable_getServerSession } from "next-auth/next";

import Editorheader from "../../../components/dashboard/editor/editorpost/editorheader";
import Editoroption from "../../../components/dashboard/editor/editorpost/editoroption";
import Editor from "../../../components/dashboard/editor/editorpost/editor";
import Hidefromuser from "../../../components/hidefromuser";
import Head from "../../head";
const editPostById = async (id) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/getbyid/${id}`
  );
  return res.data;
};

const Page = async ({ params: { id } }) => {
  const session = await unstable_getServerSession();

  const posts = await editPostById(id);

  if (
    session.user.email != "thefaruksardar@gmail.com" &&
    session.user.email != "yasminsardar960@gmail.com"
  ) {
    return (
      <div>
        <Head title={"Only Admin can access this Page"} />
        <Hidefromuser />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div>
          <Editorheader editTitle={posts[0]} />
        </div>

        <div className="flex gap-5 px-6">
          <Editor editBody={posts[0]} />
          <Editoroption editOption={posts[0]} />
        </div>
      </div>
    );
  }
};
export default Page;
