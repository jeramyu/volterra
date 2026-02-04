"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function InfoBlock({
  title,
  body,
  tone = "sage",
}: {
  title: string;
  body: string;
  tone?: "coral" | "butter" | "lavender" | "sage" | "sky" | "peach";
}) {
  const toneClass = {
    coral: "bg-pastel-coral",
    butter: "bg-pastel-butter",
    lavender: "bg-pastel-lavender",
    sage: "bg-pastel-sage",
    sky: "bg-pastel-sky",
    peach: "bg-pastel-peach",
  }[tone];
  return (
    <div className={cn("rounded-lg border border-slate-200 p-6", toneClass)}>
      <h3 className="text-lg font-semibold text-volterra-deep-green">{title}</h3>
      <p className="mt-3 text-sm text-slate-800">{body}</p>
    </div>
  );
}

export function CTARow({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  primaryVariant = "default",
  secondaryClassName,
}: {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  primaryVariant?: "default" | "teal" | "outline" | "ghost";
  secondaryClassName?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button asChild variant={primaryVariant}>
        <Link href={primaryHref}>{primaryLabel}</Link>
      </Button>
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className={cn("text-sm font-semibold text-slate-700", secondaryClassName)}
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  );
}

export function StatTile({
  value,
  label,
  dark = false,
  animateOnView = false,
  className,
  valueClassName,
  labelClassName,
}: {
  value: string;
  label: string;
  dark?: boolean;
  animateOnView?: boolean;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animateOnView && !prefersReducedMotion;
  const [hasViewed, setHasViewed] = useState(!shouldAnimate);

  useEffect(() => {
    if (!shouldAnimate || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      const fallbackTimer = window.setTimeout(() => {
        setHasViewed(true);
      }, 0);
      return () => window.clearTimeout(fallbackTimer);
    }

    const fallbackTimer = window.setTimeout(() => {
      setHasViewed(true);
    }, 800);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasViewed(true);
            window.clearTimeout(fallbackTimer);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [shouldAnimate]);

  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = match?.[2] ? Number(match[2]) : null;
  const suffix = match?.[3] ?? "";
  const formattedNumeric =
    numeric !== null
      ? numeric.toLocaleString(undefined, {
          minimumFractionDigits: String(numeric).includes(".") ? 1 : 0,
          maximumFractionDigits: String(numeric).includes(".") ? 1 : 0,
        })
      : "";

  return (
    <div
      ref={ref}
      className={cn("space-y-1", dark ? "text-white" : "text-slate-900", className)}
    >
      <p
        className={cn(
          "text-2xl font-semibold",
          dark ? "text-volterra-teal" : "text-volterra-deep-green",
          valueClassName
        )}
      >
        {prefix}
        {numeric !== null ? (
          shouldAnimate ? (
            hasViewed ? (
              <CountUp
                end={numeric}
                duration={4}
                separator=","
                decimals={String(numeric).includes(".") ? 1 : 0}
              />
            ) : (
              "0"
            )
          ) : (
            formattedNumeric
          )
        ) : (
          value
        )}
        {suffix}
      </p>
      <p
        className={cn(
          "text-xs uppercase tracking-[0.15em]",
          dark ? "text-white/80" : "text-slate-500",
          labelClassName
        )}
      >
        {label}
      </p>
    </div>
  );
}
