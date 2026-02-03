"use client";

import { useMemo, useState } from "react";
import { parseISO } from "date-fns";
import { ChevronDown } from "lucide-react";

import reportsData from "@/data/reports.json";
import { ReportCard, ReportItem } from "@/components/report-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const reports = reportsData as ReportItem[];

function MultiSelectDropdown({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <details className="group relative">
        <summary className="summary-reset flex w-full cursor-pointer items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
          <span>{selected.length ? `${selected.length} selected` : `All ${label}`}</span>
          <ChevronDown
            className="h-4 w-4 text-slate-400 transition group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="absolute z-10 mt-2 w-full rounded-md border border-slate-200 bg-white p-3 shadow-lg">
          <div className="max-h-56 space-y-2 overflow-auto pr-1">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={(event) => {
                    if (event.target.checked) {
                      onChange((prev) => [...prev, option]);
                    } else {
                      onChange((prev) => prev.filter((item) => item !== option));
                    }
                  }}
                  className="h-4 w-4 accent-volterra-teal"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}

export function ReportsLibrary() {
  const [search, setSearch] = useState("");
  const [maxYear, setMaxYear] = useState(() => {
    return Math.max(...reports.map((report) => parseISO(report.date).getFullYear()));
  });
  const [disciplines, setDisciplines] = useState<string[]>([]);
  const [geographies, setGeographies] = useState<string[]>([]);
  const [perspectives, setPerspectives] = useState<string[]>([]);

  const disciplineOptions = useMemo(() => {
    return Array.from(new Set(reports.flatMap((report) => report.discipline))).sort();
  }, []);
  const geographyOptions = useMemo(() => {
    return Array.from(new Set(reports.flatMap((report) => report.geography))).sort();
  }, []);
  const perspectiveOptions = useMemo(() => {
    return Array.from(new Set(reports.flatMap((report) => report.perspective))).sort();
  }, []);

  const minYear = useMemo(() => {
    return Math.min(...reports.map((report) => parseISO(report.date).getFullYear()));
  }, []);
  const maxYearLimit = useMemo(() => {
    return Math.max(...reports.map((report) => parseISO(report.date).getFullYear()));
  }, []);
  const yearPercent = ((maxYear - minYear) / (maxYearLimit - minYear || 1)) * 100;
  const hasActiveFilters =
    search.trim().length > 0 ||
    maxYear !== maxYearLimit ||
    disciplines.length > 0 ||
    geographies.length > 0 ||
    perspectives.length > 0;

  const resetFilters = () => {
    setSearch("");
    setMaxYear(maxYearLimit);
    setDisciplines([]);
    setGeographies([]);
    setPerspectives([]);
  };

  const filtered = reports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(search.toLowerCase());
    const matchesYear = parseISO(report.date).getFullYear() <= maxYear;
    const matchesDiscipline =
      disciplines.length === 0 || report.discipline.some((item) => disciplines.includes(item));
    const matchesGeography =
      geographies.length === 0 || report.geography.some((item) => geographies.includes(item));
    const matchesPerspective =
      perspectives.length === 0 || report.perspective.some((item) => perspectives.includes(item));
    return matchesSearch && matchesYear && matchesDiscipline && matchesGeography && matchesPerspective;
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
              <label htmlFor="report-search" className="sr-only">
                Search reports
              </label>
              <Input
                id="report-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search reports"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span>Date</span>
                <span className="normal-case text-xs text-slate-600">Up to {maxYear}</span>
              </div>
              <input
                type="range"
                min={minYear}
                max={maxYearLimit}
                value={maxYear}
                onChange={(event) => setMaxYear(Number(event.target.value))}
                aria-label="Latest report year"
                className="volterra-range w-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #27ABAE 0%, #27ABAE ${yearPercent}%, #CBD5E1 ${yearPercent}%, #CBD5E1 100%)`,
                }}
              />
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{minYear}</span>
                <span>{maxYearLimit}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <MultiSelectDropdown
            label="Discipline"
            options={disciplineOptions}
            selected={disciplines}
            onChange={setDisciplines}
          />
          <MultiSelectDropdown
            label="Geography"
            options={geographyOptions}
            selected={geographies}
            onChange={setGeographies}
          />
          <MultiSelectDropdown
            label="Perspective"
            options={perspectiveOptions}
            selected={perspectives}
            onChange={setPerspectives}
          />
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
            No reports match your current filters.
          </p>
          <div className="mt-4 flex justify-center">
            <Button type="button" variant="outline" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((report) => (
            <ReportCard key={report.slug} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}
