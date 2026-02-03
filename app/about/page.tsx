import Image from "next/image";
import Link from "next/link";

import { PageHeader, SectionHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { StatTile } from "@/components/blocks";
import { LogoCarousel } from "@/components/logo-carousel";
import { Button } from "@/components/ui/button";
import { Briefcase, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="container space-y-8">
          <PageHeader
            title="About Volterra"
            body={[
              "Volterra Advisors is an advisory platform focused on the decisions that shape data center and digital infrastructure outcomes.",
              "The firm exists to address a recurring gap in the market: critical decisions are often made with incomplete context—about power, entitlement risk, timing, or capital alignment—long before those assumptions are tested. When those gaps surface later, they are expensive to unwind.",
              "Volterra works at the intersection of power, land, capital, and market dynamics to bring clarity early, reduce rework, and keep execution aligned as conditions evolve. The focus is not volume or activity, but durable decisions that hold up under pressure.",
            ]}
            withGradient
          />
        </div>
      </section>

      <section className="bg-white pt-4 md:pt-5">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader title="Led by Jeramy Utara" withGradient />
            <div className="space-y-4 text-slate-700">
              <p>
                Volterra is led by Jeramy Utara, an industry veteran with nearly two decades of
                experience across the full data center lifecycle—from site selection and power
                strategy to leasing, development, and execution.
              </p>
              <p>
                Jeramy began his career at DuPont Fabros Technology, contributing to the
                development of some of the earliest hyperscale data center campuses in North
                America. He later joined CloudHQ as its first employee, helping grow the company
                from concept to one of the world’s leading privately held data center developers.
              </p>
              <p>
                Over more than a decade at CloudHQ, Jeramy worked directly across development,
                leasing, and transaction execution—engaging hyperscale, cloud, and enterprise
                platforms on projects where power, timing, and scale were decisive.
              </p>
              <p>
                That experience shapes how Volterra operates today. Engagements are senior-led and
                judgment-driven, with teams assembled to fit the specific technical, market, and
                execution needs of each opportunity. Rather than maintaining a fixed staff,
                Volterra builds the right bench for the problem at hand—engineers, advisors, and
                specialists whose expertise aligns with what actually matters to the decision.
              </p>
              <Link
                href="https://www.linkedin.com/in/jeramyutara/"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn profile →
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-lg bg-white md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image src="/headshot/Headshot.png" alt="Jeramy Utara" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-4">
            <StatTile
              value="15+"
              label="Years Experience"
              valueClassName="text-volterra-teal"
              labelClassName="text-volterra-deep-green/70"
            />
            <StatTile
              value="$15B+"
              label="Lease Revenue Created"
              valueClassName="text-volterra-teal"
              labelClassName="text-volterra-deep-green/70"
            />
            <StatTile
              value="1.2 GWs"
              label="Critical IT Load Leased"
              valueClassName="text-volterra-teal"
              labelClassName="text-volterra-deep-green/70"
            />
            <StatTile
              value="$250M+"
              label="Powered Land Sold to End-Users"
              valueClassName="text-volterra-teal"
              labelClassName="text-volterra-deep-green/70"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container space-y-10">
          <SectionHeader title="How Volterra Works" withGradient />
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="relative space-y-4 overflow-hidden border border-slate-200 bg-white p-6 shadow-soft">
              <div className="gradient-bar h-1 w-16 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pastel-sage/50 text-volterra-deep-green">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  The Volterra Model
                </p>
              </div>
              <div className="space-y-3 text-[16px] text-slate-700">
                <p>Volterra is intentionally structured differently from traditional consultancies.</p>
                <p>
                  Rather than maintaining a large permanent staff, Volterra assembles the right
                  team for each engagement—drawing on a deep network of trusted engineers,
                  developers, utility specialists, and advisors whose expertise aligns with the
                  problem at hand.
                </p>
                <p>
                  This structure keeps work senior-led, highly focused, and aligned with client
                  outcomes rather than billable volume.
                </p>
              </div>
            </Card>
            <Card className="relative space-y-4 overflow-hidden border border-slate-200 bg-white p-6 shadow-soft">
              <div className="gradient-bar h-1 w-16 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pastel-sky/45 text-volterra-deep-green">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  How We Work
                </p>
              </div>
              <div className="space-y-3 text-[16px] text-slate-700">
                <p>Volterra engagements are designed to reduce noise and keep decisions moving.</p>
                <p>
                  That means direct senior involvement from day one, clear problem framing before
                  solutioning, early identification of constraints, and recommendations tied to
                  real-world execution paths.
                </p>
                <p>
                  The objective is not to produce volume, but to accelerate confident
                  decision-making.
                </p>
              </div>
            </Card>
            <Card className="relative space-y-4 overflow-hidden border border-slate-200 bg-white p-6 shadow-soft md:col-span-2">
              <div className="gradient-bar h-1 w-16 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pastel-peach/50 text-volterra-deep-green">
                  <Users className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Who We Work With
                </p>
              </div>
              <div className="space-y-3 text-[16px] text-slate-700">
                <p>Volterra works with:</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Data center developers and operators",
                    "Landowners evaluating data center potential",
                    "Investors and capital partners",
                    "Emerging platforms entering new markets",
                    "Established players navigating growth constraints",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-volterra-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Engagements are selective and collaborative. Volterra works best where trust,
                  transparency, and momentum matter.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Clients & Partnerships
          </p>
          <LogoCarousel />
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container space-y-6">
          <SectionHeader label="Start the Conversation" title="Expert Advice, Built For You" />
          <p className="text-slate-700">
            If you’re evaluating a site, a market, or a transaction — and want clarity early —
            start a conversation.
          </p>
          <Button asChild variant="default">
            <a href="/#contact">Start the Conversation</a>
          </Button>
        </div>
      </section>
    </>
  );
}
