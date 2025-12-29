export const metadata = { title: "Canceled" };

export default function CancelPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Payment canceled</h1>
      <p className="text-slate-700">No charge was made. Your cart is saved if you want to try again.</p>
      <a className="text-brand.accent underline font-semibold" href="/products">
        Return to products
      </a>
    </div>
  );
}
