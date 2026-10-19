"use client";

import Link from "next/link";
import { Info, ShoppingBag, Trash2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/utils";
import { buttonClass } from "@/components/ui/Button";
import { FormatMockup } from "@/components/ui/FormatMockup";
import { useCart } from "./CartProvider";
import { QuantityControl } from "./QuantityControl";

export function CartView() {
  const { lines, subtotal, count, hydrated, setQuantity, remove } = useCart();

  if (!hydrated) {
    return <div className="h-64 animate-pulse rounded-sm bg-ivory-200/60" aria-label="Loading cart" />;
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-md rounded-sm border border-gold/35 bg-ivory-50 p-10 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-gold-dark" strokeWidth={1.2} aria-hidden="true" />
        <h2 className="mt-5 text-3xl text-navy">Your cart is empty</h2>
        <p className="mt-3 text-ink/70">Choose an edition of {siteConfig.bookTitle} to begin.</p>
        <Link href="/shop" className={buttonClass("gold", "mt-7")}>
          Shop the Book
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-gold/25 border-y border-gold/25">
        {lines.map(({ slug, quantity, product }) => (
          <li key={slug} className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center">
            <div className="flex w-20 shrink-0 justify-center">
              <FormatMockup kind={product.mockup} className="w-16" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl text-navy">
                <Link href={`/shop/${slug}`} className="hover:text-gold-dark">
                  {siteConfig.bookTitle}
                </Link>
              </h3>
              <p className="text-sm text-ink/70">
                {product.name} · {formatPrice(product.price)} each
              </p>
            </div>
            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <QuantityControl value={quantity} onChange={(n) => setQuantity(slug, n)} label={`${product.name} quantity`} />
              <p className="w-24 text-right font-serif text-xl text-navy">{formatPrice(product.price * quantity)}</p>
              <button
                type="button"
                onClick={() => remove(slug)}
                className="grid h-10 w-10 place-items-center rounded-full text-ink/60 hover:bg-burgundy/10 hover:text-burgundy"
                aria-label={`Remove ${product.name} from cart`}
              >
                <Trash2 className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-sm border border-gold/40 bg-ivory-50 p-7" aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-3xl text-navy">Order summary</h2>
        <dl className="mt-6 space-y-3">
          <div className="flex justify-between text-ink/80">
            <dt>Items</dt>
            <dd>{count}</dd>
          </div>
          <div className="flex justify-between border-t border-gold/30 pt-3 font-serif text-2xl text-navy">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-ink/65">Prices in USD. Shipping and applicable taxes are calculated at checkout when configured.</p>
        {count >= 3 && (
          <p className="mt-4 rounded-sm bg-burgundy/5 p-3 text-sm text-burgundy">
            Your order may qualify for our offer: {siteConfig.offer.headline.toLowerCase()}. {siteConfig.offer.note}
          </p>
        )}
        <div className="mt-6 flex gap-3 rounded-sm border border-gold/40 bg-ivory p-4 text-sm text-ink/80" role="note">
          <Info className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
          <p>
            Online checkout is not yet available. To place your order, please{" "}
            <Link href="/contact?inquiry=Book%20order" className="text-gold-dark underline underline-offset-2 hover:text-navy">
              contact us
            </Link>{" "}
            and we will confirm the details with you.
          </p>
        </div>
        <Link href="/shop" className="mt-6 block text-center font-serif text-lg text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold-dark">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
