import Image from "next/image";
import Link from "next/link";
import ReturnSvgArrow from "./ReturnSvgArrow";
import Cv from "@/database/CvLinks.json";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative">
      <Link target="_blank" href={Cv.es}>
        <div className="cursor-pointer">
          <div className="absolute right-[-50px] top-[-10px] z-50">
            <ReturnSvgArrow language={"es"} />
          </div>
          <div className="relative flex flex-col items-center justify-center bg-[url('/gradient-blob.svg')] bg-contain bg-top bg-no-repeat pt-2">
            <div className="group relative z-10 mb-24 hover:cursor-pointer">
              <div className="relative aspect-[3/4] max-w-[38rem] -rotate-6 rounded-3xl bg-black/20 p-6 backdrop-blur-sm transition-all duration-300 sm:max-w-[22rem] sm:rounded-2xl">
                <div className="relative h-full overflow-hidden rounded-3xl bg-white bg-[url('/spiral.svg')] bg-cover bg-[50%_0] bg-no-repeat p-8">
                  <div className="text-sm font-bold text-black">
                    Javier Juárez
                  </div>
                  <div className="text-xs font-bold text-black">
                    Frontend Developer
                  </div>
                  <hr className="my-4 border-0" />
                  <p className="relative max-h-56 overflow-hidden text-xs text-gray-700 after:absolute after:bottom-0 after:left-0 after:size-full after:bg-gradient-to-t after:from-white after:to-transparent after:to-50% after:content-['']">
                    Soy Desarrollador web con más de 2 años de experiencia,
                    especializado en Frontend con React y TypeScript. Tengo
                    conocimientos en desarrollo Backend con Node.js. Enfocado en
                    crear interfaces de usuario dinámicas y eficientes.
                    Comprometido con el aprendizaje continuo y la adopción de
                    las últimas tecnologías para ofrecer soluciones web
                    innovadoras y de alta calidad.
                  </p>
                  <div>
                    <p className="my-2 block text-xs text-gray-700">
                      javiersjuarezb@gmail.com
                    </p>
                    <span className="my-2 block text-xs text-gray-700">
                      México, CDMX
                    </span>
                  </div>
                  <hr className="my-4 border-0" />
                  <div className="text-xs font-bold text-black">
                    Experiencia
                  </div>
                  <p className="text-xs text-gray-700">
                    Frontend Developer | Vinneren <br />
                    Frontend Developer | Hello MX <br />
                  </p>
                </div>
              </div>
              <div className="absolute bottom-[-10%] left-1/2 z-[-1] aspect-[3/4] h-full w-[90%] max-w-[38rem] translate-y-[2%] rotate-6 rounded-3xl bg-black/20 p-6 backdrop-blur-sm transition-all duration-300 sm:max-w-[22rem] sm:rounded-2xl">
                <div className="relative h-full overflow-hidden rounded-3xl bg-[#1E1F22]">
                  <Image
                    src="/code-snippet.svg"
                    alt="Code Snippet"
                    width={330}
                    height={480}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
