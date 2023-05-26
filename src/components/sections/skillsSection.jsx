import Image from "next/image";
import MarqueeComponent from "../marquee";
import { MdCss } from "react-icons/md";
import {
  SiExpress,
  SiCss3,
  SiMongodb,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWebpack,
  SiStrapi,
  SiPostgresql,
  SiWix,
  SiWebflow,
  SiMysql,
  SiYoutube,
  SiInstagram,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva,
  SiSupabase,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const ScrollComponent = () => {
  return (
    <>
      <MarqueeComponent
        direction="left"
        gradient={false}
        speed={20}
        pauseOnClick={true}
      >
        <SiWix />
        <SiAdobephotoshop />
        <SiInstagram />
        <SiAdobepremierepro />
        <SiYoutube />
        <SiAdobeaftereffects />
        <SiWebflow />
        <SiFigma />
        <SiCanva />
        <SiWix />
        <SiAdobephotoshop />
        <SiInstagram />
        <SiAdobepremierepro />
        <SiYoutube />
        <SiAdobeaftereffects />
        <SiWebflow />
        <SiFigma />
        <SiCanva />
      </MarqueeComponent>

      <MarqueeComponent
        direction="left"
        gradient={false}
        speed={30}
        pauseOnClick={true}
      >
        <SiHtml5 />
        <SiTailwindcss />
        <MdCss />
        <SiCss3 />
        <SiNodedotjs />
        <SiJavascript />
        <SiMongodb />
        <SiExpress />
        <SiReact />
        <SiNextdotjs />
        <SiStrapi />
        <SiPostgresql />
        <SiWebpack />
        <SiSupabase />
        <SiVercel />
        <SiGithub />
        <SiMysql />
      </MarqueeComponent>
    </>
  );
};

const SkillsSection = () => {
  return (
    <div className="bg-[url('/background2.svg')] bg-cover relative min-h-screen grid content-center gap-10 md:gap-16 text-white text-7xl">
      <ScrollComponent />
      <ScrollComponent />
      <div className="hidden lg:block opacity-95 absolute top-0 bottom-0 right-0 left-0 mx-auto mr-auto my-auto z-10 w-[960px] h-[960px] bg-gradient-radial from-base-300 via-base-200 blur-lg rounded-full" />
      <Image
        width={600}
        height={600}
        src="/anime1.png"
        loading="lazy"
        className="w-auto h-auto absolute top-0 bottom-0 right-0 left-0 mx-auto mr-auto my-auto rounded-full z-20 hidden lg:block"
        alt="AnimeImg of Drawing: Saikyou Mangaka Wa Oekaki Skill De Isekai Musou Suru!"
      />
    </div>
  );
};

export default SkillsSection;
