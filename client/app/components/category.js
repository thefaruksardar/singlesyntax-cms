import Link from "next/link";
import Image from "next/image";
import Head from "../(blog)/head";

const Category = ({ categories, title }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Head title={title} />
      {categories.map(
        (category) =>
          !category.isdraft && (
            <div className="mb-3">
              <Link href={category.permalink}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/images/${category.image}`}
                  width={600}
                  height={250}
                  className="rounded-lg min-w-full h-auto"
                  title={category.title}
                  alt={category.title}
                />
              </Link>
              <div className="pt-2">
                <p className="text-[#2C74B3] text-sm">{category.category}</p>
              </div>
              <div>
                <Link href={category.permalink}>
                  <h2 className="text-lg" title={category.title}>
                    {category.title}
                  </h2>
                </Link>
                <p className="text-slate-500">{category.description}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Category;
