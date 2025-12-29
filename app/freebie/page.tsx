import { leadMagnets } from "../../content/data";

export const metadata = { title: "Freebie" };

export default function FreebiePage() {
  const magnet = leadMagnets[0];
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-brand.accent">Lead magnet</p>
      <h1 className="text-3xl font-bold">{magnet.title}</h1>
      <p className="text-slate-700">{magnet.description}</p>
      <form action="/api/newsletter" method="post" className="space-y-3 rounded-xl bg-white p-5 shadow border max-w-xl">
        <p className="text-sm text-slate-700">{magnet.formCopy}</p>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Email
          <input name="email" required className="rounded-md border px-3 py-2" placeholder="you@example.com" />
        </label>
        <button className="rounded-full bg-brand.accent px-5 py-3 text-white font-semibold" type="submit">
          Send me the prompts
        </button>
        <p className="text-xs text-slate-500">We respect your inbox. Unsubscribe anytime.</p>
      </form>
    </div>
  );
}
