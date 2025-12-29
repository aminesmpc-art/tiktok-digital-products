export const metadata = { title: "Success" };

export default function SuccessPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Payment successful</h1>
      <p className="text-slate-700">Check your email for the download link and next steps.</p>
      <a className="text-brand.accent underline font-semibold" href="/products">
        Back to products
      </a>
    </div>
  );
}
