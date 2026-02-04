import Image from "next/image";
import Link from "next/link";
import { Briefcase, Bolt, LineChart, Layers } from "lucide-react";

import { PageHeader, SectionHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { EngagementSequenceCard } from "@/components/engagement-sequence-card";

const bulletDark = "/logo/Volterra%20Bullet%20Dark.svg";

export default function SolutionsPage({
  searchParams,
}: {
  searchParams?: { submitted?: string };
}) {
  const submitted = searchParams?.submitted === "1";

  return (
    <>
      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <PageHeader
              title="Solutions"
              body={[
                "Volterra Solutions are structured advisory engagements designed to help clients move from uncertainty to execution across the data center lifecycle.",
                "Each solution reflects a repeatable pattern drawn from real transactions, real sites, and real constraints — adapted to the specifics of each opportunity without reinventing the wheel.",
              ]}
              withGradient
            />
            <Button asChild variant="default">
              <Link href="/#contact">Start the Conversation</Link>
            </Button>
          </div>
          <div className="relative h-[320px] w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
            <Image
              src="/hero/image-11.jpeg.webp"
              alt="Aerial view of data center infrastructure"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-light text-volterra-deep-green md:text-4xl">
                Advisory Philosophy
              </h2>
              <div className="gradient-bar h-1 w-28 rounded-full" />
            </div>
            <div className="space-y-4 text-slate-700">
              <p>Volterra’s work is guided by a simple principle:</p>
              <p className="text-volterra-deep-green font-semibold">clarity creates momentum.</p>
              <p>
                In data center development, delays and missteps rarely come from lack of effort.
                They come from unclear assumptions—about power timelines, entitlement risk, capital
                readiness, or who actually owns the next decision.
              </p>
              <p>
                Volterra engagements are structured to surface those constraints early, reduce
                decision friction, and align stakeholders around a credible path forward. The goal
                is not more analysis, but fewer surprises—and execution that holds up when timelines
                and capital are under pressure.
              </p>
              <p>
                The work is advisory-first, senior-led, and grounded in operating reality rather
                than theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <SectionHeader title="Solution Areas" withGradient />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Site Selection & Readiness",
                icon: Briefcase,
                body: "Identifying and advancing sites that can realistically support data center development.",
                bullets: [
                  "Macro and submarket screening",
                  "Site-level diligence (land, zoning, environmental, access)",
                  "Entitlement pathway assessment",
                  "Readiness positioning for hyperscale and operator requirements",
                ],
                footer:
                  "This work is often the foundation for later power, leasing, or transaction activity.",
              },
              {
                title: "Power Strategy & Utility Engagement",
                icon: Bolt,
                body:
                  "Power is the dominant gating factor in modern data center development. Volterra works directly with utilities and power stakeholders to assess feasibility, timing, and risk.",
                bullets: [
                  "Utility posture and capacity assessment",
                  "Substation and transmission pathway evaluation",
                  "Interconnection strategy and queue positioning",
                  "Bridge-to-grid and alternative generation evaluation",
                ],
                footer: "The objective is not theoretical capacity, but credible deliverability.",
              },
              {
                title: "Leasing Strategy & Market Entry",
                icon: LineChart,
                body: "Helping developers and platforms position assets and engage the market with credibility.",
                bullets: [
                  "Go-to-market and leasing strategy",
                  "Hyperscale and operator engagement",
                  "Demand signaling and feedback loops",
                  "Timing, phasing, and optionality analysis",
                ],
                footer:
                  "This work benefits from Volterra’s direct experience leasing capacity across a wide range of deal sizes and market cycles.",
              },
              {
                title: "Transaction & Investment Advisory",
                icon: Layers,
                body:
                  "Supporting landowners, developers, and investors through complex transactions where power, timing, and market structure drive value.",
                bullets: [
                  "Landowner representation and positioning",
                  "JV structuring and alignment",
                  "Investor diligence support",
                  "Transaction strategy and execution guidance",
                ],
                footer:
                  "Volterra’s role is to clarify risk, preserve optionality, and support informed decisions.",
              },
            ].map((card) => (
              <Card key={card.title} className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <card.icon className="h-6 w-6 text-volterra-teal" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-volterra-deep-green">{card.title}</h3>
                </div>
                <p className="text-sm text-slate-700">{card.body}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Image src={bulletDark} alt="Volterra" width={16} height={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-700">{card.footer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="!pt-8 md:!pt-12">
        <div className="container space-y-10">
          <SectionHeader title="Structured Engagements" withGradient />
          <p className="max-w-2xl text-slate-700">
            Some advisory work is best delivered through clearly defined engagement structures.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Power Queue Decision Package (PQDP)",
                body: "A focused engagement designed to help clients make informed decisions around interconnection strategy and queue participation.",
                bullets: [
                  "Utility and queue landscape",
                  "Feasible interconnection pathways",
                  "Timeline and risk assessment",
                  "Go / no-go decision support",
                ],
                footer:
                  "PQDP is often used early to avoid misaligned capital and schedule assumptions.",
              },
              {
                title: "Power Queue Management (PQM)",
                body:
                  "Hands-on advisory support for navigating complex interconnection and utility coordination processes.",
                bullets: [
                  "Ongoing utility engagement",
                  "Study coordination and interpretation",
                  "Schedule and milestone tracking",
                  "Stakeholder alignment",
                ],
                footer:
                  "This engagement is appropriate when clients need sustained senior-level guidance rather than point-in-time analysis.",
              },
            ].map((card) => (
              <Card key={card.title} className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-volterra-deep-green">{card.title}</h3>
                <p className="text-sm text-slate-700">{card.body}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Image src={bulletDark} alt="Volterra" width={16} height={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-700">{card.footer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container space-y-8">
          <SectionHeader title="How Engagements Take Shape" withGradient />
          <div className="space-y-4 text-slate-700">
            <p>Not every opportunity requires a full lifecycle engagement.</p>
            <p>
              Many ask specific questions: Is this site viable? Is this power path real? Is this the
              right time to transact?
            </p>
            <p>
              Volterra engagements are structured to answer that question first—then expand only if
              it adds value.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <EngagementSequenceCard />
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <SectionHeader label="Start the Conversation" title="Expert Advice, Built For You" />
            <p className="text-slate-700">
              If you’re evaluating a site, a market, or a transaction — and want clarity early —
              start a conversation.
            </p>
          </div>
          <ContactForm
            submitLabel="Start the Conversation"
            submitted={submitted}
            redirectTo="/solutions?submitted=1#contact"
          />
        </div>
      </section>
    </>
  );
}
