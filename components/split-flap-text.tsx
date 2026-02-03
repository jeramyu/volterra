"use client";

import { useEffect, useMemo, useState } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";

export function SplitFlapText({ words, interval = 2000 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const maxWordLength = useMemo(
    () => Math.max(...words.map((word) => word.length)),
    [words]
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval, prefersReducedMotion]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span
        className="inline-flex items-baseline gap-1 whitespace-nowrap text-volterra-deep-green"
        aria-hidden="true"
      >
        <span
          className="text-sm font-semibold tracking-wide text-center"
          style={{ minWidth: `${maxWordLength}ch` }}
        >
          {prefersReducedMotion ? (
            words[0]
          ) : (
            <span key={words[index]} className="inline-block min-w-[6ch] animate-flip">
              {words[index]}
            </span>
          )}
        </span>
      </span>
    </>
  );
}
