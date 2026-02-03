"use client";

import { useMemo, useState } from "react";

import { ListingCard } from "@/components/listing-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { listings } from "@/data/listings";

const quarterOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 } as const;

type QuarterKey = keyof typeof quarterOrder;

function quarterIndex(quarter: QuarterKey, year: number) {
  return year * 4 + quarterOrder[quarter];
}

function quarterLabel(value: number) {
  const year = Math.floor(value / 4);
  const quarterValue = value % 4 || 4;
  const quarterLabelValue = Object.entries(quarterOrder).find(
    ([, quarterIndexValue]) => quarterIndexValue === quarterValue
  )?.[0];
  return `${quarterLabelValue} ${year}`;
}

export function ListingsGrid() {
  const [search, setSearch] = useState("");
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [maxQuarter, setMaxQuarter] = useState<number>(() => {
    const latest = Math.max(...listings.map((item) => quarterIndex(item.quarter as QuarterKey, item.year)));
    return latest;
  });
  const [minMw, setMinMw] = useState<number>(20);

  const stateOptions = useMemo(() => {
    return Array.from(new Set(listings.map((item) => item.state))).sort();
  }, []);

  const quarterOptions = useMemo(() => {
    return Array.from(
      new Set(listings.map((item) => quarterIndex(item.quarter as QuarterKey, item.year)))
    ).sort((a, b) => a - b);
  }, []);

  const minQuarterValue = quarterOptions[0];
  const maxQuarterValue = quarterOptions[quarterOptions.length - 1];

  const maxQuarterLabel = useMemo(() => {
    return quarterLabel(maxQuarter);
  }, [maxQuarter]);

  const minQuarterLabel = useMemo(() => quarterLabel(minQuarterValue), [minQuarterValue]);
  const maxQuarterLimitLabel = useMemo(() => quarterLabel(maxQuarterValue), [maxQuarterValue]);
  const quarterPercent =
    ((maxQuarter - minQuarterValue) / (maxQuarterValue - minQuarterValue || 1)) * 100;
  const mwPercent = ((minMw - 20) / (70 - 20)) * 100;
  const hasActiveFilters =
    search.trim().length > 0 ||
    selectedStates.length > 0 ||
    maxQuarter !== maxQuarterValue ||
    minMw !== 20;

  const resetFilters = () => {
    setSearch("");
    setSelectedStates([]);
    setMaxQuarter(maxQuarterValue);
    setMinMw(20);
  };

  const filtered = listings.filter((listing) => {
    const matchesSearch = `${listing.city} ${listing.state}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesState = selectedStates.length === 0 || selectedStates.includes(listing.state);
    const matchesQuarter =
      quarterIndex(listing.quarter as QuarterKey, listing.year) <= maxQuarter;
    const matchesMw = listing.mwAvailable >= minMw;
    return matchesSearch && matchesState && matchesQuarter && matchesMw;
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Search
              </p>
              <label htmlFor="listing-search" className="sr-only">
                Search listings by city or state
              </label>
              <Input
                id="listing-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by city or state"
              />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                State
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stateOptions.map((state) => (
                  <label
                    key={state}
                    className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700"
                  >
                    <input
                      type="checkbox"
                      checked={selectedStates.includes(state)}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelectedStates((prev) => [...prev, state]);
                        } else {
                          setSelectedStates((prev) => prev.filter((item) => item !== state));
                        }
                      }}
                      className="h-4 w-4 accent-volterra-teal"
                    />
                    {state}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span>Power Date</span>
                <span className="normal-case text-xs text-slate-600">Up to {maxQuarterLabel}</span>
              </div>
              <input
                type="range"
                min={quarterOptions[0]}
                max={quarterOptions[quarterOptions.length - 1]}
                value={maxQuarter}
                onChange={(event) => setMaxQuarter(Number(event.target.value))}
                step={1}
                list="quarter-steps"
                aria-label="Latest acceptable power date"
                className="volterra-range w-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #27ABAE 0%, #27ABAE ${quarterPercent}%, #CBD5E1 ${quarterPercent}%, #CBD5E1 100%)`,
                }}
              />
              <datalist id="quarter-steps">
                {quarterOptions.map((value) => (
                  <option key={value} value={value} />
                ))}
              </datalist>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{minQuarterLabel}</span>
                <span>{maxQuarterLimitLabel}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span>Total MWs</span>
                <span className="normal-case text-xs text-slate-600">{minMw}MW minimum</span>
              </div>
              <input
                type="range"
                min={20}
                max={70}
                value={minMw}
                onChange={(event) => setMinMw(Number(event.target.value))}
                step={5}
                list="mw-steps"
                aria-label="Minimum total megawatts available"
                className="volterra-range w-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #27ABAE 0%, #27ABAE ${mwPercent}%, #CBD5E1 ${mwPercent}%, #CBD5E1 100%)`,
                }}
              />
              <datalist id="mw-steps">
                {[20, 30, 40, 50, 60, 70].map((value) => (
                  <option key={value} value={value} />
                ))}
              </datalist>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>20MW</span>
                <span>70MW</span>
              </div>
            </div>
          </div>
        </div>
        {hasActiveFilters && (
          <div className="flex justify-end">
            <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            No listings match your current filters.
          </p>
          <div className="mt-4 flex justify-center">
            <Button type="button" variant="outline" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing, index) => (
            <ListingCard key={listing.id} listing={listing} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
