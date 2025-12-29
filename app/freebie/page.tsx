import { leadMagnets } from "@/content/data";
import { StickyCTA } from "@/components/sticky-cta";
import { Button } from "@/components/button";

export const metadata = { title: "Freebie" };

export default function FreebiePage() {
  const magnet = leadMagnets[0];
  return (
    <div className="space-y-6">
      <p className="text-[11px] font-semibold uppercase text-brand.accent">Lead magnet</p>
      <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{magnet.title}</h1>
      <p className="max-w-2xl text-base leading-relaxed text-slate-700">{magnet.description}</p>
      <form
        action="/api/newsletter"
        method="post"
        className="space-y-4 rounded-3xl border bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:max-w-xl"
      >
        <p className="text-sm font-semibold text-slate-900">{magnet.formCopy}</p>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Email
          <input
            name="email"
            required
            className="rounded-lg border px-3 py-3 text-base focus:ring-2 focus:ring-brand.accent/60"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <Button className="w-full justify-center" type="submit">
          Send me the prompts
        </Button>
        <p className="text-xs text-slate-500">We respect your inbox. Unsubscribe anytime.</p>
      </form>
      <div className="flex items-center gap-3 rounded-xl bg-brand.soft px-4 py-3 text-sm text-brand.accent ring-1 ring-brand.accent/20">
        <span className="text-lg" aria-hidden>
          ★
        </span>
        <p>Get the swipe file instantly. Bonus: weekly TikTok tests that are working now.</p>
      </div>
      <StickyCTA label="Get the free prompts" href="/freebie" subtext="Delivered instantly" tone="freebie" />
    </div>
  );
}
