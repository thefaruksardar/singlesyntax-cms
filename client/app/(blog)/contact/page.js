import { FiMail, FiTwitter } from "react-icons/fi";
import Head from "../head";
const Page = () => {
  return (
    <div className="max-w-7xl px-2 py-5 pages">
      <Head
        title={"Contact"}
        metaDescription={
          "We're more than happy to answer any questions or fix any bugs you're running into. Feel free to reach out to us directly or use the contact form on this page."
        }
      />

      <div className="postContent page max-w-lg">
        <h2 className="text-2xl font-bold tracking-tight my-2 sm:text-3xl">
          Get in touch 👋
        </h2>
        <p className="mt-3">
          We're more than happy to answer any questions or fix any bugs you're
          running into. Feel free to reach out to us directly or use the contact
          form on this page.
        </p>
        <div className="mt-8 flex flex-col gap-1">
          <a
            className="flex items-center gap-3"
            href="mailto:thefaruksardar@gmail.com"
          >
            <FiMail />
            <span>thefaruksardar@gmail.com</span>
          </a>
          <a
            className="flex items-center gap-3"
            href="mailto:thefaruksardar@gmail.com"
          >
            <FiTwitter />
            <span>@_newbiecoding</span>
          </a>
        </div>

        <div className="mt-8">
          <p>Looking forward to hearing from you!</p>
          <p>Faruk</p>
        </div>
      </div>
    </div>
  );
};
export default Page;
