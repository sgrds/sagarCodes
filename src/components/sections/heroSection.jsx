import React from "react";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero min-h-[85vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          width={600}
          height={600}
          src="/heroSectionImage.png"
          className="rounded-lg px-10 md:px-0"
          alt="HeroImage"
        />
        <div className="px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl leading-snug font-base text-white">
            Transforming Business: Crafting Together Exquisite Websites,
            Content, and Designs.
          </h1>
          <Link target="_blank" href="https://calendly.com/sagarcodes/30min">
            <button className="block mt-11 btn btn-active btn-primary btn-lg rounded-full">
              Book a Call
            </button>
          </Link>

          <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
            Check our Services
          </button>
          <div className="flex mt-24 text-3xl">
            <Link href="#Intro">
              <BsArrowDownCircle className="text-5xl animate-bounce mr-3  inline-block" />
              Learn More About Sagar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
