"use client";

import React from "react";

import Image from "next/image";

import Works from "@/database/works.json";
import { ContainerScroll } from "../ui/ContainerScroll";

import TitleSection from "../ui/TitleSection";
import Link from "next/link";
import IconComponent from "@/utils/IconComponent";
import { highlightKeywords } from "@/utils/highlightKeywords";
import keywords from "@/database/Keywords.json";

export default function PortfolioSection() {
  return (
    <section
      id="works"
      className="mx-auto min-h-screen max-w-screen-2xl px-2 md:px-0"
    >
      <TitleSection text="Mis trabajos" />
      {Works.map((work, index) => {
        return (
          <div
            className="my-5 flex flex-col rounded-xl border border-slate-600 bg-dark-secondary/50 pr-3 md:flex-row"
            key={index}
          >
            <div className="w-full md:w-1/2">
              <ContainerScroll>
                <Image
                  className="w-full rounded-2xl"
                  src={work.image}
                  alt={work.title}
                  width={960}
                  height={720}
                  loading={"lazy"}
                />
              </ContainerScroll>
            </div>
            <div className="size-full text-white md:w-1/2">
              <div className="flex h-full min-h-[470px] flex-col justify-around py-5">
                <div>
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    <h3 className=" font-lato inline-block text-center text-2xl font-bold text-light md:text-4xl">
                      {work.title}
                    </h3>
                    <div className="flex gap-3 border-l-0 border-l-white pl-0 md:border-l-2 md:pl-2">
                      <Link href={work.git} target="_blank">
                        <IconComponent iconName={"github"} size={24} />
                      </Link>
                      <Link href={work.url} target="_blank">
                        <IconComponent iconName={"link"} size={24} />
                      </Link>
                    </div>
                  </div>
                  <p className="py-2 text-center text-lg font-semibold text-slate-300 md:text-left md:text-xl">
                    Fecha de creación: {work.date}
                  </p>
                </div>
                <div>
                  <p className="mt-3 px-2 text-center text-sm md:px-0 md:text-left md:text-base">
                    {highlightKeywords(
                      work.description,
                      keywords.portfolio,
                      "text-light-secondary"
                    )}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {work.stack.map((skill: string) => {
                    return (
                      <div
                        className="flex items-center gap-2 rounded-xl bg-light p-2 text-xs text-dark-secondary md:text-sm"
                        key={skill}
                      >
                        <span>
                          <IconComponent iconName={skill} size={16} />
                        </span>
                        <span className="capitalize">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
