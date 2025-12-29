import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: "bg-brand.accent text-white shadow-sm hover:translate-y-[-1px] hover:shadow-md focus-visible:outline-brand.accent",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:bg-brand.soft focus-visible:outline-slate-400",
  ghost: "text-slate-900 underline-offset-4 hover:underline focus-visible:outline-slate-400"
};

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  href?: string;
} & ComponentProps<"button">;

export function Button({ variant = "primary", className, href, children, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);
  if (href) {
    return (
      <Link href={href as any} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
