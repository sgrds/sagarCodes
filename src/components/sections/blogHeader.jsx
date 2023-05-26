import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Spacer } from "../spacer";
import Image from "next/image";

const BlogHeader = ({ frontmatter }) => {
  console.log(frontmatter);
  const { title, date, coverImage, description, time } = frontmatter;
  return (
    <div>
      <Link href="/blog" className="group flex text-lg">
        <MdOutlineKeyboardBackspace className="text-3xl mr-2 group-hover:-translate-x-2 group-hover:ease-in group-hover:duration-300" />
        <span className="pt">Back to Blogs</span>
      </Link>
      <Spacer size="2xs" />
      <h1 className="text-5xl font-medium">{title}</h1>
      <p className="text-lg font-medium pt-3">
        {date} — {time} min read
      </p>
      <Spacer size="2xs" />
      {/* <Image /> */}
    </div>
  );
};

export default BlogHeader;
