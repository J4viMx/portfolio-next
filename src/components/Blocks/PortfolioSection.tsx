"use client";

import React, { useRef } from "react";

export default function SelectedWorks() {
  const galleryContainer = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);

  return (
    <section id={"works"} ref={container}>
      <div ref={galleryContainer} className="flex w-fit gap-5"></div>
    </section>
  );
}
