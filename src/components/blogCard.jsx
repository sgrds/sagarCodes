import Image from "next/image";

const BlogCard = (
  {
    //   leadingTeam,
    //   article: {
    //     readTime,
    //     dateDisplay,
    //     slug,
    //     frontmatter,
    //     frontmatter: {
    //       title = "Untitled Post",
    //       bannerCloudinaryId,
    //       bannerBlurDataUrl,
    //     },
    //   },
  }
) => {
  return (
    <div className="w-full">
      <div className="aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card">
        <Image
          width={1600}
          height={1000}
          src="/wallpaper.jpg"
          className="object-cover h-full"
          alt="HeroImage"
        />
      </div>
      <div>
        <p className="my-6 text-xl font-medium">May 8th, 2023 — 5 min read</p>
        <h3 className="text-3xl text-white font-medium">When to useMemo</h3>
      </div>
    </div>
  );
};

export default BlogCard;
