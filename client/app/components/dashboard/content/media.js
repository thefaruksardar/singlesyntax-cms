import axios from "axios";
import Image from "next/image";

const getImages = async () => {
  const res = await axios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/post/get`);
  return res.data;
};

const Media = async () => {
  const images = await getImages();

  return (
    <div className="mx-6 px-5 py-5 bg-white">
      <h1 className="text-xl">Media</h1>
      <div className="flex flex-wrap gap-5 my-2">
        {images.map((image) => (
          <div>
            <Image
              priority
              src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/images/${image.image}`}
              width={330}
              height={200}
              alt={image.title}
              title={image.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Media;
