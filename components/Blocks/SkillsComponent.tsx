"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Skills from "@/database/Skills.json";
import IconComponent from "@/utils/IconComponent";

gsap.registerPlugin(Draggable);

const SkillsComponent: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [iconSize, setIconSize] = useState(20);

  useEffect(() => {
    const cards = cardsRef.current;
    const dragDistancePerRotation = 3000;
    const radius = window.matchMedia("(min-width: 1024px)").matches
      ? 520
      : window.matchMedia("(min-width: 768px)").matches
        ? 350
        : 180;
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
  }, [iconSize]);

  useEffect(() => {
    // Función para actualizar el tamaño del icono basado en los breakpoints
    const updateIconSize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIconSize(40); // Tamaño para pantallas grandes (PC)
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setIconSize(30); // Tamaño para tablet
      } else {
        setIconSize(20); // Tamaño para móvil
      }
    };

    // Llamar la función inmediatamente para establecer el tamaño inicial
    updateIconSize();

    // Añadir un event listener para escuchar cambios en el tamaño de la ventana
    window.addEventListener("resize", updateIconSize);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto h-[200px] w-4/5 antialiased"
      style={{
        perspective: "5000px",
        transformStyle: "preserve-3d",
      }}
    >
      {Skills.map((card, index) => (
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
              <IconComponent iconName={card.logo} size={iconSize} />
              <p className="mt-2 text-sm font-bold text-light md:text-lg">
                {card.title}
              </p>
              <p className="text-xs font-semibold text-light-secondary md:text-sm">
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
