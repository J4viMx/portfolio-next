import { highlightKeywords } from "@/utils/highlightKeywords";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="relative">
      <div className="ml-4 grow border-t border-gray-500"></div>
      <footer className=" px-6 py-10 text-gray-300">
        <div className="container mx-auto flex items-center justify-between text-sm font-semibold">
          <div>
            {currentYear}{" "}
            {highlightKeywords(
              "© Construido por Javier Juarez. Todos los derechos reservados.",
              ["Javier Juarez"],
              "text-light-secondary"
            )}
          </div>
          <div>Usando Next.js y Tailwind</div>
        </div>
      </footer>
    </section>
  );
}
