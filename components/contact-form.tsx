import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm({
  submitLabel = "Submit",
  messagePlaceholder = "How can we help?",
  redirectTo = "/contact?submitted=1",
  submitted = false,
}: {
  submitLabel?: string;
  messagePlaceholder?: string;
  redirectTo?: string;
  submitted?: boolean;
}) {
  const action = `/api/contact?redirect=${encodeURIComponent(redirectTo)}`;
  const privacyNoteId = "contact-privacy-note";

  return (
    <form className="space-y-4" method="post" action={action}>
      {submitted && (
        <div
          className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
          role="status"
          aria-live="polite"
        >
          Thanks for reaching out. We&#39;ll follow up within 1-2 business days.
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="firstname" className="sr-only">
            First Name
          </label>
          <Input
            id="firstname"
            name="firstname"
            placeholder="First Name"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastname" className="sr-only">
            Last Name
          </label>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          aria-describedby={privacyNoteId}
          className="h-32 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volterra-teal"
          placeholder={messagePlaceholder}
        />
      </div>
      <p id={privacyNoteId} className="text-xs text-slate-500">
        We respect your privacy. Your information is used only to respond and is never shared.
      </p>
      <input
        type="submit"
        value={submitLabel}
        className={cn(buttonVariants({}), "w-full md:w-auto")}
      />
    </form>
  );
}
