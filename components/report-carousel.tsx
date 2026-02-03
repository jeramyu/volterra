"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  actionLabel: string;
  actionHref: string;
  actionFullReload?: boolean;
}

export function ReportCarousel({ items }: { items: CarouselItem[] }) {
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
        const distance = -((delta / 1000) * 32);
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

  const loopItems = [...items, ...items];

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Reports carousel"
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
        {loopItems.map((item, index) => {
          const isDuplicate = index >= items.length;
          return (
            <Card
              key={`${item.title}-${index}`}
              className="ml-6 flex h-[380px] min-w-[280px] max-w-[280px] flex-col overflow-hidden"
              aria-hidden={isDuplicate}
            >
              <div className="flex flex-[3] items-center justify-center bg-white p-4">
                <div className="relative h-full w-full max-w-[250px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="250px"
                  />
                </div>
              </div>
              <CardContent className="flex flex-[1] flex-col p-4">
                <h3 className="line-clamp-2 text-center text-base font-semibold leading-snug text-volterra-deep-green">
                  {item.title}
                </h3>
                <Button asChild variant="outline" size="sm" className="mt-auto">
                  {item.actionFullReload ? (
                    <a
                      href={item.actionHref}
                      aria-label={`${item.actionLabel} for ${item.title}`}
                      tabIndex={isDuplicate ? -1 : undefined}
                      aria-hidden={isDuplicate}
                    >
                      {item.actionLabel}
                    </a>
                  ) : (
                    <Link
                      href={item.actionHref}
                      aria-label={`${item.actionLabel} for ${item.title}`}
                      tabIndex={isDuplicate ? -1 : undefined}
                      aria-hidden={isDuplicate}
                    >
                      {item.actionLabel}
                    </Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
