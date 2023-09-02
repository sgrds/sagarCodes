import BlogCard from "@/components/blogCard";
import { Spacer } from "@/components/spacer";
import FeaturedBlogSection from "@/components/sections/featuredBlogSection";
import { getAllFileNameAndFrontmatter } from "@/utils/file";

export const metadata = {
  title: "Blogs - SagarCodes",
  description:
    "Unlock the Secrets to Successful Marketing, Developing Product, etc. We're a small team that works hard to create successful digital projects, develop creative digital products, and help your business grow.",
};

const page = async () => {
  const { posts } = await getAllFileNameAndFrontmatter("posts", "mdx");

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
        <div className="mx-6 sm:mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
          {posts.map((data, index) => (
            <BlogCard key={index} post={data} />
          ))}
        </div>
        {/* Spacer component */}
        <Spacer size="sm" />
        <div className="text-center font-medium text-gray-500">
          {`You've reached the End of the List 😓`}
        </div>
        <Spacer size="2xs" />
      </div>
    </div>
  );
};

export default page;
