import Image from "next/image";
import Link from "next/link";

import { PageHeader, SectionHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ResearchPage() {
  return (
    <>
      <section>
        <div className="container space-y-8">
          <PageHeader
            title="Research & Publications"
            body={[
              "Volterra Research focuses on how the data center market actually behaves — where constraints form, how decisions compound, and why timing matters.",
              <>
                <Link href="/reports" className="font-semibold text-volterra-teal">
                  Reports
                </Link>{" "}
                are long-form analyses that examine infrastructure, power, policy, and market
                structure in depth.{" "}
                <Link href="#publications" className="font-semibold text-volterra-teal">
                  Publications
                </Link>{" "}
                apply that work to specific markets, incentives, and decisions teams are facing in
                real time.
              </>,
              "Everything is written for practitioners. The objective is not volume or headlines, but insight that reduces uncertainty and keeps decisions moving.",
            ]}
            withGradient
          />
        </div>
      </section>

      <section className="bg-volterra-soft" id="featured-report">
        <div className="container space-y-8">
          <SectionHeader title="Featured Report" withGradient />
          <Card className="grid gap-6 p-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div className="relative h-64 w-[200px] overflow-hidden rounded-lg border-2 border-slate-200 bg-white p-2 shadow-sm mx-auto md:mx-0 md:justify-self-start">
              <Image
                src="/reports/Volterra%20Reports%20-%20Waste%20Heat,%20Warm%20Cities_Page_01.png"
                alt="Waste Heat, Warm Cities"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-volterra-deep-green">Waste Heat, Warm Cities</h3>
              <p className="text-sm text-slate-700">
                An examination of data center waste heat as infrastructure — exploring when heat
                reuse becomes viable, why it has scaled unevenly, and how policy, district heating,
                and cooling architectures shape outcomes.
              </p>
              <p className="text-sm text-slate-700">
                This report connects physics, engineering, and municipal planning to investment and
                siting decisions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/reports">Read the Report</Link>
                </Button>
                <Link href="/reports" className="text-sm font-semibold text-slate-700">
                  See all Reports
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="publications">
        <div className="container space-y-10">
          <SectionHeader title="Publications" withGradient />
          <div className="space-y-8">
            {[
              {
                title: "Maryland Data Center Market Report",
                description:
                  "A pipeline and policy brief for investors, developers, and landowners operating in or evaluating the Maryland market.",
                detail:
                  "This report establishes a baseline view of tracked capacity, power deliverability, jurisdictional posture, and pipeline risk — with a focus on evidence-based assessment rather than speculation.",
                image: "/reports/Legacy%20Fiber,%20Lasting%20Impact%20-%20a%20Volterra%20Report_Page_1.png",
              },
              {
                title: "State Data Center Incentive Tracker",
                description:
                  "A monthly tracking report focused on state and municipality data center incentives.",
                detail:
                  "Tracks tax incentives, abatements, grants, and policy shifts that materially affect site selection and underwriting.",
                image: "/reports/From%20the%20Curb%20to%20the%20Computer%20Room%20-%200.01_Page_01.png",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center ${
                  index % 2 === 1 ? "md:grid-cols-[1.2fr_0.8fr]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative h-64 w-[200px] overflow-hidden rounded-lg border-2 border-slate-200 bg-white p-2 shadow-sm mx-auto md:mx-0 md:justify-self-start">
                    <Image src={item.image} alt={item.title} fill className="object-contain" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-volterra-deep-green">{item.title}</h3>
                  <p className="text-sm text-slate-700">{item.description}</p>
                  <p className="text-sm text-slate-700">{item.detail}</p>
                  <Button asChild variant="outline">
                    <a href="/#contact">Subscribe</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-volterra-soft" id="how-research-is-used">
        <div className="container space-y-8">
          <SectionHeader title="How Research Is Used" withGradient />
          <div className="space-y-4 text-slate-700">
            <p>Volterra Research is designed to support real decisions, not abstract analysis.</p>
            <p>
              It is used to inform advisory engagements, support site and market diligence, and
              align stakeholders around a shared set of facts. In many cases, research is the
              starting point for deeper advisory work—but it is written to stand on its own, as
              durable reference material for investors, operators, and development teams.
            </p>
            <p>
              The goal is to reduce uncertainty early and keep decisions moving as conditions
              evolve.
            </p>
          </div>
          <Button
            asChild
            variant="default"
            className="bg-volterra-deep-green text-white hover:bg-volterra-deep-green/90"
          >
            <a href="/#contact">Start the Conversation</a>
          </Button>
        </div>
      </section>
    </>
  );
}
