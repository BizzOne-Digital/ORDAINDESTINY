import type { Metadata } from "next";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopGrid } from "@/components/shop/ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description: `Shop ${siteConfig.bookTitle} by ${siteConfig.author} in softcover, hardcover, eBook and audiobook.`,
};

export default function ShopPage() {
  const cards = Object.fromEntries(products.map((p) => [p.slug, <ProductCard key={p.slug} product={p} />]));
  return (
    <>
      <PageHero eyebrow="THE SHOP" title={siteConfig.bookTitle} intro={`By ${siteConfig.author}. Choose your edition below.`} />
      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-lux">
          <ShopGrid products={products} cards={cards} />
          <p className="mt-10 text-center text-sm text-ink/65">{siteConfig.offer.headline}. {siteConfig.offer.note}</p>
        </div>
      </section>
    </>
  );
}
