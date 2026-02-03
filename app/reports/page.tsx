import Link from "next/link";

import { PageHeader, SectionHeader } from "@/components/page-header";
import { ReportsLibrary } from "@/components/reports-library";
import { Button } from "@/components/ui/button";

export default function ReportsPage() {
  return (
    <>
      <section className="pb-2 md:pb-3">
        <div className="container space-y-8">
          <PageHeader
            title="Reports"
            body={[
              "Volterra Reports are long-form analyses of the systems and decisions shaping digital infrastructure.",
              "Each report examines how power, land, infrastructure, policy, and market structure interact over time—connecting technical detail with strategic consequence. They are written to be durable reference material, not commentary on the news cycle.",
              "Reports are designed for practitioners who need to understand why constraints form and how decisions compound. The objective is clarity early—before timelines, capital, or optionality are lost.",
            ]}
            withGradient
          />
        </div>
      </section>

      <section id="reports">
        <div className="container space-y-8">
          <ReportsLibrary />
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container space-y-6">
          <SectionHeader title="Discuss a Report or Engagement" />
          <p className="text-slate-700">
            For questions about existing reports—or to explore a report tailored to a specific
            market or decision.
          </p>
          <Button asChild variant="default">
            <a href="/#contact">Start the Conversation</a>
          </Button>
        </div>
      </section>
    </>
  );
}
