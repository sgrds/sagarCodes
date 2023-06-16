import { Spacer } from "@/components/spacer";
// import Image from "next/image";
import React from "react";
import { GiPencilRuler, GiShare } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import {
  SiFigma,
  SiNextdotjs,
  SiSvelte,
  SiCreatereactapp,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiMui,
  SiDaisyui,
  SiWix,
  SiWebflow,
} from "react-icons/si";
import { BsDatabaseFillCheck, BsCode } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DesktopContainer from "@/components/desktopContainer";
import Skeleton from "@/components/skeleton";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import IntroHeader from "@/components/introHeader";

const Services = () => {
  const gradient = {
    primary: { from: "from-primary", to: "to-success" },
    secondary: { from: "from-[#ed8936]", to: "to-error" },
    tertiary: { from: "from-warning", to: "to-success" },
  };
  return (
    <main>
      <Spacer size="sm" />
      <section className="mx-auto grid items-center max-w-screen-xl px-2 text-center">
        {/* <Spacer size="sm" /> */}
        <div>
          <h3 className="font-extrabold text-2xl md:text-4xl">
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-l ${gradient?.primary?.from} ${gradient?.primary?.to}`}
            >
              {`Let's.`}
            </span>
            <span
              className={`inline-block text-transparent bg-clip-text bg-gradient-to-l ${gradient.secondary.from} ${gradient.secondary.to}`}
            >
              Build
            </span>
            🥂
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-l ${gradient.tertiary.from} ${gradient.tertiary.to}`}
            >
              Together
            </span>
          </h3>
          <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-secondary-focus">
            Content. Designing
          </h1>
          <div className="divider divider-verticle text-2xl md:text-4xl pt-2 text-gray-600 font-black">
            &
          </div>
          <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-secondary-focus">
            Developement
          </h1>

          <div className="max-w-7xl mx-auto mt-20">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-4 bg-base-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 text-xl">
                Get in Touch
              </div>
            </button>
          </div>
        </div>
      </section>
      <Spacer size="sm" />
      <section className="tracking-tight text-center text-3xl md:text-4xl lg:text-5xl font-medium max-w-screen-xl mx-auto">
        {/* clients */}
        <div className="lg:flex lg:flex-wrap justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-700">
            I have <span className="text-success">{`{worked}`}</span> with...
          </h2>
          <Link
            href="#"
            className="bg-info px-4 py-2 lg:px-8 lg:py-3 mx-8 rounded-full text-xl lg:text-3xl text-gray-900 font-medium"
          >
            ClientList
          </Link>
        </div>
        <Spacer size="2xs" />

        <Marquee
          gradient={true}
          speed="40"
          gradientColor={[13, 23, 40]}
          gradientWidth={20}
        >
          <div className="flex gap-16 items-center">
            <h4 className="tracking-tighter text-7xl font-black text-base-100 bg-white px-2">
              SKE
            </h4>

            <div className="flex items-center">
              <Image
                width={80}
                height={80}
                src="/medwayMedicare.png"
                className="w-20 h-20 mr-4"
                alt="MedwayMedicare Logo"
              />
              <h2 className="text-4xl font-bold text-[#277BC0]">
                Medway<span className="text-[#ffd05a]">Medicare</span>
              </h2>
            </div>
            <div className="flex items-center">
              <Image
                width={100}
                height={100}
                src="/mcc.png"
                className="w-24 h-24 mr-4"
                alt="MCC Logo"
              />
              <h2 className="text-3xl font-bold">Modern Creative Center</h2>
            </div>
            <Image
              width={250}
              height={100}
              src="/skynox.svg"
              className="h-24 m-6"
              alt="Skynox Logo"
            />
            <h4 className="tracking-tighter font-bold mr-16">MartLance</h4>
          </div>
        </Marquee>
      </section>
      <Spacer size="lg" />
      <section className="grid max-w-screen-xl mx-auto px-2">
        <IntroHeader
          meta={{
            intro: "Unlock the secrets of execution",
            heading: "Content",
            title: "Craft your brand's unique story",
            gradient: gradient.primary,
          }}
        />

        <p className="text-center mt-8 mx-auto max-w-3xl font-medium text-xl text-gray-400">
          {`Craft your brand's story with us, where every word counts. Because in a world of noise, a powerful narrative is the only thing that truly resonates.`}
        </p>
        <div className="grid text-center lg:text-left lg:grid-cols-2 gap-8 mt-24">
          <div className="grid mb-52 justify-stretch lg:pr-16">
            <div className="max-w-lg relative">
              <Skeleton />
              <div className="absolute -bottom-24 md:-right-20">
                <DesktopContainer>
                  <div className="w-full h-72 relative px-14">
                    <div className="w-full h-full grid items-center justify-center text-center font-bold text-white text-xl">
                      <div className="max-w-sm">
                        <p>
                          {`" Content is where I expect much of the real money will be
                    made on the Internet."`}
                        </p>
                        <p className="text-right text-lg mt-2">~Bill Gates</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 -right-5 opacity-20">
                      <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">q</kbd>
                        <kbd className="kbd">w</kbd>
                        <kbd className="kbd">e</kbd>
                        <kbd className="kbd">r</kbd>
                        <kbd className="kbd">t</kbd>
                        <kbd className="kbd">y</kbd>
                        <kbd className="kbd">u</kbd>
                        <kbd className="kbd">i</kbd>
                        <kbd className="kbd">o</kbd>
                        <kbd className="kbd">p</kbd>
                      </div>
                      <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">a</kbd>
                        <kbd className="kbd">s</kbd>
                        <kbd className="kbd">d</kbd>
                        <kbd className="kbd">f</kbd>
                        <kbd className="kbd">g</kbd>
                        <kbd className="kbd">h</kbd>
                        <kbd className="kbd">j</kbd>
                        <kbd className="kbd">k</kbd>
                        <kbd className="kbd">l</kbd>
                      </div>
                      <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">z</kbd>
                        <kbd className="kbd">x</kbd>
                        <kbd className="kbd">c</kbd>
                        <kbd className="kbd">v</kbd>
                        <kbd className="kbd">b</kbd>
                        <kbd className="kbd">n</kbd>
                        <kbd className="kbd">m</kbd>
                        <kbd className="kbd">/</kbd>
                      </div>
                    </div>
                  </div>
                </DesktopContainer>
              </div>
            </div>
          </div>
          <div className="grid gap-16">
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <GiPencilRuler className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-primary font-medium">
                Every Word Counts
              </h4>
              <p className="mt-2 text-lg text-base-content max-w-lg">
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
              <p className="mt-2 text-lg text-base-content max-w-lg">
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
              <p className="mt-2 text-lg text-base-content max-w-lg">
                {`Telling your brand story can be stressful, especially if you're
                not sure where to start. Let us take care of everything for you.`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Spacer size="sm" />
      <section className="grid max-w-screen-xl mx-auto px-2">
        <IntroHeader
          meta={{
            intro: "Designing innovation, crafting perfection.",
            number: 2,
            heading: "Design",
            title: "Designing your digital world",
            gradient: gradient.secondary,
          }}
        />

        <p className="text-center mt-8 mx-auto max-w-3xl font-medium text-xl text-gray-400">
          We specialize in creating captivating visual content for your brand,
          including logo design, social media posts, and product{" "}
          <span className="text-error">UI/UX.</span> Crafting your digital
          presence, one pixel at a time.
        </p>
        <div className="grid text-center lg:text-left lg:grid-cols-2 gap-8 mt-24">
          <div>
            <Image
              width={500}
              height={500}
              src="/design.png"
              // className="object-cover h-full"
              alt="image"
            />
          </div>

          <div className="grid gap-16">
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <FiPenTool className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-error font-medium">
                Elevate Your Brand with Professional Logos
              </h4>
              <p className="mt-2 text-lg text-base-content max-w-lg">
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
              <p className="mt-2 text-lg text-base-content max-w-lg">
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
              <p className="mt-2 text-lg text-base-content max-w-lg">
                {`Crafting bespoke content that resonates with your audience to amplify your social presence. Let's connect!`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Spacer size="lg" />
      <section className="grid max-w-screen-xl mx-auto px-2">
        <IntroHeader
          meta={{
            number: 3,
            intro: "Developing bespoke web Apps for our valued clients",
            heading: "Developement",
            title: " We create custom Website, WebApps",
            gradient: gradient.tertiary,
          }}
        >
          <div className="text-4xl flex gap-8 flex-wrap  justify-center mb-10">
            <SiNextdotjs />
            <SiSvelte />
            <SiCreatereactapp />
            <SiExpress />
            <SiNodedotjs />
            <SiMongodb />
            <SiMui />
            <SiDaisyui />
            <SiTailwindcss />
            <SiWix />
            <SiWebflow />
          </div>
        </IntroHeader>

        <div className="grid text-center lg:text-left lg:grid-cols-2 gap-8 mt-24">
          <div className="grid gap-16">
            <div className="grid justify-items-center lg:justify-items-start">
              <h4 className="mt-4 text-2xl text-secondary font-bold">
                For Seamless and Scalable Websites 💪
              </h4>
              <h5 className="mt-4 text-2xl text-secondary">
                Get noticed fast and keep clients happy with a lightning-fast🚀,
                SEO-optimized website!
              </h5>
              <p className="mt-8 text-lg text-base-content max-w-lg">
                We excel at crafting custom website & WebApps that meet your
                unique business needs. We use{" "}
                <span className="text-secondary">industry best practices</span>{" "}
                to create responsive, user-friendly sites and apps that add
                value to your organization.
              </p>
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <BsDatabaseFillCheck className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-secondary font-medium">
                Empowering your backend for growth
              </h4>
              <p className="mt-2 text-lg text-base-content max-w-lg">
                Scalable backends that handle increasing traffic and data, using
                cutting-edge technologies and expert developers. We create a
                stable, secure, and adaptable system for your organization.
              </p>
            </div>
            <div className="grid justify-items-center lg:justify-items-start">
              <div className="p-2 w-fit bg-base-content rounded-lg">
                <BsCode className="text-4xl text-base-100" />
              </div>
              <h4 className="mt-4 text-2xl text-secondary font-medium">
                Front-end development that builds unforgettable brands
              </h4>
              <p className="mt-2 text-lg text-base-content max-w-lg">
                Frontend development is crucial for SEO and user experience. It
                combines coding, design, and usability to create intuitive web
                interfaces that delight users and add value to your
                organization.
              </p>
            </div>
          </div>
          <div>
            <Image
              width={500}
              height={500}
              src="/design.png"
              // className="object-cover h-full"
              alt="image"
            />
          </div>
        </div>
      </section>
      <Spacer size="lg" />
    </main>
  );
};

export default Services;
