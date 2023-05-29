import BlogCard from "@/components/blogCard";
import { Spacer } from "@/components/spacer";
import Image from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import fs from "fs";
import path from "path";
import { sortByDate } from "@/utils";
import { bundleMDX } from "mdx-bundler";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

export async function getBlogs() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = await Promise.all(
    files.map(async (filename) => {
      // Create slug
      const slug = filename.replace(".mdx", "");

      // Get frontmatter
      const source = fs.readFileSync(path.join("posts", filename), "utf-8");

      const { frontmatter } = await bundleMDX({ source: source });

      return {
        slug,
        frontmatter,
      };
    })
  );

  return {
    posts: posts.sort(sortByDate),
  };
}

const page = async () => {
  const { posts } = await getBlogs();

  return (
    <div>
      {/* Hero section */}
      <div className="hero my-32 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">
              Unlock the Secrets to Successful Marketing, Developing Product,
              etc.🏆
            </h1>
            <p className="py-6 text-xl mt-4">
              Your Guide to Building a Winning Strategy for marketing, or
              building a Digital Product or to build a Perfect Story for your
              business.
            </p>
          </div>
        </div>
      </div>
      {/* Featured Blog Section */}
      <div className="m-4">
        <div
          className="bg-base-100 rounded-md mx-auto max-w-screen-xl hover:ring-offset-4 hover:ring-offset-base-200 hover:ring-2 hover:ring-warning
       py-11 px-8 md:px-16 lg:px-32"
        >
          <div className="w-full grid grid-cols-2">
            <p className="text-secondary text-lg">Featured article</p>
            <div className="flex gap-2 text-5xl justify-self-end mx-4">
              <BiChevronLeftCircle className="hover:text-white" />
              <BiChevronRightCircle className="hover:text-white" />
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-6 gap-16">
            <div className="col-span-1 md:col-span-4 grid content-between">
              <div>
                <h1 className="text-5xl mb-6">{`Heading: title`}</h1>
                <p className="text-2xl">{`May 22th, 2023`}</p>
              </div>
              <a
                href="#about"
                className="text-white group flex text-2xl h-fit mt-8 md:mt-0"
              >
                <h3 className="pt-2">Read full article</h3>
                <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
              </a>
            </div>
            <div className="col-span-2 aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card">
              <Image
                width={200}
                height={600}
                src="/heroImage.png"
                className="rounded-lg"
                alt="HeroImage"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Spacer component */}

      <Spacer size="3xs" />

      {/* blog list */}

      <div className="mx-4">
        <div className="mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
          {posts.map((data, index) => (
            <BlogCard key={index} post={data} />
          ))}
        </div>
        {/* Spacer component */}
        <Spacer size="lg" />
      </div>
    </div>
  );
};

export default page;
