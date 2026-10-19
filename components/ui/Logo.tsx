import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M20 14l4 5 8-9 8 9 4-5-2 10H22z" fill="currentColor" fillOpacity=".15" />
      <circle cx="20" cy="13" r="1.4" fill="currentColor" />
      <circle cx="32" cy="9" r="1.4" fill="currentColor" />
      <circle cx="44" cy="13" r="1.4" fill="currentColor" />
      <path d="M32 44V30c-6-4-16-5-26-3v15c10-2 20-1 26 2zM32 44V30c6-4 16-5 26-3v15c-10-2-20-1-26 2z" fill="currentColor" fillOpacity=".12" />
      <path d="M10 32c7-1 14-.5 19 1.6M10 36c7-1 14-.5 19 1.6M54 32c-7-1-14-.5-19 1.6M54 36c-7-1-14-.5-19 1.6" strokeWidth="1" />
    </svg>
  );
}

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Ordain Destiny home">
      <LogoMark className="h-9 w-12 shrink-0 text-gold-dark transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className={cn("whitespace-nowrap font-serif text-base tracking-[0.2em] sm:text-xl sm:tracking-[0.22em]", tone === "dark" ? "text-navy" : "text-ivory")}>
        ORDAIN DESTINY
      </span>
    </Link>
  );
}
