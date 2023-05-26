import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  // console.log(post);
  const {
    slug = "404",
    frontmatter = {
      title: "404",
      date: "404",
      coverImage: "404.png",
      time: "404",
    },
  } = post;
  const { title, date, coverImage, time } = frontmatter;
  // console.log(slug);
  return (
    <Link href={"/blog/" + slug} className="w-full group">
      <div className="aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card group-hover:ring-2  ring-offset-base-200 ring-offset-4 group-hover:ring-warning">
        <Image
          width={1600}
          height={1000}
          src={coverImage}
          className="object-cover h-full"
          alt="HeroImage"
        />
      </div>
      <div>
        <p className="my-6 text-xl font-medium">
          {date} — {time} min read
        </p>
        <h3 className="text-3xl text-white font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default BlogCard;
