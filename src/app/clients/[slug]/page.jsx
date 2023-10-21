import BlogHeader from "@/components/sections/blogHeader";
import { Spacer } from "@/components/spacer";
import { getFileData, getAllFileName } from "@/utils/file";
import { getMDXComponent } from "mdx-bundler/client";
export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateMetadata(
  { params: { slug }, searchParams },
  parent
) {
  const { code, frontmatter } = await getFileData("clientList", slug, "mdx");

  return {
    title: frontmatter.title + " - SagarCodes",
    robots: "index, follow",
  };
}

const Clients = async ({ params: { slug } }) => {
  const { code, frontmatter } = await getFileData("clientList", slug, "mdx");
  const Component = getMDXComponent(code);

  return (
    <main className="px-4 mx-auto max-w-screen-xl pt-8 pb-16 lg:pt-16 lg:pb-24 ">
      <article>
        <BlogHeader link="/clients" frontmatter={frontmatter} />
        <Spacer size="xs" />
        <div className="prose md:prose-lg dark:prose-invert mx-auto w-full max-w-3xl">
          <Component />
        </div>
        <Spacer size="xs" />
        <div className="mx-auto max-w-3xl border-b-2 pb-4 border-neutral justify-end flex gap-4"></div>

        <Spacer size="sm" />
      </article>
    </main>
  );
};

export default Clients;

export async function generateStaticParams() {
  const clients = getAllFileName("clientList");
  // console.log(clients);

  return clients;
}
