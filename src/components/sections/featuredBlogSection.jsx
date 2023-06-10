"use client";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { featuredBlogs } from "@/constants";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";

const FeaturedBlogSection = () => {
  const randomNo = Math.floor(Math.random() * featuredBlogs.length);
  const [blog, setBlog] = useState(featuredBlogs[0]);

  useLayoutEffect(() => {
    setBlog(featuredBlogs[randomNo]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { frontmatter, slug } = blog;
  const {
    title = "Untitled Blog",
    date = "Month ??, 20??",
    coverImage = "/404.png",
  } = frontmatter;

  return (
    <div className="m-4">
      <div className="bg-neutral rounded-md mx-auto max-w-screen-xl hover:ring-offset-4 hover:ring-offset-base-100 hover:ring-2 hover:ring-warning py-16 px-8 md:px-16 lg:px-32">
        <p className="text-secondary text-lg">Featured article</p>

        <div className="mt-14 grid md:grid-cols-6 gap-16">
          <div className="col-span-1 md:col-span-4 grid content-between">
            <div>
              <h1 className="text-5xl mb-6">{title}</h1>
              <p className="text-2xl">{date}</p>
            </div>
            <Link
              href={`/blog/${slug}`}
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
              src={coverImage}
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
