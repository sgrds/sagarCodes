import React from "react";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="mx-4">
      <div className="mx-auto max-w-screen-2xl bg-base-300 rounded-box">
        <div className="grid mx-auto max-w-screen-xl md:grid-cols-2 gap-8 md:gap-16 text-3xl md:text-4xl px-6 py-16 md:px-11 md:py-32">
          <h1 className="text-white leading-snug">
            Struggling with `web Presence`, Content, web Product/App? We can
            help.
          </h1>
          <h2 className="text-3xl">
            {` Be it Content creation, video editing, copywriting, or "web App"
            development services for social media, websites, and online
            platforms. Look no further! We've got you covered.`}
          </h2>
          <div className="divider md:col-span-2"></div>
          <div className="flex md:grid  content-end text-xl md:text-7xl gap-8 md:gap-10 font-medium">
            <Link className="hover:text-white" href="/blog">
              blog
            </Link>
            <Link href="/service" className="hover:text-white">
              services
            </Link>
            <a
              href="https://www.youtube.com/channel/UC6fVngPhZP6PD6uIwgSMvBQ"
              target="_blank"
              className="hover:text-white"
            >
              youtube
            </a>
          </div>
          <div className="grid gap-4 font-medium">
            <Image
              width={200}
              height={200}
              src="/emoji1.png"
              className="rounded-lg"
              alt="HeroImage"
            />
            <h1>Explore blogs</h1>
            <p className="text-lg font-normal">
              {`I recently embarked on a blogging journey, posting twice a week
              with content focused on marketing, business development,
              education, and content creation. My aim is to share insights that
              are both informative and entertaining to help you. Let's dive in!`}
            </p>
            <Link href="/blog" className="text-white group flex mt-6 text-2xl">
              <h3 className="pt-2">Go to Blogs</h3>
              <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
