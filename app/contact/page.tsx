export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-700">Tell us about your offer, niche, and goals. We'll reply within 1 business day.</p>
      <form action="/api/contact" method="post" className="space-y-3 rounded-xl bg-white p-5 shadow border">
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Name
          <input name="name" required className="rounded-md border px-3 py-2" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" required className="rounded-md border px-3 py-2" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Project
          <textarea name="message" required className="rounded-md border px-3 py-2" rows={4} />
        </label>
        <button className="rounded-full bg-brand.accent px-5 py-3 text-white font-semibold" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
