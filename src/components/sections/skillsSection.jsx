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
  SiNotion,
  SiAdobephotoshop,
  SiAdobeillustrator,
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
        direction="right"
        gradient={false}
        speed={20}
        pauseOnClick={true}
      >
        <SiWix />
        <SiAdobephotoshop />
        <SiNotion />
        <SiInstagram />
        <SiAdobepremierepro />
        <SiYoutube />
        <SiAdobeaftereffects />
        <SiWebflow />
        <SiFigma />
        <SiCanva />
        <SiWix />
        <SiAdobephotoshop />
        <SiNotion />
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
        speed={20}
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
    <div className="relative min-h-screen grid content-center gap-16 text-white text-8xl overflow-hidden">
      <ScrollComponent />
      <ScrollComponent />
      {/* <div className="absolute right-0 left-0 mx-auto mr-auto z-10 w-[1000px] h-[1000px] bg-base-200  rounded-full" /> */}
      <Image
        width={800}
        height={900}
        src="/anime1.png"
        className="absolute right-0 left-0 mx-auto mr-auto md:bg-base-200 rounded-full z-20"
        alt="AnimeImg of Drawing: Saikyou Mangaka Wa Oekaki Skill De Isekai Musou Suru!"
      />
    </div>
  );
};

export default SkillsSection;
