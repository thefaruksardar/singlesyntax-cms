import { unstable_getServerSession } from "next-auth/next";
import Image from "next/image";

const Profile = async () => {
  const session = await unstable_getServerSession();

  return (
    <div className="flex flex-col justify-center mx-10 bg-white shadow-lg p-5 mt-5 rounded-lg">
      <div className="flex flex-col">
        <div className="mx-auto">
          <Image
            src={session.user.image}
            width={60}
            height={60}
            className="rounded-full"
            alt={session.user.name}
            title={session.user.name}
          />
        </div>
        <div className="mx-auto text-center mt-4">
          <p className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {session.user.name}
          </p>
          <p className="text-gray-700 text-base mb-4">{session.user.email}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
