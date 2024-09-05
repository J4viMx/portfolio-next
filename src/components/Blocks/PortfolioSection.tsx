"use client";

import React, { useRef } from "react";

import Image from "next/image";

import Works from "@/database/Works.json";

export default function SelectedWorks() {
  const galleryContainer = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);

  return (
    <section id={"works"} ref={container}>
      <div ref={galleryContainer} className="flex w-fit gap-5">
        {Works.map((work, index) => {
          return (
            <div className="h-96 w-[60vw]" key={index}>
              {/* <CardGradient> */}
              <div className="rounded-xl bg-[#131923]/50">
                <div className="flex flex-col justify-center py-5">
                  <h3 className="mt-2 text-center text-4xl font-semibold">
                    {work.title}
                  </h3>
                  <span className=" py-2 text-center font-light text-slate-300">
                    Fecha de creación: {work.date}
                  </span>
                </div>
                <div className="flex justify-center">
                  <Image
                    className="rounded-2xl"
                    src={work.image}
                    alt={work.title}
                    width={960}
                    height={720}
                    loading={"lazy"}
                  />
                </div>
              </div>
              {/* </CardGradient> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
