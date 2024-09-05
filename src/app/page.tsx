import ExperienceSection from "@/components/Blocks/ExperienceSection";
import HeroSection from "@/components/Blocks/HeroSection";
import PortfolioSection from "@/components/Blocks/PortfolioSection";
import ResumeSection from "@/components/Blocks/ResumeSection";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { SkillsSection } from "@/components/Blocks/SkillsSection";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-slate-950">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), 
              linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)`,
            backgroundSize: "14px 24px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <FloatingNav />
        <HeroSection />
        <PortfolioSection />
        <SkillsSection />
        <ExperienceSection />
        <ResumeSection />
      </div>
      {/* <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <ExperienceSection />
      <ResumeSection /> */}
    </>
  );
}
