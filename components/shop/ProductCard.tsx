import Link from "next/link";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { FormatMockup } from "@/components/ui/FormatMockup";
import { AddToCart } from "@/components/cart/AddToCart";

/** Full edition card with format details and add-to-cart. Used on Pricing and Shop. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-gold/35 bg-ivory-50 p-6 transition-all duration-300 hover:border-gold hover:shadow-[0_18px_40px_-22px_rgba(6,27,43,.4)]">
      <Link href={`/shop/${product.slug}`} className="flex h-56 items-center justify-center rounded-sm bg-gradient-to-b from-ivory-200/70 to-ivory-50" tabIndex={-1} aria-hidden="true">
        <FormatMockup kind={product.mockup} className="w-32" />
      </Link>
      <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-gold-dark">{product.formatGroup === "print" ? "Print edition" : "Digital edition"}</p>
      <h3 className="mt-2 text-3xl text-navy">
        <Link href={`/shop/${product.slug}`} className="hover:text-gold-dark">
          {product.name}
        </Link>
      </h3>
      <p className="mt-2 font-serif text-3xl text-navy">{formatPrice(product.price)}</p>
      <p className="mt-3 text-ink/75">{product.short}</p>
      <ul className="mb-6 mt-4 space-y-2 text-sm text-ink/80">
        {product.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <AddToCart slug={product.slug} name={product.name} className="mt-auto" />
    </article>
  );
}
