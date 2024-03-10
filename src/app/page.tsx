import ExperienceSection from "@/components/Blocks/ExperienceSection";
import HeroSection from "@/components/Blocks/HeroSection";
import PortfolioSection from "@/components/Blocks/PortfolioSection";
import ResumeSection from "@/components/Blocks/ResumeSection";
import { SkillsSection } from "@/components/Blocks/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <ExperienceSection />
      <ResumeSection />
    </>
  );
}
