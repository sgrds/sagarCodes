import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Spacer } from "../spacer";
import Image from "next/image";

const BlogHeader = ({ frontmatter }) => {
  const {
    title = "404",
    date = "404",
    coverImage = "404.png",
    description = "404",
    time = "404",
  } = frontmatter;
  return (
    <div>
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/blog" className="group flex text-lg">
          <MdOutlineKeyboardBackspace className="text-3xl mr-2 group-hover:-translate-x-2 group-hover:ease-in group-hover:duration-300" />
          <span className="pt">Back to Blogs</span>
        </Link>
        <Spacer size="2xs" />
        <h1 className="text-5xl font-medium">{title}</h1>
        <p className="text-lg font-medium pt-3">
          {date} — {time} min read
        </p>
      </div>
      <Spacer size="2xs" />

      <div className="max-w-5xl mx-auto w-full aspect-h-9 aspect-w-16 rounded-lg overflow-hidden">
        <Image
          width={1600}
          height={1000}
          src={coverImage}
          className="object-cover h-full"
          alt="HeroImage"
        />
      </div>
    </div>
  );
};

export default BlogHeader;
