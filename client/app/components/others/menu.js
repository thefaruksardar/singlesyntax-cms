import Link from "next/link";

const Menu = () => {
  return (
    <div
      className={`bg-gray-100 shadow-lg right-0 min-w-full !min-h-[37vh] !rounded-lg `}
    >
      <div className="flex min-h-full mx-4">
        <div className="flex flex-col gap-10 mt-5 min-w-[100%]">
          <ul className="bg-white py-1 px-4 flex flex-col gap-2 rounded-xl divide-y-2 shadow-sm">
            <li className="pt-1">
              <Link href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/html`}>
                HTML
              </Link>
            </li>
            <li className="pt-1">
              <Link href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/css`}>
                CSS
              </Link>
            </li>
            <li className="pt-1">
              <Link href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/javascript`}>
                JavaScript
              </Link>
            </li>
          </ul>
          <ul className="bg-white py-1 px-4 flex flex-col gap-2 rounded-xl divide-y-2 shadow-s">
            <li className="pt-1">
              <Link
                href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/privacy-policy`}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="pt-1">
              <Link href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/advertise`}>
                Advertise
              </Link>
            </li>
            <li className="pt-1">
              <Link href={`${process.env.NEXT_PUBLIC_MAIN_DOMAIN}/contact`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
