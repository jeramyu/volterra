import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  body: ReactNode | ReactNode[];
  withGradient?: boolean;
}

export function PageHeader({ title, body, withGradient = false }: PageHeaderProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-light text-volterra-deep-green md:text-4xl">
          {title}
        </h1>
        {withGradient && <div className="gradient-bar h-1 w-28 rounded-full" />}
      </div>
      <div className="space-y-4 text-slate-700">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  withGradient = false,
  className,
  labelClassName,
  titleClassName,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  withGradient?: boolean;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {label && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.18em] text-volterra-teal md:text-base",
            labelClassName
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-light text-volterra-deep-green md:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {withGradient && <div className="gradient-bar h-1 w-24 rounded-full" />}
      {subtitle && <p className="text-lg text-slate-700">{subtitle}</p>}
    </div>
  );
}
