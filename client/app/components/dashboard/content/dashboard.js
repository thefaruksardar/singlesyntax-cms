import axios from "axios";

const getCategory = async (category) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/post/category/${category}`
  );
  return res.data;
};

const getPost = async () => {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get/`);
  return res.data;
};

const Dashboard = async () => {
  const html = await getCategory("html");
  const css = await getCategory("css");
  const javascript = await getCategory("javascript");
  const posts = await getPost();

  return (
    <div className=" min-h-screen">
      <div className="flex">
        <div className="m-5 bg-white rounded-lg py-4 shadow-lg">
          <div>
            <h2 className="text-xl px-5 font">{`Posts (${
              html.length + css.length + javascript.length
            })`}</h2>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center px-5 rounded-b-lg mt-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-700 font-normal">HTML</p>
              <h3 className=" text-3xl font-normal">{html.length}</h3>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-700 font-normal">CSS</p>
              <h3 className=" text-3xl font-normal">{css.length}</h3>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-700 font-normal">JavaScript</p>
              <h3 className=" text-3xl font-normal">{javascript.length}</h3>
            </div>
          </div>
        </div>

        <div className="m-5 bg-white rounded-lg py-4 shadow-lg">
          <div>
            <h2 className="text-xl px-5">Author</h2>
          </div>

          <div className="px-5">
            <table className="text-center ">
              <thead className="border-b">
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 "></th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 border-r bg-blue-300">
                    Total
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 ">
                    HTML
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 ">
                    CSS
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 ">
                    JavaScript
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Faruk
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r bg-blue-200">
                    32
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    23
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    44
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    54
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    Yasmin
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  bg-blue-200">
                    23
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    54
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    45
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    23
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
