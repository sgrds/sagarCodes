import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const IntroSection = () => {
  return (
    <div id="Intro" className="hero">
      <div className="hero-content relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto">
        <Image
          width={620}
          height={620}
          src="/pixelCharacter.png"
          className="rounded-lg col-span-full lg:col-span-4"
          alt="HeroImage"
        />
        <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
          <h1 className="font-normal leading-snug text-3xl lg:text-4xl text-white">
            Hi, I&#39;m Sagar Das. Elevating Business Presence: Collaborative
            Customization for Captivating Websites, Content, and Designs.
          </h1>
          <p className="text-2xl font-normal py-10">
            {`I specialize in crafting tailor-made websites, content, and designs that resonate with businesses. Let's collaborate to bring your unique vision to life and captivate your audience in meaningful ways.`}
          </p>
          <Link target="_blank" href="https://calendly.com/sagarcodes/30min">
            <button className="block btn btn-active btn-primary btn-lg rounded-full">
              Book a Call
            </button>
          </Link>
          <Link href="/service" className="text-white group flex mt-6 text-2xl">
            <h3 className="pt-2">Check Our Services</h3>
            <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
