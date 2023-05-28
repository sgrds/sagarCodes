import React from "react";
import BlogCard from "../blogCard";
import { BsArrowRightCircle } from "react-icons/bs";
import { getBlogs } from "@/app/blog/page";
import { randomBlogReturn } from "@/utils";
import Link from "next/link";

const BlogSection = async () => {
  const { posts } = await getBlogs();
  const randomBlogs = randomBlogReturn(posts, 9);
  const arrBlogs = randomBlogs.filter((element) => {
    return element !== undefined;
  });

  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <h3 className="text-4xl font-medium mb-16 text-white">
        You might also find these articles useful.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {arrBlogs.slice(0, 3).map((data, index) => (
          <BlogCard key={index} post={data} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
