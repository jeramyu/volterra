import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { submitted?: string };
}) {
  const submitted = searchParams?.submitted === "1";

  return (
    <section>
      <div className="container space-y-10">
        <PageHeader
          title="Start the Conversation"
          body={[
            "Volterra engagements often begin with a short, focused conversation.",
            "The goal of an initial discussion is not to sell a predefined solution, but to understand the context, constraints, and objectives behind the opportunity — and to determine whether Volterra is the right fit.",
          ]}
          withGradient
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-volterra-deep-green">Who this is for</h2>
            <ul className="space-y-3 text-slate-700">
              {[
                "Site selection and readiness decisions",
                "Power strategy and utility engagement",
                "Leasing, market entry, and positioning",
                "Transaction and investment advisory",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-volterra-teal/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-volterra-deep-green">What happens next</h2>
            <ol className="space-y-3 text-slate-700">
              {[
                "We schedule a brief introductory call.",
                "We clarify constraints, objectives, and timing.",
                "We outline the most relevant engagement options.",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-volterra-teal/30 bg-volterra-teal/10 text-sm font-semibold text-volterra-deep-green">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm text-slate-600">
              We typically respond within 1-2 business days.
            </p>
          </div>
        </div>
        <ContactForm
          submitLabel="Start the Conversation"
          messagePlaceholder="How Can We Help?"
          submitted={submitted}
          redirectTo="/contact?submitted=1"
        />
      </div>
    </section>
  );
}
