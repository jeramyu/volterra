"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const steps = [
  "Site Selection",
  "Power Strategy",
  "PQDP",
  "Power Queue Management (PQM)",
  "Leasing Strategy",
  "Transaction Advisory",
];

export function EngagementSequenceCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    const node = cardRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const fallbackTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          window.clearTimeout(fallbackTimer);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const visibilityClass = prefersReducedMotion
    ? "opacity-100"
    : isVisible
      ? "animate-fade-up"
      : "opacity-0";

  return (
    <Card
      ref={cardRef}
      className="relative space-y-4 border border-slate-200/80 bg-white p-6 shadow-soft md:col-span-2"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        How Engagements Typically Sequence
      </p>
      <ul className="flex flex-wrap items-center gap-2" role="list">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 ${visibilityClass}`}
              style={{
                animationDelay: `${index * 160}ms`,
                animationDuration: "900ms",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-volterra-teal" aria-hidden="true" />
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight
                className={`h-3.5 w-3.5 text-volterra-deep-green/60 ${visibilityClass}`}
                style={{
                  animationDelay: `${index * 160 + 90}ms`,
                  animationDuration: "900ms",
                }}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
