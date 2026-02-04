"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Plug, Ruler, Factory, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export interface ListingItem {
  id: string;
  image: string;
  city: string;
  state: string;
  mwAvailable: number;
  quarter: string;
  year: number;
  powerMW: number;
  acres: number;
  utility: string;
  gasMiles: number;
  pdf: string;
}

export function ListingCard({
  listing,
  index = 0,
}: {
  listing: ListingItem;
  index?: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = cardRef.current;
    if (!node) return;
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasViewed(true);
          observer.disconnect();
          window.clearTimeout(fallbackTimer);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const visibilityClass = prefersReducedMotion
    ? "opacity-100"
    : hasViewed
      ? "animate-fade-up"
      : "opacity-0";

  return (
    <Card
      ref={cardRef}
      className={`overflow-hidden ${visibilityClass}`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="relative h-56 w-full">
        <Image
          src={listing.image}
          alt={`Aerial view of ${listing.city}, ${listing.state} site`}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="space-y-4 pt-4">
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-sm font-semibold text-volterra-deep-green">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {listing.city}, {listing.state}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center rounded-full bg-volterra-teal/10 px-2.5 py-1 text-xs font-semibold text-volterra-deep-green">
              {listing.mwAvailable}MW Available · {listing.quarter} {listing.year}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Plug className="h-4 w-4" aria-hidden="true" />
            Power {listing.powerMW}MW
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4" aria-hidden="true" />
            Acres {listing.acres}
          </div>
          <div className="flex items-center gap-2">
            <Factory className="h-4 w-4" aria-hidden="true" />
            Utility {listing.utility}
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4" aria-hidden="true" />
            Gas {listing.gasMiles} Miles
          </div>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link
            href={listing.pdf}
            aria-label={`View flyer for ${listing.city}, ${listing.state}`}
          >
            View Flyer
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
