import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronLeft } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { formatPrice } from "@/lib/utils";
import { FormatMockup } from "@/components/ui/FormatMockup";
import { RuledHeading } from "@/components/ui/Ornaments";
import { AddToCart } from "@/components/cart/AddToCart";
import { EditionCard } from "@/components/shop/EditionCard";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${siteConfig.bookTitle} (${product.name})`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-ivory">
        <div aria-hidden="true" className="absolute left-[8%] top-[10%] -z-10 h-[80%] w-[40%] rounded-t-full bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,226,160,.35),transparent_70%)]" />
        <div className="container-lux py-10">
          <Link href="/shop" className="inline-flex items-center gap-1 text-sm text-ivory/75 hover:text-gold-light">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back to shop
          </Link>
        </div>
        <div className="container-lux grid items-center gap-12 pb-20 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-sm">
            <FormatMockup kind={product.mockup} className="mx-auto w-[70%]" />
          </div>
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-eyebrow text-gold-light">{product.name} edition</p>
            <h1 className="mt-4 text-4xl leading-tight text-ivory-50 sm:text-5xl">{siteConfig.bookTitle}</h1>
            <p className="mt-2 font-serif text-xl text-ivory/80">by {siteConfig.author}</p>
            <p className="mt-6 font-serif text-4xl text-gold-light">{formatPrice(product.price)}</p>
            <p className="mt-6 text-lg leading-relaxed text-ivory/80">{product.description}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-gold/30 py-5 text-sm">
              <div>
                <dt className="text-ivory/60">Format</dt>
                <dd className="mt-1 text-ivory">{product.name}</dd>
              </div>
              <div>
                <dt className="text-ivory/60">Author</dt>
                <dd className="mt-1 text-ivory">{siteConfig.author}</dd>
              </div>
            </dl>
            <ul className="mt-6 space-y-2 text-ivory/85">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-sm bg-ivory p-5 text-ink">
              <AddToCart slug={product.slug} name={product.name} />
              <p className="text-xs text-ink/60">Shipping and applicable taxes are calculated at checkout when configured.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20" aria-labelledby="related-heading">
        <div className="container-lux">
          <RuledHeading className="mb-10">
            <span id="related-heading" className="text-3xl sm:text-4xl">Other editions</span>
          </RuledHeading>
          <ul className="grid gap-5 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <EditionCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
