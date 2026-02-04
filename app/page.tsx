import Image from "next/image";
import Link from "next/link";

import { SplitFlapText } from "@/components/split-flap-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/page-header";
import { CTARow, StatTile } from "@/components/blocks";
import { LogoCarousel } from "@/components/logo-carousel";
import { ReportCarousel } from "@/components/report-carousel";
import { ContactForm } from "@/components/contact-form";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";

const reportCarouselItems = [
  {
    title: "Waste Heat, Warm Cities",
    description:
      "An examination of data center waste heat as infrastructure — exploring when heat reuse becomes viable, why it has scaled unevenly, and how policy, district heating, and cooling architectures shape outcomes.",
    image: "/reports/Volterra%20Reports%20-%20Waste%20Heat,%20Warm%20Cities_Page_01.png",
    actionLabel: "Read the Report",
    actionHref: "/reports",
  },
  {
    title: "Water, Watts, & Workloads",
    description:
      "A study of how water constraints and power delivery shape capacity planning and market timing across major data center corridors.",
    image: "/reports/Volterra%20Reports%20-%20Water,%20Watts,%20%26%20Workloads_Page_01.png",
    actionLabel: "Read the Report",
    actionHref: "/reports",
  },
  {
    title: "Maryland Data Center Market Report",
    description:
      "A pipeline and policy brief for investors, developers, and landowners operating in or evaluating the Maryland market.",
    image: "/reports/Legacy%20Fiber,%20Lasting%20Impact%20-%20a%20Volterra%20Report_Page_1.png",
    actionLabel: "Subscribe",
    actionHref: "/#contact",
    actionFullReload: true,
  },
  {
    title: "State Data Center Incentive Tracker",
    description:
      "A monthly tracking report focused on state and municipality data center incentives.",
    image: "/reports/From%20the%20Curb%20to%20the%20Computer%20Room%20-%200.01_Page_01.png",
    actionLabel: "Subscribe",
    actionHref: "/#contact",
    actionFullReload: true,
  },
];

export default function HomePage({
  searchParams,
}: {
  searchParams?: { submitted?: string };
}) {
  const submitted = searchParams?.submitted === "1";

  return (
    <>
      <section className="pt-16">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-light text-volterra-deep-green md:text-4xl">
              Experienced guidance for data center decisions that matter.
            </h1>
            <p className="text-slate-700">
              Volterra works with{" "}
              <SplitFlapText
                words={[
                  "developers",
                  "landowners",
                  "investors",
                  "operators",
                  "providers",
                  "utilities",
                  "you",
                ]}
              />{" "}
              on site selection, power strategy, sales and leasing, execution — helping teams move
              faster and avoid costly missteps when timelines, capital, and outcomes are on the
              line.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="default" asChild>
                <Link href="/#contact">Start the Conversation</Link>
              </Button>
              <Link href="/solutions" className="text-sm font-semibold text-slate-700">
                How We Can Help
              </Link>
            </div>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-lg border border-slate-200">
            <Image
              src="/hero/image-11.jpeg.webp"
              alt="Aerial view of data center infrastructure"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-volterra-grey-10 py-8">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold text-volterra-deep-green">What Sets Us Apart</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700 md:justify-end">
            {[
              "Proven Results",
              "Deep Relationships",
              "Unparalleled Market Intelligence",
              "Trusted Expertise",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volterra-teal" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container space-y-10">
          <SectionHeader
            label="Solutions"
            title="Guided by experience"
            labelClassName="text-volterra-teal"
          />
          <p className="max-w-2xl text-slate-700">
            Volterra’s work spans advisory, intelligence, and active market participation — structured
            to reduce uncertainty and keep decisions moving.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Advisory Solutions",
                body: "Structured engagements across site selection, power strategy, leasing, and transaction support — designed to surface constraints early and move opportunities forward without unnecessary motion.",
                icon: Shield,
                tone: "bg-pastel-sage",
              },
              {
                title: "Market Intelligence",
                body: "Investor-grade research and analysis that explain how the data center market actually behaves, where constraints are forming, and how demand is shifting across regions and timeframes.",
                icon: TrendingUp,
                tone: "bg-pastel-sky",
              },
              {
                title: "Active Opportunities",
                body: "Select sites and engagements currently represented by Volterra, reflecting real diligence, live power paths, and ongoing market participation.",
                icon: CheckCircle2,
                tone: "bg-pastel-peach",
              },
            ].map((card) => (
              <Card
                key={card.title}
                className="group relative overflow-hidden border border-slate-200/80 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex min-h-[72px] items-center justify-between gap-4 px-5 py-4 ${card.tone}`}
                >
                  <h3 className="text-lg font-semibold text-volterra-deep-green md:text-xl">
                    {card.title}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm">
                    <card.icon className="h-5 w-5 text-volterra-deep-green" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base leading-relaxed text-slate-700 md:text-[17px]">
                    {card.body}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <Link href="/solutions" className="text-sm font-semibold text-slate-700">
              VIEW ALL SOLUTIONS →
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-16">
        <div className="container space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Clients & Partnerships
          </p>
          <LogoCarousel />
        </div>
      </section>

      <section className="bg-volterra-deep-green text-white">
        <div className="container space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-volterra-teal md:text-base">
              About Volterra Advisors
            </p>
            <h2 className="text-3xl font-light">Vision. Strategy. Execution.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <StatTile value="15+" label="Years Experience" dark animateOnView />
            <StatTile value="$15B+" label="Lease Revenue Created" dark animateOnView />
            <StatTile value="1.2 GWs" label="Critical IT Load Leased" dark animateOnView />
            <StatTile value="$250M+" label="Powered Land Sold to End-Users" dark animateOnView />
          </div>
          <div className="max-w-3xl space-y-4 text-white">
            <p>
              Volterra is led by Jeramy Utara, who has spent nearly two decades inside data centers —
              from site selection and power strategy to leasing and execution. Bolstered by a deep
              bench of respected industry veterans, Volterra builds the right team for every
              opportunity.
            </p>
            <p>
              This experience shows up in how work is scoped, how risks are identified, and how
              decisions are made. Fewer handoffs. Clear recommendations. No unnecessary motion.
            </p>
          </div>
          <CTARow
            primaryLabel="MORE ABOUT US"
            primaryHref="/about"
            secondaryLabel="SEE OUR LISTINGS →"
            secondaryHref="/listings"
            primaryVariant="teal"
            secondaryClassName="text-white"
          />
        </div>
      </section>

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-6">
          <SectionHeader
            label="Research and Publications"
            title="To see how Volterra thinks, start with the research."
          />
            <p className="text-slate-700">
              Volterra provides industry-leading research via{" "}
              <Link href="/reports#reports" className="font-semibold text-volterra-teal">
                Volterra Reports
              </Link>{" "}
              — examining the systems, markets, and decisions shaping digital infrastructure — and
              timely, nuanced market intelligence via newsletters and{" "}
              <Link href="/research#publications" className="font-semibold text-volterra-teal">
                Publications
              </Link>
              .
            </p>
          </div>
          <ReportCarousel items={reportCarouselItems} />
        </div>
      </section>

      <section id="contact" className="bg-volterra-soft scroll-mt-24">
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
            redirectTo="/?submitted=1#contact"
          />
        </div>
      </section>
    </>
  );
}
