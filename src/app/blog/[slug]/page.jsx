import fs from "fs";
import path from "path";
import { Spacer } from "@/components/spacer";
import BlogHeader from "@/components/sections/blogHeader";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import BlogSection from "@/components/sections/blogSection";
import Link from "next/link";
export const dynamicParams = false;

async function getBlogs(slug) {
  const fullPath = path.join("posts", `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX(
    { source: source }
    // {
    //   xdmOptions(options) {
    //     options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
    //     options.rehypePlugins = [
    //       ...(options?.rehypePlugins ?? []),
    //       rehypePrism,
    //     ];
    //     return options;
    //   },
    // }
  );

  return {
    code,
    frontmatter,
  };
}

export default async function Blogs({ params: { slug } }) {
  const { code, frontmatter } = await getBlogs(slug);
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
  const files = fs.readdirSync(path.join("posts"));

  const blogs = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return blogs;
}
