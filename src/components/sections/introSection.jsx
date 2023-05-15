import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const IntroSection = () => {
  return (
    <div id="Intro" className="hero bg-base-200">
      <div className="hero-content relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto">
        <Image
          width={600}
          height={600}
          src="/heroImage.png"
          className="rounded-lg col-span-full lg:col-span-4"
          alt="HeroImage"
        />
        <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
          <h1 className="font-normal leading-snug text-3xl lg:text-4xl text-white">
            Hi, I&#39;m Sagar Das. Crafting some killer web apps and captivating
            content to reel in that perfect target audience.
          </h1>
          <p className="text-2xl font-normal py-10">
            {`I'm a big anime fan, I enjoy taking creative breaks from my full
            stack development work, by exploring graphic design and polishing
            video editing skills. This allows me to tap into my artistic side
            while also indulging in a beloved hobby.`}
          </p>
          <a href="#about" className="text-white group flex mt-6 text-2xl">
            <h3 className="pt-2">Learn More About Me</h3>
            <BsArrowRightCircle className="text-5xl ml-4 group-hover:translate-x-2 group-hover:ease-in group-hover:duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
