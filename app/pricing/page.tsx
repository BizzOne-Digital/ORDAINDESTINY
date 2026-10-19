import type { Metadata } from "next";
import { products } from "@/lib/products";
import { images } from "@/lib/site-config";
import { PageHero } from "@/components/ui/PageHero";
import { RuledHeading } from "@/components/ui/Ornaments";
import { ProductCard } from "@/components/shop/ProductCard";
import { SpecialOffer } from "@/components/home/SpecialOffer";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing for every edition of God, Divine Dogs and Royals: softcover, hardcover, eBook and audiobook.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICING"
        title="Choose the edition for your journey"
        intro="Every edition carries the same message of faith, calling and restoration. Choose the format that fits the way you read or listen."
        image={images.library}
      />
      <section className="bg-ivory py-20 sm:py-24" aria-labelledby="pricing-heading">
        <div className="container-lux">
          <RuledHeading className="mb-12">
            <span id="pricing-heading" className="text-3xl sm:text-4xl">All editions</span>
          </RuledHeading>
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-sm text-ink/65">
            Prices are shown in USD. Shipping and applicable taxes are calculated at checkout when configured.
          </p>
        </div>
      </section>
      <SpecialOffer id="offer" />
    </>
  );
}
