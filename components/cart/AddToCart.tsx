"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useCart } from "./CartProvider";
import { QuantityControl } from "./QuantityControl";

export function AddToCart({
  slug, name, withQuantity = true, className,
}: { slug: string; name: string; withQuantity?: boolean; className?: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 2500);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-wrap items-center gap-3">
        {withQuantity && <QuantityControl value={qty} onChange={(n) => setQty(Math.max(1, Math.min(99, n || 1)))} label={`${name} quantity`} />}
        <button
          type="button"
          onClick={() => {
            add(slug, qty);
            setAdded(true);
          }}
          className={buttonClass("gold", "px-6 py-3 text-base")}
        >
          {added ? <Check className="h-4 w-4" aria-hidden="true" /> : <ShoppingBag className="h-4 w-4" aria-hidden="true" />}
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
      <p className="min-h-[1.25rem] text-sm text-ink/70" role="status" aria-live="polite">
        {added && (
          <>
            {name} added to your cart.{" "}
            <Link href="/cart" className="text-gold-dark underline underline-offset-2 hover:text-navy">
              View cart
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
