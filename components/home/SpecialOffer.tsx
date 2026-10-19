import Image from "next/image";
import { images, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { Crown, Sprig } from "@/components/ui/Ornaments";

export function SpecialOffer({ id }: { id?: string }) {
  const { offer } = siteConfig;
  return (
    <section id={id} className="silk relative isolate overflow-hidden py-16 text-ivory sm:py-20" aria-labelledby="offer-heading">
      <Image src={images.specialOffer} alt="" fill sizes="100vw" className="-z-20 object-cover object-[center_65%]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-burgundy/65 md:bg-gradient-to-r md:from-burgundy/25 md:via-burgundy/65 md:to-burgundy/35" />
      <Sprig className="absolute -right-4 bottom-0 -z-10 h-72 w-44 -scale-x-100 text-gold/50" />
      <Sprig className="absolute -left-6 top-0 -z-10 h-40 w-24 rotate-180 text-gold/30 md:hidden" />
      <div className="container-lux relative text-center">
        <p className="flex items-center justify-center gap-3 font-serif text-2xl text-gold-light">
          <span className="h-px w-6 bg-gold-light/70" aria-hidden="true" />
          {offer.eyebrow}
          <span className="h-px w-6 bg-gold-light/70" aria-hidden="true" />
        </p>
        <h2 id="offer-heading" className="mt-3 text-4xl text-ivory-50 sm:text-5xl">
          {offer.headline}
        </h2>
        <p className="mt-3 text-xl text-ivory/90">{offer.sub}</p>
        <ButtonLink href="/pricing#offer" arrow className="mt-8">
          Explore the Offer
        </ButtonLink>
        <p className="mx-auto mt-5 flex max-w-md items-center justify-center gap-2 text-xs text-ivory/70">
          <Crown className="h-3 w-4 shrink-0 text-gold" />
          {offer.note}
        </p>
      </div>
    </section>
  );
}
