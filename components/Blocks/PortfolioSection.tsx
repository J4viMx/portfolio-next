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
    <section id="works" className="mx-auto min-h-screen max-w-screen-2xl">
      <TitleSection text="Mis trabajos" />
      {Works.map((work, index) => {
        return (
          <div
            className="my-5 flex h-[470px] rounded-xl border border-slate-600 bg-dark-secondary/50 pr-3"
            key={index}
          >
            <div className="w-1/2">
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
            <div className="h-full w-1/2">
              <div className="flex h-full flex-col justify-around py-5">
                <div>
                  <div className="flex items-center gap-4 ">
                    <h3 className=" font-lato inline-block text-center text-4xl font-bold text-light">
                      {work.title}
                    </h3>
                    <div className="flex gap-3 border-l-2 border-l-white pl-2">
                      <Link href={work.git} target="_blank">
                        <IconComponent iconName={"github"} size={30} />
                      </Link>
                      <Link href={work.url} target="_blank">
                        <IconComponent iconName={"link"} size={30} />
                      </Link>
                    </div>
                  </div>
                  <span className=" py-2 text-xl font-semibold text-slate-300">
                    Fecha de creación: {work.date}
                  </span>
                </div>
                <div>
                  <p className="mt-3">
                    {highlightKeywords(
                      work.description,
                      keywords.portfolio,
                      "text-light-secondary"
                    )}
                  </p>
                </div>
                <div className="mt-5 flex justify-center gap-2">
                  {work.stack.map((skill: string) => {
                    return (
                      <div
                        className="flex items-center gap-2 rounded-xl bg-light p-2 text-dark-secondary"
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
