import React from "react";
import HeroSection from "@/components/sections/heroSection";
import IntroSection from "@/components/sections/introSection";
import { Spacer } from "@/components/spacer";
import ServicesSection from "@/components/sections/servicesSection";
import SkillsSection from "@/components/sections/skillsSection";
import FeaturedBlogs from "@/components/sections/featuredBlogs";
import DiscordSection from "@/components/sections/discordSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <Spacer size="xs" />
      <SkillsSection />
      <Spacer size="base" />
      <IntroSection />
      <Spacer size="lg" />
      <ServicesSection />
      <Spacer size="base" />
      <FeaturedBlogs />
      <Spacer size="lg" />
      <DiscordSection />
      <Spacer size="lg" />
    </main>
  );
};

export default page;
