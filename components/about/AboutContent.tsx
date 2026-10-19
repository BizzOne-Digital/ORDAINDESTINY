import Image from "next/image";
import { images, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow, RuledHeading } from "@/components/ui/Ornaments";
import { BookComposition } from "@/components/home/BookIntro";
import { DoveIcon, HeartStarIcon, LotusIcon, MoonStarIcon } from "@/components/ui/ServiceIcons";

const themes = [
  { title: "Faith", text: "Reflections on trusting God through every season and drawing strength from a living relationship with Him.", Icon: DoveIcon },
  { title: "Calling & Purpose", text: "Encouragement to recognize your God-given gifts and step into the purpose you were created for.", Icon: LotusIcon },
  { title: "Family", text: "Thoughts on love, loyalty and the bonds that shape us, including the companionship that brings joy to daily life.", Icon: HeartStarIcon },
  { title: "Spiritual Growth", text: "An invitation to keep growing, to listen closely, and to hold on to the hope of restoration.", Icon: MoonStarIcon },
];

export function AboutIntro() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <Eyebrow>OUR STORY</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight text-navy sm:text-5xl">A ministry of faith, purpose and destiny</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              {siteConfig.name} was created by {siteConfig.owner}, who writes as <strong className="font-semibold text-navy">{siteConfig.author}</strong>.
              It is a place to explore faith, discover your calling, and walk with purpose.
            </p>
            <p>
              Through the book <em>{siteConfig.bookTitle}</em> and faith-based guidance, {siteConfig.name} encourages readers to seek God, reflect on
              their journey, and grow in hope.
            </p>
          </div>
        </div>
        <BookComposition />
      </div>
    </section>
  );
}

export function AboutBook() {
  return (
    <section className="bg-navy py-20 text-ivory sm:py-24">
      <div className="container-lux">
        <RuledHeading tone="light">
          <span className="text-3xl sm:text-4xl">About the book</span>
        </RuledHeading>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-ivory/80">
          <em className="text-ivory">{siteConfig.bookTitle}</em> invites readers to explore faith, discover their calling, and live with purpose.
          Written by {siteConfig.author}, the book reflects on spiritual growth, family, and the hope of restoration.
        </p>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map(({ title, text, Icon }) => (
            <li key={title} className="bg-navy p-8">
              <Icon className="h-12 w-12 text-gold" />
              <h3 className="mt-5 text-2xl text-ivory-50">{title}</h3>
              <p className="mt-3 text-ivory/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory py-20 text-center">
      <Image src={images.flowers} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ivory/95 via-ivory/85 to-ivory/50" />
      <div className="container-lux">
        <Eyebrow className="justify-center">BEGIN YOUR JOURNEY</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl text-navy sm:text-5xl">Take the next step in faith</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/75">Choose the edition that suits you, or reach out to learn more about faith-based guidance.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/shop" arrow>
            Discover the Book
          </ButtonLink>
          <ButtonLink href="/services" variant="outline-dark">
            Explore Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
