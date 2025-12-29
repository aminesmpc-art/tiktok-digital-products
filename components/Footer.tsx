import NewsletterForm from "./NewsletterForm";

export default function Footer({ brand }: { brand: string }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3 items-start">
        <div>
          <h3 className="text-lg font-semibold">{brand}</h3>
          <p className="text-sm text-slate-600 mt-2">Growth systems for TikTok creators and lean teams.</p>
        </div>
        <div>
          <h4 className="font-semibold">Stay in the loop</h4>
          <p className="text-sm text-slate-600">Weekly growth scripts, hooks, and trends.</p>
          <div className="mt-3">
            <NewsletterForm compact />
          </div>
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <a href="/privacy-policy" className="hover:text-brand-accent">Privacy</a>
          <a href="/terms" className="hover:text-brand-accent block">Terms</a>
        </div>
      </div>
    </footer>
  );
}
