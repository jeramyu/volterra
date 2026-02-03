import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface ReportItem {
  title: string;
  date: string;
  readingTime: string;
  discipline: string[];
  geography: string[];
  perspective: string[];
  excerpt: string;
  image: string;
  pdfUrl: string;
}

export function ReportCard({ report }: { report: ReportItem }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative h-52 w-full bg-white">
        <Image src={report.image} alt={report.title} fill className="object-contain p-4" />
      </div>
      <CardContent className="flex flex-1 flex-col space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-volterra-deep-green">{report.title}</h3>
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
            {format(parseISO(report.date), "MMM d, yyyy")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {report.discipline.map((item) => (
            <Badge key={item} variant="teal" className="bg-pastel-sage/35">
              {item}
            </Badge>
          ))}
          {report.geography.map((item) => (
            <Badge key={item} variant="teal" className="bg-pastel-sky/30">
              {item}
            </Badge>
          ))}
          {report.perspective.map((item) => (
            <Badge key={item} variant="teal" className="bg-pastel-peach/30">
              {item}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-slate-700">{report.excerpt}</p>
        <p className="text-xs text-slate-500">{report.readingTime}</p>
        <Button asChild variant="outline" className="mt-auto w-full">
          <Link href={report.pdfUrl} aria-label={`Read the report: ${report.title}`}>
            Read the Report
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
