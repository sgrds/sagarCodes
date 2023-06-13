import { Spacer } from "@/components/spacer";
// import Image from "next/image";
import React from "react";
import { GiPencilRuler, GiShare } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import {
  SiFigma,
  // SiCanva,
  // SiAdobephotoshop,
  // SiAdobepremierepro,
  // SiAdobeaftereffects,
} from "react-icons/si";
import { FiPenTool } from "react-icons/fi";
import DesktopContainer from "@/components/desktopContainer";

const Services = () => {
  const gradient = {
    primary: "from-[#2e918c] to-primary",
    secondary: "from-[#ed8936] to-error",
    tertiary: "from-[#eec42e] to-[#3d9e65]",
  };
  return (
    <>
      <section className="mx-auto min-h-[85vh] grid items-center max-w-screen-xl px-2 text-center">
        {/* <Spacer size="sm" /> */}
        <div>
          <h1 className="font-extrabold text-7xl md:text-8xl">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-l ${gradient.primary}`}
            >
              {` Let's.`}
            </span>
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-l ${gradient.secondary}`}
            >
              Build
            </span>
            🥂
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-l ${gradient.tertiary}`}
            >
              Together
            </span>
          </h1>
          <p className="mt-6 text-xl max-w-4xl mx-auto text-gray-400">
            Our winning strategy combines creative and engineering expertise to
            transform your interactive product into <em>something amazing</em>.
            Get ready to make waves with us!
          </p>
          <div className="max-w-7xl mx-auto mt-16">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-4 bg-base-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 text-xl">
                Get in Touch
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="grid max-w-screen-xl mx-auto px-2">
        <div className="justify-items-center text-center">
          <h3 className="mb-10 tracking-[0.2em] text-xs font-black uppercase">
            Unlock the secrets of execution
          </h3>
          <div className="grid justify-items-center">
            <div className="w-0.5 h-32 bg-gradient-to-t from-primary" />
            <div
              className={`z-10 rounded-full px-4 py-2 bg-gradient-to-r font-black text-black ${gradient.primary}`}
            >
              1
            </div>
          </div>
          <h3
            className={`mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l ${gradient.primary}`}
          >
            Content
          </h3>
          <h2 className="text-base-content mt-4 font-bold text-4xl lg:text-7xl">{`Craft your brand's unique story`}</h2>
          <p className="mt-8 mx-auto max-w-3xl font-medium text-xl text-gray-400">
            {`Craft your brand's story with us, where every word counts. Because
            in a world of noise, a powerful narrative is the only thing that
            truly resonates.`}
          </p>
        </div>

        <div className="grid text-center lg:text-left lg:grid-cols-2 gap-8 mt-24">
          <div></div>
          <div className="grid gap-16">
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <GiPencilRuler className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-primary font-medium">
                Every Word Counts
              </h4>
              <p className="mt-2 text-lg text-base-content">
                {` In today's fast-paced and noisy world, it can be challenging to
                get your message heard. That's why we believe that every word
                counts.`}
              </p>
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <MdGroups2 className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-primary font-medium">
                Expert Storytellers
              </h4>
              <p className="mt-2 text-lg text-base-content">
                {`Crafting a compelling brand narrative requires expertise and
                skill. That's why we hire only the best writers, and designers
                to work on your project.`}
              </p>
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <VscGraph className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-primary font-medium">
                {`Unlock Your Business's Potential`}
              </h4>
              <p className="mt-2 text-lg text-base-content">
                {`Telling your brand story can be stressful, especially if you're
                not sure where to start. Let us take care of everything for you.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Spacer size="sm" />

      <section className="grid max-w-screen-xl mx-auto px-2">
        <div className="justify-items-center text-center">
          <h3 className="mb-10 tracking-[0.2em] text-xs font-black uppercase">
            Designing innovation, crafting perfection.
          </h3>
          {/* <div className="text-4xl flex gap-8 justify-center mb-10">
            <SiAdobephotoshop />
            <SiCanva />
            <SiFigma />
            <SiAdobepremierepro />
            <SiAdobeaftereffects />
          </div> */}
          <div className="grid justify-items-center">
            <div className="w-0.5 h-32 bg-gradient-to-t from-error" />
            <div
              className={`z-10 rounded-full px-4 py-2 bg-gradient-to-r font-black text-black ${gradient.secondary}`}
            >
              2
            </div>
          </div>
          <h3
            className={`mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l ${gradient.secondary}`}
          >
            Design
          </h3>
          <h2 className="text-base-content mt-4 font-bold text-4xl lg:text-7xl">
            Designing your digital world
          </h2>
          <p className="mt-8 mx-auto max-w-3xl font-medium text-xl text-gray-400">
            We specialize in creating captivating visual content for your brand,
            including logo design, social media posts, and product{" "}
            <span className="text-error">UI/UX.</span> Crafting your digital
            presence, one pixel at a time.
          </p>
        </div>

        <div className="grid text-center lg:text-left lg:grid-cols-2 gap-8 mt-24">
          <div>
            <DesktopContainer />
          </div>

          <div className="grid gap-16">
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <FiPenTool className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-error font-medium">
                Elevate Your Brand with Professional Logos
              </h4>
              <p className="mt-2 text-lg text-base-content">
                {`Make a lasting impression with our professional logos that reflect your brand's personality and values.`}
              </p>
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <SiFigma className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-error font-medium">
                Seamless Digital Experiences
              </h4>
              <p className="mt-2 text-lg text-base-content">
                UI/UX is crucial for product success. We Design with user in
                mind, prioritize ease of use and accessibility.
              </p>
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <GiShare className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-error font-medium">
                Amplify Your Social Presence with Compelling Content
              </h4>
              <p className="mt-2 text-lg text-base-content">
                {`Crafting bespoke content that resonates with your audience to amplify your social presence. Let's connect!`}
              </p>
            </div>
            {/* 
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <GiShare className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-error font-medium">
                Expert Storytellers
              </h4>
              <p className="mt-2 text-lg text-base-content">
                {`Crafting a compelling brand narrative requires expertise and
                skill. That's why we hire only the best writers, and designers
                to work on your project.`}
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <Spacer size="lg" />
    </>
  );
};

export default Services;

// .heading-line-first {
//   background-image: linear-gradient(to left, #ed8936, #ed64a6);
// }

// .heading-line-second {
//   background-image: linear-gradient(to left, #38b2ac, #0bc5ea);
// }

// .heading-line-third {
//   background-image: linear-gradient(to left, #ecc94b, #48bb78);
