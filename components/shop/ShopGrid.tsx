"use client";

import { useState } from "react";
import type { Product, ProductFormat } from "@/lib/products";
import { cn } from "@/lib/utils";

type Filter = "all" | ProductFormat;

const filters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All editions" },
  { value: "print", label: "Print" },
  { value: "digital", label: "Digital & audio" },
];

/** Client filter wrapper. Cards are rendered on the server and passed in by slug. */
export function ShopGrid({ products, cards }: { products: Product[]; cards: Record<string, React.ReactNode> }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = products.filter((p) => filter === "all" || p.formatGroup === filter);

  return (
    <>
      <div role="group" aria-label="Filter by format" className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full border px-5 py-2 font-serif text-lg transition-colors",
              filter === f.value ? "border-navy bg-navy text-ivory" : "border-gold/60 text-navy hover:bg-gold/10"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} editions
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((p) => (
          <li key={p.slug}>{cards[p.slug]}</li>
        ))}
      </ul>
    </>
  );
}
