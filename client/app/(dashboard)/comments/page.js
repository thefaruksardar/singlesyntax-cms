import Comments from "../../components/dashboard/content/comments";
import Main from "../../components/others/main";
import { unstable_getServerSession } from "next-auth/next";
import Head from "../head";

const Page = async () => {
  const session = await unstable_getServerSession();

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
      <div>
        <Head title={"Comments"} />
        <Main>
          <Comments />
        </Main>
      </div>
    );
  }
};
export default Page;
