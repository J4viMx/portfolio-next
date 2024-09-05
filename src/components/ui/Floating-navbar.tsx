"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as eva from "eva-icons";
import menuProps from "@/database/menu.json";

export const FloatingNav = () => {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div className="fixed inset-x-0  top-3 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black">
      {menuProps.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block">
            <i
              data-eva={navItem.icon}
              data-eva-fill="#fff"
              className="size-5"
            />
          </span>
          <span className="hidden text-sm sm:block">{navItem.name}</span>
        </Link>
      ))}
      <button className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
        <span>Login</span>
        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
      </button>
    </div>
  );
};
