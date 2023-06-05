import Link from "next/link";
import Image from "next/image";

const Hidefromuser = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-10 items-center">
        <div>
          <Image src="/not-found.svg" width={300} height={300} />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-semibold lg:text-2xl">
              Page not Found
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Link
              className="bg-[#2C74B3] text-white py-2 px-3 rounded-lg text-sm"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="bg-[#2C74B340] text-[#2C74B3] py-2 px-3 rounded-lg text-sm"
              href="/contact"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hidefromuser;
