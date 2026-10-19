import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline-light" | "outline-dark" | "navy";

const styles: Record<Variant, string> = {
  gold: "bg-gradient-to-b from-gold-light to-gold text-navy shadow-[0_8px_24px_-10px_rgba(198,160,82,.8)] hover:from-gold hover:to-gold-dark hover:text-ivory",
  "outline-light": "border border-ivory/70 text-ivory hover:border-gold hover:bg-gold/10 hover:text-gold-light",
  "outline-dark": "border border-navy/70 text-navy hover:border-gold-dark hover:bg-gold/10",
  navy: "bg-navy text-ivory hover:bg-navy-700",
};

export const buttonClass = (variant: Variant = "gold", className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-[3px] px-7 py-3.5 font-serif text-lg leading-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    styles[variant],
    className
  );

export function ButtonLink({
  href, children, variant = "gold", arrow = false, className,
}: { href: string; children: React.ReactNode; variant?: Variant; arrow?: boolean; className?: string }) {
  return (
    <Link href={href} className={buttonClass(variant, cn("group", className))}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-serif text-lg text-gold-dark underline decoration-gold/50 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
