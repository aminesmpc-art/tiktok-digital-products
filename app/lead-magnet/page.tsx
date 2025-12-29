import NewsletterForm from "../../components/NewsletterForm";
import { leadMagnet } from "../../content/data";

export default function LeadMagnetPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <p className="text-sm font-semibold text-brand-accent">Free resource</p>
      <h1 className="text-3xl font-bold">{leadMagnet.title}</h1>
      <p className="text-lg text-slate-700">{leadMagnet.description}</p>
      <div className="rounded-lg border border-brand-accent/40 bg-brand-soft p-6 space-y-3">
        <p className="text-slate-800">{leadMagnet.formCopy}</p>
        <NewsletterForm />
        <p className="text-xs text-slate-500">No spam. Opt-out anytime.</p>
      </div>
    </div>
  );
}
