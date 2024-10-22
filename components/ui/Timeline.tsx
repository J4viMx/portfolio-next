"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TitleSection from "./TitleSection";
import experience from "../../database/Experience.json";
import IconComponent from "@/utils/IconComponent";
import { highlightKeywords } from "@/utils/highlightKeywords";
import keywords from "@/database/Keywords.json";

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <TitleSection text="Donde he trabajado" />

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {experience.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex size-10 items-center justify-center rounded-full bg-dark-secondary md:left-3">
                <div className="size-4 rounded-full border  border-light bg-light p-2" />
              </div>
              <h3 className="hidden text-xl font-bold text-neutral-300 md:block md:pl-20 md:text-3xl ">
                {item.date}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-300 md:hidden">
                {item.date}
              </h3>
              <div className="rounded-xl bg-dark-secondary p-4">
                <p className="font-lato mb-8 text-4xl font-normal text-light">
                  {item.name}
                  <span className="text-light"> - {item.company}</span>
                </p>
                <div className="mb-4 flex flex-wrap justify-center gap-3 md:justify-end">
                  <div className="rounded-xl bg-light-secondary p-2 font-semibold text-dark">
                    {item.ubication}
                  </div>
                  <div className="rounded-xl bg-light-secondary p-2 font-semibold text-dark">
                    {item.workModality}
                  </div>
                  <div className="rounded-xl bg-light-secondary p-2 font-semibold text-dark">
                    {item.schedule}
                  </div>
                </div>
                {item.activities.map((activity) => (
                  <p
                    className="mb-8 text-xl font-normal text-white"
                    key={activity}
                  >
                    {/* {activity} */}
                    {highlightKeywords(
                      activity,
                      keywords.experience,
                      "text-light-secondary"
                    )}
                  </p>
                ))}

                <div className="flex flex-wrap justify-center gap-3">
                  {item.skills.map((skill) => (
                    <div
                      className="flex items-center gap-2 rounded-xl bg-light p-2 text-dark-secondary"
                      key={skill}
                    >
                      <span className="text-neutral-primary">
                        <IconComponent iconName={skill} size={16} />
                      </span>
                      <span className="capitalize">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0%  via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] rounded-full bg-gradient-to-t from-neutral-primary from-0% via-light-secondary via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
