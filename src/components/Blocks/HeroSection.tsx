import { Button } from "../ui/Button";
import { Spotlight } from "../ui/Spotlight";
import StarsBackground from "../ui/StarsBackground";

export default function HeroSection() {
  return (
    <section className="wrapper flex h-screen ">
      <StarsBackground />
      <div className="flex w-full flex-col items-center justify-center">
        <Spotlight />
        <div className="bg-gradient-to-br from-white to-sky-700 bg-clip-text text-transparent">
          <h1 className="block text-9xl font-semibold ">Soy Javier Juárez</h1>
          <h2 className="mt-10 text-left text-7xl font-medium">
            Frontend Developer
          </h2>
        </div>
        <div className="flex justify-center pt-20">
          <Button />
        </div>
      </div>
    </section>
  );
}
