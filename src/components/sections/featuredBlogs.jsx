import BlogCard from "../blogCard";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { featuredBlogs } from "@/constants";

const FeaturedBlogs = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="grid lg:flex gap-6 place-content-between mb-16">
        <h1 className="text-4xl text-white font-medium">Featured Blogs ✨</h1>
        <Link href="/blog" className="text-white group flex mt-2 text-2xl">
          <h3 className="pt-2">{`Let's Go to blogs`}</h3>
          <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
        </Link>
      </div>

      <div className="mx-6 sm:mx-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredBlogs.slice(0, 3).map((data, index) => (
          <BlogCard key={index} post={data} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
