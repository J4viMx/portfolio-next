import { Sparkles } from "../ui/Sparkles";
/* import { Spotlight } from "../ui/Spotlight"; */
import Hero from "@/database/Hero.json";
import { highlightKeywords } from "@/utils/highlightKeywords";
import { ContactComponent } from "../ui/ContactComponent";
import keywords from "@/database/Keywords.json";

export default function HeroSection() {
  return (
    <section className="relative h-screen" id="hero">
      <div className="container mx-auto flex h-screen max-w-screen-lg">
        <div className="flex w-full flex-col justify-center">
          <div className=" bg-clip-text text-white">
            <h1 className="font-lato block text-center text-5xl font-bold text-light-secondary md:text-left md:text-6xl">
              {Hero.name}
            </h1>
            <h2 className="font-lato mt-5 text-center text-3xl font-medium text-white md:text-left md:text-4xl">
              {Hero.job}
            </h2>
          </div>
          <p className="mt-10 p-2 text-center text-xl md:p-0 md:text-left md:text-2xl">
            {highlightKeywords(
              Hero.presentationText,
              keywords.hero,
              "text-light-secondary"
            )}
          </p>
          <div className="mt-7 flex justify-center gap-4 md:justify-start">
            <ContactComponent />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 -z-10 -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#5BC0BE,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 size-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  );
}
