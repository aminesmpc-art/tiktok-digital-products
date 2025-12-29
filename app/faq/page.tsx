import { products } from "../../content/data";

const generalFaq = [
  { q: "Do I need to be on camera?", a: "Use UGC-style b-roll and voiceovers; templates include prompts." },
  { q: "Can I expense this?", a: "Yes, templates count as educational/business resources." },
  { q: "What if I’m new to TikTok?", a: "Start with the launch plan and the swipe file to shortcut testing." }
];

export default function FAQPage() {
  const productFaq = products.flatMap((p) => p.faq.slice(0, 1));
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">Frequently asked questions</h1>
      <div className="space-y-4">
        {[...generalFaq, ...productFaq].map((item) => (
          <div key={item.q} className="rounded-lg border p-4">
            <p className="font-semibold">{item.q}</p>
            <p className="text-slate-700">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
