import { FiGithub, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F6] p-5">
      <div className="flex flex-col gap-5 max-w-7xl mx-auto">
        <div>
          <ul className="text-lg flex flex-col gap-4 lg:flex-row justify-center py-5">
            <li>
              <Link href="/teams-and-condition">Teams and Condition</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/advertise">Advertise</Link>
            </li>
            <li>
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-10 justify-between border-gray-200 border-t py-5 lg:flex-row lg:gap-0">
          <p className="lg:max-w-[50%]">
            An ideal destination for mastering code, where complex concepts in
            React, Next.js, Node.js, and more are presented in an easily
            understandable manner.
          </p>
          <div className="">
            <p>Send me tips, project suggestions, and updates.</p>
            <div className="mt-8 min-h-[40px] lg:mt-4">
              <form className="lg:max-w-[390px]">
                <label
                  htmlFor="email"
                  className="sr-only text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      className="block w-full rounded-none rounded-l-md border-gray-600 bg-gray-800/25 pl-10 focus-visible:border-gray-300 focus-visible:outline-none focus-visible:ring-0 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700 focus-visible:border-gray-300 focus-visible:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-gray-200 border-t py-5 flex flex-col gap-6 lg:flex-row-reverse items-center justify-between">
          <div className="flex justify-start items-center text-3xl gap-4 lg:justify-center ">
            <Link
              href="https://github.com/singlesyntax"
              target={"_blank"}
              aria-label="Github"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://www.instagram.com/singlesyntax/"
              target={"_blank"}
              aria-label="Instagram"
            >
              <FiInstagram />
            </Link>
            <Link
              href="https://facebook.com/singlesyntax"
              target={"_blank"}
              aria-label="Facebook"
            >
              <FiFacebook />
            </Link>
            <Link
              href="https://twitter.com/SingleSyntax"
              target={"_blank"}
              aria-label="Twitter"
            >
              <FiTwitter />
            </Link>
          </div>

          <p className="lg:max-w-[50%] ">
            {`Copyright © ${new Date().getFullYear()} SingleSyntax, All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
