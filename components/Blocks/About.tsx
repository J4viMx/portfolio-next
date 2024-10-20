import { ContactComponent } from "../ui/ContactComponent";
import ResumeSection from "../ui/ResumeSection";
import TitleSection from "../ui/TitleSection";
import { highlightKeywords } from "@/utils/highlightKeywords";

import keywords from "@/database/Keywords.json";

export const About = () => {
  return (
    <section id="about">
      <TitleSection text="Acerca de mí" />
      <div className=" p-8 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr,auto,1fr] gap-8">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="font-lato text-2xl font-bold text-light">
              Contáctame
            </h3>
            <p className="text-gray-400">
              {highlightKeywords(
                "Cada gran proyecto comienza con una simple conversación. Si tienes una idea en mente o simplemente quieres explorar nuevas posibilidades, estaré encantado de escuchar. Estoy a un mensaje de distancia.",
                keywords.about,
                "text-light-secondary"
              )}
            </p>
            <div className="mt-7 flex justify-center gap-4">
              <ContactComponent />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-px w-full bg-gray-700"></div>
              <span className="absolute bg-dark px-2 text-gray-500">O</span>
            </div>

            <div className="mt-auto">
              <h3 className="font-lato text-2xl font-bold">
                {highlightKeywords(
                  "Gracias por tu tiempo",
                  keywords.about,
                  "text-light"
                )}
              </h3>
              <p className="mt-2 text-gray-400">
                {highlightKeywords(
                  "Agradezco que te hayas tomado un momento para conocer más sobre lo que hago. Si algo de lo que viste te llamó la atención o te generó curiosidad, me encantaría escucharlo. ¡Gracias por tu visita!",
                  keywords.about,
                  "text-light-secondary"
                )}
              </p>
              <p className="mt-5 text-center text-8xl">👋🏻</p>
              <div className="mt-4 flex space-x-4"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="h-full w-px bg-gray-700"></div>
          </div>

          <div className=" p-6">
            <h2 className="font-lato mb-4 text-center text-xl font-bold text-light">
              Mi curriculum
            </h2>
            <ResumeSection />
          </div>
        </div>
      </div>
    </section>
  );
};
