"use client";
import React, { useEffect } from "react";

const StarsBackground: React.FC = () => {
  const createStars = (
    container: HTMLElement,
    numStars: number,
    size: number
  ) => {
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 50 + 50}s`;
      star.style.animationDelay = `${Math.random() * 50}s`;
      container.appendChild(star);
    }
  };

  useEffect(() => {
    const stars = document.querySelector(".stars") as HTMLElement;
    const stars2 = document.querySelector(".stars2") as HTMLElement;
    const stars3 = document.querySelector(".stars3") as HTMLElement;

    createStars(stars, 100, 1);
    createStars(stars2, 100, 2);
    createStars(stars3, 100, 3);

    const starsArray = document.querySelectorAll<HTMLDivElement>(
      ".stars div, .stars2 div, .stars3 div"
    );
    starsArray.forEach((star) => {
      star.addEventListener("animationiteration", () => {
        star.style.top = "100%";
        star.style.left = `${Math.random() * 100}%`;
      });
    });
  }, []);

  return (
    <div className="stars-background">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
    </div>
  );
};

export default StarsBackground;
