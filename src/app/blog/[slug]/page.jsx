import fs from "fs";
import path from "path";
import { Spacer } from "@/components/spacer";
import BlogHeader from "@/components/sections/blogHeader";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
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
  let countRender = 0;
  countRender++;
  console.log(countRender);

  return (
    <main className="px-4 mx-auto max-w-screen-xl pt-8 pb-16 lg:pt-16 lg:pb-24 ">
      <article className="mx-auto w-full max-w-3xl">
        <BlogHeader />
        <div className="prose md:prose-lg dark:prose-invert">
          <Component />
        </div>
        <Spacer size="2xs" />
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
