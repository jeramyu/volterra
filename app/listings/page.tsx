import Link from "next/link";

import { PageHeader, SectionHeader } from "@/components/page-header";
import { ListingsGrid } from "@/components/listings-grid";
import { Button } from "@/components/ui/button";

export default function ListingsPage() {
  return (
    <>
      <section className="pb-3 md:pb-5">
        <div className="container space-y-8">
          <PageHeader
            title="Available Opportunities"
            body={[
              "This page presents select data center sites currently represented by Volterra.",
              "Inclusion reflects readiness, not speculation. Power pathways are defined, entitlement risk has been addressed, and ownership is aligned around a credible path to execution.",
            ]}
            withGradient
          />
        </div>
      </section>

      <section className="pt-6 md:pt-10">
        <div className="container space-y-8">
          <ListingsGrid />
        </div>
      </section>

      <section className="bg-volterra-soft">
        <div className="container space-y-6">
          <SectionHeader title="Need More Info?" />
          <p className="text-slate-700">
            If you are evaluating active opportunities or would like additional detail on any
            listing, start a conversation.
          </p>
          <Button asChild variant="default">
            <a href="/#contact">Start the Conversation</a>
          </Button>
        </div>
      </section>
    </>
  );
}
