import Image from "next/image";
import { images, siteConfig } from "@/lib/site-config";
import { BookMockup } from "@/components/ui/BookMockup";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Ornaments";

/** Book composition on marble with flowers. Also reused on the About page. */
export function BookComposition() {
  return (
    <div className="relative isolate aspect-[3/2] overflow-hidden rounded-sm bg-ivory-200">
      {/* Photo already includes the marble table, crown and magnolias; the book sits on the table. */}
      <Image src={images.library} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      <div className="absolute bottom-[22%] left-1/2 w-[28%] -translate-x-1/2">
        <BookMockup depth={20} hover />
      </div>
    </div>
  );
}

export function BookIntro() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BookComposition />
        <div className="max-w-xl">
          <Eyebrow>THE BOOK</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight text-navy sm:text-5xl">
            A journey of faith.
            <br />
            A life of purpose.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            <strong className="font-semibold text-navy">{siteConfig.bookTitle}</strong> invites readers to explore faith, discover their calling,
            and live with purpose. Written by {siteConfig.author}, the book reflects on spiritual growth, family, and the hope of restoration.
          </p>
          <TextLink href="/about" className="mt-8">
            Explore the Book
          </TextLink>
        </div>
      </div>
    </section>
  );
}
