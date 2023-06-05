import Editor from "../../components/dashboard/editor/editor";
import Editorheader from "../../components/dashboard/editor/editorheader";
import Editoroption from "../../components/dashboard/editor/editoroption";
import axios from "axios";
import { unstable_getServerSession } from "next-auth/next";
import Hidefromuser from "../../components/hidefromuser";

const Page = async () => {
  const session = await unstable_getServerSession();

  if (
    session.user.email != "thefaruksardar@gmail.com" &&
    session.user.email != "yasminsardar960@gmail.com"
  ) {
    return (
      <div>
        <Hidefromuser />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div>
          <Editorheader />
        </div>

        <div className="flex gap-5 px-6">
          <Editor />
          <Editoroption />
        </div>
      </div>
    );
  }
};

export default Page;
