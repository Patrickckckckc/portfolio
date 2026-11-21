"use client";

import { useEffect, useRef } from "react";

/** Muted, looping and inline. Under reduced motion only the poster is shown. */
export function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) video.pause();
      else void video.play().catch(() => {});
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[#e9e9e9]">
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/background-poster.webp"
        className="block size-full object-cover object-[36%_55%]"
      >
        <source src="/media/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
