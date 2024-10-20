import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  logo: React.ReactNode;
  url: string;
};

const IconWithTooltip = ({ name, logo, url }: Props) => {
  return (
    <div className="relative flex items-center">
      <div className="group rounded p-2 transition-colors duration-300 hover:bg-gray-800">
        <Link href={url} target="_blank" aria-label={`visitanos en ${name}`}>
          {logo}
        </Link>
        <div className="absolute left-1/2 top-[120%] mb-2 -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {name}
        </div>
      </div>
    </div>
  );
};

export default IconWithTooltip;
