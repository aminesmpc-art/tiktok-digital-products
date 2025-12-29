import { faq } from "../../content/data";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="space-y-2">
        {faq.map((item) => (
          <details key={item.q} className="rounded-md border bg-white p-3">
            <summary className="font-semibold">{item.q}</summary>
            <p className="text-sm text-slate-700 mt-2">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
