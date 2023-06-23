import fs from "fs";
import path from "path";
import { Spacer } from "@/components/spacer";
import BlogHeader from "@/components/sections/blogHeader";
import { getMDXComponent } from "mdx-bundler/client";
import BlogSection from "@/components/sections/blogSection";
import { getFileData, getAllFileName } from "@/utils/file";
export const dynamicParams = false;

export default async function Blogs({ params: { slug } }) {
  const { code, frontmatter } = await getFileData("posts", slug, "mdx");
  const Component = getMDXComponent(code);

  return (
    <main className="px-4 mx-auto max-w-screen-xl pt-8 pb-16 lg:pt-16 lg:pb-24 ">
      <article>
        <BlogHeader frontmatter={frontmatter} />
        <Spacer size="xs" />
        <div className="prose md:prose-lg dark:prose-invert mx-auto w-full max-w-3xl">
          <Component />
        </div>
        <Spacer size="xs" />
        <div className="mx-auto max-w-3xl border-b-2 pb-4 border-neutral justify-end flex gap-4">
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?url=https://sagarcodes.com/blog/${slug}`}
            className="text-error hover:underline font-medium"
          >
            Tweet this article
          </a>
          <a
            target="_blank"
            href={`https://github.com/sgrds/sagarCodes/blob/main/posts/${slug}.mdx`}
            className="text-error hover:underline font-medium"
          >
            Edit on Github
          </a>
        </div>

        <Spacer size="sm" />
        <BlogSection />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const blogs = getAllFileName("posts");
  // console.log(blogs);

  return blogs;
}
