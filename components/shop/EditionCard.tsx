import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { FormatMockup } from "@/components/ui/FormatMockup";

/** Compact edition card matching the reference's "Choose your edition" row. */
export function EditionCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full gap-4 rounded-sm border border-gold/35 bg-ivory-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(6,27,43,.35)]">
      <div className="flex w-[42%] shrink-0 items-center justify-center">
        <FormatMockup kind={product.mockup} className="w-full max-w-[120px]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="text-2xl text-navy">{product.name}</h3>
        <p className="mt-2 text-sm leading-snug text-ink/70">{product.short}</p>
        <p className="mt-auto pt-4 font-serif text-2xl text-navy">{formatPrice(product.price)}</p>
        <Link
          href={`/shop/${product.slug}`}
          className="mt-2 inline-flex items-center gap-2 font-serif text-lg text-gold-dark underline decoration-gold/50 underline-offset-4 after:absolute after:inset-0 hover:text-navy"
        >
          Shop Now <span className="sr-only">: {product.name}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
