import Image from "next/image";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const page = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="hero my-20 bg-base-200">
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
      <div className="m-4">
        <div
          className="bg-base-100 rounded-md mx-auto max-w-screen-xl hover:ring-2 hover:ring-warning
       py-11 px-8 md:px-16 lg:px-32"
        >
          <p className="text-secondary">Featured article</p>
          <div className="mt-14 grid md:grid-cols-6 gap-16">
            <div className="col-span-1 md:col-span-4 grid content-between">
              <div>
                <h1 className="text-5xl mb-6">{`Heading: title`}</h1>
                <p className="text-2xl">{`May 22th, 2023`}</p>
              </div>
              <a
                href="#about"
                className="text-white group flex text-2xl h-fit mt-8 md:mt-0"
              >
                <h3 className="pt-2">Read full article</h3>
                <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
              </a>
            </div>
            <div className="col-span-2 aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card">
              <Image
                width={200}
                height={600}
                src="/heroImage.png"
                className="rounded-lg"
                alt="HeroImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
