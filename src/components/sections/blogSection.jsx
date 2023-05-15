import React from "react";
import BlogCard from "../blogCard";
import { BsArrowRightCircle } from "react-icons/bs";

const BlogSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="grid lg:flex gap-6 place-content-between mb-16">
        <h1 className="text-5xl text-white font-medium">
          Blog Recommendations
        </h1>
        <a href="#about" className="text-white group flex mt-2 text-2xl">
          <h3 className="pt-2"> Learn More About Me</h3>
          <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default BlogSection;
