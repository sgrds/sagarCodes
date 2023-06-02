import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  const frontmatter = post?.frontmatter;

  return (
    <Link href={"/blog/" + post?.slug} className="w-full group">
      <div className="aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card group-hover:ring-2  ring-offset-base-200 ring-offset-4 group-hover:ring-warning">
        <Image
          width={1600}
          height={1000}
          src={frontmatter !== undefined ? frontmatter?.coverImage : "/404.png"}
          className="object-cover h-full"
          alt="HeroImage"
        />
      </div>
      <div>
        <p className="my-6 text-xl font-medium">
          {frontmatter?.date} — {frontmatter?.time} min read
        </p>
        <h3 className="text-3xl text-white font-medium line-clamp-2">
          {frontmatter?.title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCard;
