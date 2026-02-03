## Build Guardrails (keep lightweight)

- Framework: Next.js App Router + TypeScript.
- Styling: Tailwind + shadcn/ui (use where it fits; style to brand-guide.md).
- Pages: implement routes in `app/` (home, solutions, listings, research, reports, about, contact).
- Shared UI: create reusable components in `components/`.

## Content Rules
- Page copy in the MD files is authoritative. Do not rewrite or invent copy (aside from spelling and grammer mistakes).
- Do not add new sections, CTAs, or pages unless explicitly specified in the MDs.
- Any “Design Notes” sections in MD files are implementation guidance and must NOT be rendered.

## UI System (reusable primitives)
- PageHeader, SectionHeader, Card, InfoBlock (pastel), CTARow
- StatTile (supports one-time count-up), ReportCard, ListingCard

## Brand Rules (from brand-guide.md)
- Implement Tailwind tokens from brand-guide.md (colors + greys + typography).
- Pastels are accents only (one pastel per component). Never for body text or primary CTAs.

## Assets
- Logos: `/public/logo`
- Listing PDFs: `/public/sites`
- Report images: `/public` (or your chosen folder)

## Reports Data
- Create `data/reports.json` and render the Reports library from it.
  Fields: date, readingTime, discipline[], geography[], perspective[], title, slug, excerpt, image, pdfUrl
- Filters/sort are client-side; no database.