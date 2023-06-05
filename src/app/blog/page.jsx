import BlogCard from "@/components/blogCard";
import { Spacer } from "@/components/spacer";
import React from "react";
import fs from "fs";
import path from "path";
import { sortByDate } from "@/utils";
import { bundleMDX } from "mdx-bundler";
import FeaturedBlogSection from "@/components/sections/featuredBlogSection";

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
      <div className="hero my-32">
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
      <FeaturedBlogSection />
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
