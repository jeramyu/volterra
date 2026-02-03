"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { useReducedMotion } from "@/lib/use-reduced-motion";

const logos = [
  { src: "/logos/AWS-black.svg", alt: "AWS" },
  { src: "/logos/Apple-black.svg", alt: "Apple" },
  { src: "/logos/Cooley-black.svg", alt: "Cooley" },
  { src: "/logos/CoreScientific-black.svg", alt: "Core Scientific" },
  { src: "/logos/CoreWeave-black.svg", alt: "CoreWeave" },
  { src: "/logos/CyrusOne-black.svg", alt: "CyrusOne" },
  { src: "/logos/DigitalRealty-black.svg", alt: "Digital Realty" },
  { src: "/logos/Equinix-black.svg", alt: "Equinix" },
  { src: "/logos/GoogleCloud-black.svg", alt: "Google Cloud" },
  { src: "/logos/Lambda-black.svg", alt: "Lambda" },
  { src: "/logos/Meta-black.svg", alt: "Meta" },
  { src: "/logos/Microsoft-black.svg", alt: "Microsoft" },
  { src: "/logos/NVidia-black.svg", alt: "NVIDIA" },
  { src: "/logos/Nebius-black.svg", alt: "Nebius" },
  { src: "/logos/OpenAI-black.svg", alt: "OpenAI" },
  { src: "/logos/Oracle-black.svg", alt: "Oracle" },
  { src: "/logos/QTS-black.svg", alt: "QTS" },
  { src: "/logos/Terawulf-black.svg", alt: "TeraWulf" },
];

export function LogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });
  const rafRef = useRef<number | null>(null);
  const pauseRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!emblaApi) return;
    if (prefersReducedMotion) {
      pauseRef.current = true;
      return;
    }
    const engine = emblaApi.internalEngine();
    let lastTime = 0;

    const tick = (time: number) => {
      if (!pauseRef.current) {
        const delta = lastTime ? time - lastTime : 0;
        lastTime = time;
        const distance = -((delta / 1000) * 28);
        engine.scrollBody.useDuration(0);
        engine.scrollTo.distance(distance, false);
      } else {
        lastTime = time;
      }
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    const handlePointerDown = () => {
      pauseRef.current = true;
    };
    const handlePointerUp = () => {
      pauseRef.current = false;
    };

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi, prefersReducedMotion]);

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client logos"
      aria-live="off"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
      onFocusCapture={() => {
        pauseRef.current = true;
      }}
      onBlurCapture={() => {
        pauseRef.current = false;
      }}
    >
      <div className="-ml-6 flex">
        {logos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="ml-6 flex h-16 min-w-[160px] flex-none items-center justify-center rounded-md border border-slate-200 bg-white p-3 shadow-soft"
          >
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
