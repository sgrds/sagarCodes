import BlogHeader from "@/components/sections/blogHeader";
import { Spacer } from "@/components/spacer";
import { getFileData, getAllFileName } from "@/utils/file";
import { getMDXComponent } from "mdx-bundler/client";
export const dynamicParams = false;
export const dynamic = "force-static";

const Clients = async ({ params: { slug } }) => {
  const { code, frontmatter } = await getFileData("clientList", slug, "mdx");
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
            href={`https://github.com/sgrds/sagarCodes/blob/main/clientList/${slug}.mdx`}
            className="text-error hover:underline font-medium"
          >
            Edit on Github
          </a>
        </div>

        <Spacer size="sm" />
      </article>
    </main>
  );
};

export default Clients;

export async function generateStaticParams() {
  const clients = getAllFileName("clientList");
  console.log(clients);

  return clients;
}
