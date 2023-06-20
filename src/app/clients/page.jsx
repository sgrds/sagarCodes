import BlogCard from "@/components/blogCard";
import { Spacer } from "@/components/spacer";
import { getAllFileNameAndFrontmatter } from "@/utils/file";

const page = async () => {
  const { posts } = await getAllFileNameAndFrontmatter("clientList", "mdx");

  return (
    <div>
      {/* Hero section */}
      <div className="hero my-32">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-[5.5rem] font-bold">
              I have <span className="text-success">{`{worked}`}</span> with
            </h1>
            <Spacer size="xs" />

            <p className="py-4 text-xl">My clients from different industries</p>
          </div>
        </div>
      </div>

      <Spacer size="3xs" />

      {/* blog list */}

      <div className="mx-4">
        <div className="mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
          {posts.map((data, index) => (
            <BlogCard key={index} link="clients" post={data} />
          ))}
        </div>
        {/* Spacer component */}
        <Spacer size="lg" />
      </div>
    </div>
  );
};

export default page;
