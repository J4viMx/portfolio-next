"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
} from "react-icons/si";

const cardsData = [
  {
    title: "React",
    time: "+2 años",
    logo: <SiReact size={40} />,
  },
  {
    title: "Next.js",
    time: "6 months",
    logo: <SiNextdotjs size={40} />,
  },
  {
    title: "Typescript",
    time: "+2 años",
    logo: <SiTypescript size={40} />,
  },
  {
    title: "Javascript",
    time: "+2 años",
    logo: <SiJavascript size={40} />,
  },
  {
    title: "Node.js",
    time: "+1 año",
    logo: <SiNodedotjs size={40} />,
  },
  {
    title: "Express.js",
    time: "+1 año",
    logo: <SiExpress size={40} />,
  },
  {
    title: "Tailwind",
    time: "+1 año",
    logo: <SiTailwindcss size={40} />,
  },
  {
    title: "Bootstrap",
    time: "+2 años",
    logo: <SiBootstrap size={40} />,
  },
  {
    title: "Material-ui",
    time: "+2 años",
    logo: <SiMui size={40} />,
  },
  {
    title: "Git",
    time: "+2 años",
    logo: <SiGithub size={40} />,
  },
];

gsap.registerPlugin(Draggable);

const SkillsComponent: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const dragDistancePerRotation = 3000;
    const radius = 520;
    const proxy = document.createElement("div");
    const progressWrap = gsap.utils.wrap(0, 1);
    let startProgress: number;

    gsap.set(cards, {
      transformOrigin: `50% 50% ${-radius}px`,
      transformStyle: "preserve-3d",
    });

    const spin = gsap.fromTo(
      cards,
      {
        rotationY: (i: number) => (i * 360) / cards.length,
      },
      {
        rotationY: "-=360",
        duration: 40,
        ease: "none",
        repeat: -1,
        onUpdate: updateCards,
      }
    );

    function updateCards() {
      cards.forEach((card) => {
        const rotationY = gsap.getProperty(card, "rotationY") as number;
        const normalizedRotation = ((rotationY % 360) + 360) % 360;

        let scale = 1;
        let opacity = 1;
        if (normalizedRotation > 90 && normalizedRotation < 270) {
          const factor = Math.abs(
            Math.sin(normalizedRotation * (Math.PI / 180))
          );
          scale = 0.8 + 0.2 * factor;
          opacity = 0.5 + 0.5 * factor;
        }
        gsap.set(card, {
          scale,
          opacity,
        });
      });
    }

    Draggable.create(proxy, {
      trigger: wrapperRef.current,
      type: "x",
      inertia: true,
      allowNativeTouchScrolling: true,
      onPress(this: any) {
        gsap.killTweensOf(spin);
        spin.timeScale(0);
        startProgress = spin.progress();
      },
      onDrag(this: any) {
        const p =
          startProgress + (this.startX - this.x) / dragDistancePerRotation;
        spin.progress(progressWrap(p));
        spin.pause();
      },
      onRelease(this: any) {
        spin.play();
        if (!this.tween || !this.tween.isActive()) {
          gsap.to(spin, { timeScale: 1, duration: 1 });
        }
      },
      onThrowComplete() {
        gsap.to(spin, { timeScale: 1, duration: 1 });
      },
    });

    updateCards();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto h-[200px] w-4/5  antialiased"
      style={{
        perspective: "5000px",
        transformStyle: "preserve-3d",
      }}
    >
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="absolute overflow-hidden"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative size-[65%]">
            <svg viewBox="0 0 100 100" className="size-full" fill="#0B132B">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                className="fill-light"
              />
              <polygon points="50 2 94 26 94 74 50 98 6 74 6 26" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-light">
              {card.logo}
              <p className="mt-2 text-lg font-bold text-light">{card.title}</p>
              <p className="text-sm font-semibold text-light-secondary">
                {card.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
