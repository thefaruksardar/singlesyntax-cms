import Main from "../../components/others/main";
import { unstable_getServerSession } from "next-auth/next";
import Hidefromuser from "../../components/hidefromuser";
import Profile from "../../components/dashboard/content/profile";
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
        <Head title={`Profile - ${session.user.name}`} />
        <Main>
          <Profile />
        </Main>
      </div>
    );
  }
};
export default Page;
