/** Fine gold line icons for the services. */
const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LotusIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M32 48c-6-6-8-14-8-20 0-6 4-12 8-16 4 4 8 10 8 16 0 6-2 14-8 20z" />
      <path d="M32 48c-10-1-18-8-20-18 6-1 12 1 16 5M32 48c10-1 18-8 20-18-6-1-12 1-16 5" />
      <path d="M32 48c-12 2-22-2-28-10 6-3 14-3 20 0M32 48c12 2 22-2 28-10-6-3-14-3-20 0" />
    </svg>
  );
}

export function MoonStarIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M40 52A22 22 0 0128 12a20 20 0 1024 30 22 22 0 01-12 10z" />
      <path d="M44 14l1.5 4 4 1.5-4 1.5L44 25l-1.5-4-4-1.5 4-1.5zM52 28l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
    </svg>
  );
}

export function HeartStarIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M32 54S8 40 8 24a12 12 0 0124-4 12 12 0 0124 4c0 16-24 30-24 30z" />
      <path d="M32 24v14M25 31h14M27 26l10 10M37 26L27 36" strokeWidth="1" />
    </svg>
  );
}

export function DoveIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M10 38c10 0 16-4 20-10l6-12c2-4 8-4 10 0l4 2-5 2c-1 8-5 16-13 20-6 3-14 4-22-2z" />
      <path d="M30 28c-4-6-10-10-18-10 2 8 8 12 16 14M24 46l-6 8M32 44l-2 10" />
    </svg>
  );
}
