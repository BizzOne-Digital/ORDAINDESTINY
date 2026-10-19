"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantityControl({
  value, onChange, label, className,
}: { value: number; onChange: (n: number) => void; label: string; className?: string }) {
  const btn = "grid h-10 w-10 place-items-center text-navy transition-colors hover:bg-gold/15 disabled:opacity-40";
  return (
    <div className={cn("inline-flex items-center rounded-[3px] border border-gold/60 bg-ivory-50", className)} role="group" aria-label={label}>
      <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Decrease quantity">
        <Minus className="h-4 w-4" aria-hidden="true" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={1}
        max={99}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="Quantity"
        className="h-10 w-12 border-x border-gold/40 bg-transparent text-center text-navy [appearance:textfield] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= 99} aria-label="Increase quantity">
        <Plus className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
