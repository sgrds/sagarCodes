import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { featuredBlogs } from "@/constants";
import Link from "next/link";

const FeaturedBlogSection = () => {
  const blog = featuredBlogs[0];

  return (
    <div className="m-4">
      <div className="bg-neutral rounded-md mx-auto max-w-screen-xl hover:ring-offset-4 hover:ring-offset-base-200 hover:ring-2 hover:ring-warning py-16 px-8 md:px-16 lg:px-32">
        <p className="text-secondary text-lg">Featured article</p>

        <div className="mt-14 grid md:grid-cols-6 gap-16">
          <div className="col-span-1 md:col-span-4 grid content-between">
            <div>
              <h1 className="text-5xl mb-6">{blog?.frontmatter?.title}</h1>
              <p className="text-2xl">{blog?.frontmatter?.date}</p>
            </div>
            <Link
              href={`/blog/${blog?.slug}`}
              target="_blank"
              className="text-white group flex text-2xl h-fit mt-8 md:mt-0"
            >
              <h3 className="pt-2">Read full article</h3>
              <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
            </Link>
          </div>
          <div className="col-span-2 aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card">
            <Image
              width={600}
              height={600}
              src={blog?.frontmatter?.coverImage}
              className="rounded-lg object-cover h-full"
              alt="HeroImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogSection;
