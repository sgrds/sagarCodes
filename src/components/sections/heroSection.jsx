import React from "react";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
const HeroSection = () => {
  return (
    <div className="hero min-h-[85vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          width={1500}
          height={1500}
          src="/heroImage.png"
          className="rounded-lg"
          alt="HeroImage"
        />
        <div>
          <h1 className="text-5xl leading-snug font-normal text-white">
            Helping people with quality software to make a difference.
          </h1>
          <button className="block mt-11 btn btn-active btn-primary btn-lg rounded-full">
            Read our Blogs
          </button>
          <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
            Check our Services
          </button>
          <div className="flex mt-24 text-3xl">
            <a href="#Intro">
              <BsArrowDownCircle className="text-5xl animate-bounce mr-3  inline-block" />
              Learn More About Sagar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
