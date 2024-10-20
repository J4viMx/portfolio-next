"use client";
import { elastic as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import menu from "@/database/menu.json";
import { cn } from "@/lib/utils";
import IconComponent from "@/utils/IconComponent";

export const NewNavbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.id !== "" && setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div id="outer-container" className="block lg:hidden">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          {menu.map((navItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                ` items-center justify-between gap-4 hover:text-light ${activeSection === navItem.id ? "text-light" : "text-neutral-50"}`
              )}
            >
              <span>
                <IconComponent iconName={navItem.icon} size={20} />
              </span>
              <span className="text-xl">{navItem.name}</span>
            </Link>
          ))}
        </Menu>
      </div>
      <div className=" hidden lg:block">
        <div className="flex justify-end">
          <div
            className={`fixed inset-x-0  top-3 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-7 rounded-full p-4 pb-3 pl-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${isScrolled ? "bg-gradient-to-t from-neutral-primary to-transparent text-white" : ""}`}
          >
            {menu.map((navItem, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  `relative text-neutral-50 items-center flex space-x-1 gap-2 pb-2 hover:text-light ${activeSection === navItem.id ? "text-light border-b border-light" : "text-neutral-50"} `
                )}
              >
                <span className="block">
                  <IconComponent iconName={navItem.icon} size={20} />
                </span>
                <span className="hidden text-base sm:block">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="relative mt-5 flex items-center rounded-full border border-white/[0.2] bg-transparent px-3 py-1.5">
            <div className="relative mr-2 flex size-4 items-center justify-center">
              <div className="absolute size-full animate-ping rounded-full bg-green-500 opacity-75"></div>
              <div className="relative size-3 rounded-full bg-green-500"></div>
            </div>

            <span className="text-white">Abierto a ofertas</span>
          </div>
        </div>
      </div>
    </header>
  );
};
