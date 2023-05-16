import React from "react";
import HeroSection from "@/components/sections/heroSection";
import IntroSection from "@/components/sections/introSection";
import { Spacer } from "@/components/spacer";
import ServicesSection from "@/components/sections/servicesSection";
import BlogSection from "@/components/sections/blogSection";
import SkillsSection from "@/components/sections/skillsSection";

const page = () => {
  return (
    <main>
      <HeroSection />
      <Spacer size="xs" />
      <SkillsSection />
      <Spacer size="xs" />
      <IntroSection />
      <Spacer size="lg" />
      <ServicesSection />
      <Spacer size="base" />
      <BlogSection />
      <Spacer size="lg" />
    </main>
  );
};

export default page;
