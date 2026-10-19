import Image from "next/image";
import { images } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { BookMockup } from "@/components/ui/BookMockup";
import { Eyebrow } from "@/components/ui/Ornaments";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      {/* Architectural backdrop */}
      <Image src={images.heroArchitecture} alt="" fill priority sizes="100vw" className="-z-30 object-cover object-[70%_center] opacity-90" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-navy via-navy/70 to-navy/10" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-navy/90 via-transparent to-navy/20" />
      {/* Arch of warm light behind the book */}
      <div
        aria-hidden="true"
        className="absolute -z-10 hidden lg:block lg:right-[6%] lg:top-[8%] lg:h-[92%] lg:w-[36%] rounded-t-full bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,226,160,.55),rgba(198,160,82,.18)_45%,transparent_72%)]"
      />
      <div aria-hidden="true" className="absolute right-[-10%] top-[-20%] -z-10 h-[90%] w-[60%] rotate-12 bg-gradient-to-b from-gold-light/15 to-transparent blur-2xl" />


      <div className="container-lux grid items-center gap-12 py-16 sm:py-20 lg:min-h-[600px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow tone="light" className="motion-safe:animate-fade-up">FAITH • PURPOSE • DESTINY</Eyebrow>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] text-ivory-50 motion-safe:animate-fade-up sm:text-6xl lg:text-[4.25rem] [animation-delay:100ms] [text-shadow:0_2px_24px_rgba(0,0,0,.45)]">
            Unlock your destiny &amp; Supernatural Gifts
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/85 motion-safe:animate-fade-up sm:text-xl [animation-delay:200ms]">
            Discover your calling and live a life of faith, purpose, and possibility.
          </p>
          <div className="mt-9 flex flex-col gap-4 motion-safe:animate-fade-up sm:flex-row [animation-delay:300ms]">
            <ButtonLink href="/shop" arrow>
              Discover the Book
            </ButtonLink>
            <ButtonLink href="/about" variant="outline-light">
              Explore Our Story
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] motion-safe:animate-fade-up [animation-delay:250ms] lg:mr-0">
          <div className="relative z-10 mx-auto w-[66%] motion-safe:animate-float">
            <BookMockup hover depth={26} />
          </div>
          {/* Marble pedestal */}
          <div className="relative -mt-3 mx-auto w-[92%]" aria-hidden="true">
            <div className="marble relative h-8 rounded-[50%] border border-gold/40 shadow-[0_-6px_30px_rgba(255,220,150,.15)]" />
            <div className="marble -mt-4 h-20 rounded-b-lg border-x border-b border-gold/30 shadow-[0_30px_50px_-10px_rgba(0,0,0,.7)]">
              <div className="mx-6 h-px translate-y-4 bg-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
