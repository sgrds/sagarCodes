import BlogCard from "@/components/blogCard";
import { Spacer } from "@/components/spacer";
import { getAllFileNameAndFrontmatter } from "@/utils/file";
import { BookCall } from "../contact/page";
import Link from "next/link";

export const metadata = {
  title: "Clients - SagarCodes",
  description:
    "We've had the opportunity to help numerous clients. We're a small team that works hard to create successful digital projects, develop creative digital products, and help your business grow.",
};
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

            {/* <p className="text-xl">My clients from different industries</p> */}
            <div className="grid justify-center">
              <Link
                target="_blank"
                href="https://calendly.com/sagarcodes/30min"
              >
                <button className="block mt-11 btn btn-active btn-primary btn-lg rounded-full">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Spacer size="3xs" />

      {/* blog list */}

      <div className="mx-4">
        <div className="mx-6 sm:mx-auto max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
          {posts.map((data, index) => (
            <BlogCard key={index} link="clients" post={data} />
          ))}
        </div>
        <Spacer size="xs" />
        <div className="text-center font-medium text-gray-500">
          {`You've reached the End of the List 😓`}
        </div>
        {/* Spacer component */}
        <Spacer size="base" />

        <BookCall />
        <Spacer size="lg" />
      </div>
    </div>
  );
};

export default page;
