import { About } from "@/components/Blocks/About";
import Career from "@/components/Blocks/Career";
import ExperienceSection from "@/components/Blocks/ExperienceSection";
import HeroSection from "@/components/Blocks/HeroSection";
import PortfolioSection from "@/components/Blocks/PortfolioSection";
import Footer from "@/components/layout/Footer";
import { NewNavbar } from "@/components/ui/NewNavbar";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-dark">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1C2541 1px, transparent 1px), 
              linear-gradient(to bottom, #1C2541 1px, transparent 1px)`,
            backgroundSize: "14px 24px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #1C2541 70%, transparent 100%)",
          }}
        ></div>
      </div>

      <NewNavbar />
      <div
        className="container relative z-10 mx-auto flex max-w-screen-xl flex-col"
        id="page-wrap"
      >
        <HeroSection />
        <ExperienceSection />
        <PortfolioSection />
        <Career />
        <About />
        <Footer />
      </div>
    </>
  );
}
