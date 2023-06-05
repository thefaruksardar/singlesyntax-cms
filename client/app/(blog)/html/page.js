import axios from "axios";
import Category from "../../components/category";

const getHTML = async () => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/category/html`
  );
  return res.data;
};

const Page = async () => {
  const categories = await getHTML();

  return (
    <div>
      <Category categories={categories} title={"HTML"} />
    </div>
  );
};
export default Page;
