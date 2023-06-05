import Main from "../../components/others/main";
import { unstable_getServerSession } from "next-auth/next";
import Hidefromuser from "../../components/hidefromuser";
import Dashboard from "../../components/dashboard/content/dashboard";
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
        <Head title={`Welcome ${session.user.name} - Dashboard`} />
        <Main>
          <Dashboard />
        </Main>
      </div>
    );
  }
};
export default Page;
