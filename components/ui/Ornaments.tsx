import { cn } from "@/lib/utils";

/** Centered heading flanked by thin gold rules, as in the reference. */
export function RuledHeading({
  children, as: Tag = "h2", className, tone = "dark",
}: { children: React.ReactNode; as?: "h1" | "h2" | "h3" | "p"; className?: string; tone?: "dark" | "light" }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 sm:gap-6", className)}>
      <span className="h-px w-8 shrink-0 bg-gold sm:w-20" aria-hidden="true" />
      <Tag className={cn("text-center", tone === "dark" ? "text-navy" : "text-ivory")}>{children}</Tag>
      <span className="h-px w-8 shrink-0 bg-gold sm:w-20" aria-hidden="true" />
    </div>
  );
}

export function Eyebrow({ children, className, tone = "dark" }: { children: React.ReactNode; className?: string; tone?: "dark" | "light" }) {
  return (
    <p className={cn("flex items-center gap-4 text-xs font-medium uppercase tracking-eyebrow", tone === "dark" ? "text-gold-dark" : "text-gold-light", className)}>
      {children}
      <span className="h-px w-12 bg-gold/80 sm:w-16" aria-hidden="true" />
    </p>
  );
}

/** Decorative gold arrow flourish used in the announcement bar. */
export function Flourish({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 48 10" className={cn("h-2.5 w-10 text-gold", flip && "-scale-x-100", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M2 5h38M34 1l6 4-6 4" />
      <path d="M2 5c3-3 6-3 8 0" />
    </svg>
  );
}

/** Subtle botanical sprig. */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M60 198C58 140 62 80 90 10" />
      {[30, 60, 90, 120, 150].map((y, i) => (
        <g key={y}>
          <path d={`M${62 + i * 3} ${200 - y}c-20-4-34-18-36-34 18 2 32 14 36 34z`} fill="currentColor" fillOpacity=".12" />
          <path d={`M${64 + i * 3} ${190 - y}c18-8 28-22 28-38-16 6-26 20-28 38z`} fill="currentColor" fillOpacity=".12" />
        </g>
      ))}
    </svg>
  );
}

/** Cream blossom used as a floral accent. */
export function Blossom({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="50" cy="28" rx="15" ry="24" transform={`rotate(${r} 50 50)`} fill="#FBF6EA" stroke="#E4D7BB" strokeWidth="1" />
      ))}
      <circle cx="50" cy="50" r="7" fill="#D9B464" />
    </svg>
  );
}

/** Small gold crown, used in the offer banner and footer. */
export function Crown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4 22L1 6l10 8 9-12 9 12 10-8-3 16z" fillOpacity=".9" />
      <rect x="4" y="23" width="32" height="4" rx="1" />
    </svg>
  );
}
