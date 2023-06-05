"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "../head";
const Page = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Head title={"Sign Out"} />
        <p>Welcome, {session.user.email}</p>
        <button
          onClick={() => signOut()}
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          SIGN OUT
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Head title={"Sign In"} />
        <p>Sign in using Below Button</p>
        <button
          onClick={() => signIn()}
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          SIGN IN
        </button>
      </div>
    );
  }
};
export default Page;
