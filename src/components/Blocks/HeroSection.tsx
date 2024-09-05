import { Sparkles } from "../ui/Sparkles";
/* import { Spotlight } from "../ui/Spotlight"; */

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="container mx-auto flex h-screen max-w-screen-lg">
        <div className="flex w-full flex-col justify-center">
          {/* <Spotlight /> */}
          <div className="bg-gradient-to-br from-white to-sky-700 bg-clip-text text-transparent">
            <h1 className="block text-6xl font-semibold ">Soy Javier Juárez</h1>
            <h2 className="mt-5 text-left text-4xl font-medium">
              Soy Desarrollador Web
            </h2>
          </div>
          <p className="mt-10 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea
            voluptatum corporis. Mollitia ad, facilis unde voluptatem officiis
            voluptatibus adipisci, porro eos aut illo voluptatum neque
            laboriosam elit.{" "}
            <span className="text-sky-500">Ullam earum debitis</span> itaque
            vitae vel. Beatae delectus laborum nisi suscipit id, omnis quae
            minima repellendus impedit, enim aliquid, asperiores{" "}
            <span className="text-sky-500">Ullam earum debitis</span>?
          </p>
          {/* <div className="flex justify-center pt-20">
            <Button />
          </div> */}
        </div>
      </div>
      <div className="absolute bottom-0 -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 size-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  );
}
