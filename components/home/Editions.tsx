import { products } from "@/lib/products";
import { RuledHeading } from "@/components/ui/Ornaments";
import { EditionCard } from "@/components/shop/EditionCard";

export function Editions() {
  return (
    <section className="bg-ivory py-20 sm:py-24" aria-labelledby="editions-heading">
      <div className="container-lux">
        <RuledHeading className="mb-10">
          <span id="editions-heading" className="font-sans text-xs font-medium uppercase tracking-eyebrow text-gold-dark">
            Choose your edition
          </span>
        </RuledHeading>
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug}>
              <EditionCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
