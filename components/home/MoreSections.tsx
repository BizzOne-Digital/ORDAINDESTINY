import Image from "next/image";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { images, siteConfig } from "@/lib/site-config";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { Eyebrow, RuledHeading } from "@/components/ui/Ornaments";
import { BookMockup } from "@/components/ui/BookMockup";
import { DoveIcon, HeartStarIcon, LotusIcon, MoonStarIcon } from "@/components/ui/ServiceIcons";

const discover = [
  { title: "Faith", text: "Reflections on trusting God through every season of life.", Icon: DoveIcon },
  { title: "Calling", text: "Encouragement to recognize your gifts and the purpose you were created for.", Icon: LotusIcon },
  { title: "Family", text: "Thoughts on love, loyalty and the companionship that brings joy to daily life.", Icon: HeartStarIcon },
  { title: "Restoration", text: "An invitation to keep growing and hold on to the hope of renewal.", Icon: MoonStarIcon },
];

/** Themes explored in the book. Navy band between the ivory sections. */
export function WhatYoullDiscover() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-ivory sm:py-24" aria-labelledby="discover-heading">
      <div aria-hidden="true" className="absolute -left-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-lux grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto w-full max-w-[260px]">
          <BookMockup depth={24} hover />
        </div>
        <div>
          <Eyebrow tone="light">INSIDE THE BOOK</Eyebrow>
          <h2 id="discover-heading" className="mt-5 text-4xl leading-tight text-ivory-50 sm:text-5xl">
            What you will discover
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-gold/30 bg-gold/30 sm:grid-cols-2">
            {discover.map(({ title, text, Icon }) => (
              <li key={title} className="bg-navy p-7">
                <Icon className="h-11 w-11 text-gold" />
                <h3 className="mt-4 text-2xl text-ivory-50">{title}</h3>
                <p className="mt-2 text-ivory/75">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Choose your edition", text: "Softcover, hardcover, eBook or audiobook: pick the format that suits how you read or listen.", href: "/shop", cta: "Shop the Book" },
  { n: "02", title: "Read and reflect", text: "Take time with each chapter. Let its reflections on faith, family and purpose speak to your season.", href: "/about", cta: "About the Book" },
  { n: "03", title: "Seek guidance", text: "When you want to go deeper, request a faith-based consultation and share what is on your heart.", href: "/services", cta: "View Services" },
];

export function JourneySteps() {
  return (
    <section className="bg-ivory py-20 sm:py-24" aria-labelledby="steps-heading">
      <div className="container-lux">
        <RuledHeading>
          <span id="steps-heading" className="text-3xl sm:text-4xl">Begin your journey</span>
        </RuledHeading>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative flex flex-col rounded-sm border border-gold/35 bg-ivory-50 p-8 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(6,27,43,.4)]">
              <span className="font-serif text-5xl text-gold" aria-hidden="true">{s.n}</span>
              <h3 className="mt-4 text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 flex-1 text-ink/75">{s.text}</p>
              <TextLink href={s.href} className="mt-6 text-base">
                {s.cta}
              </TextLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Mission statement for the ministry. Written as the site's voice, not as an attributed quote. */
export function MissionBand() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28" aria-labelledby="mission-heading">
      <Image src={images.flowers} alt="" fill sizes="100vw" className="-z-20 object-cover object-right" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ivory via-ivory/90 to-ivory/30" />
      <div className="container-lux">
        <div className="max-w-xl">
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2 id="mission-heading" className="mt-5 text-4xl leading-tight text-navy sm:text-5xl">
            Helping you walk in faith, purpose and destiny
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            {siteConfig.name} was created by {siteConfig.owner}, writing as {siteConfig.author}, to encourage readers to seek God, discover their
            calling and hold on to the hope of restoration through the book and faith-based guidance.
          </p>
          <ButtonLink href="/about" variant="outline-dark" arrow className="mt-8">
            Explore Our Story
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Which editions are available?",
    a: `${siteConfig.bookTitle} is available as a softcover, hardcover, eBook and audiobook. Every edition carries the same message.`,
  },
  {
    q: "How do I place an order?",
    a: "Add your editions to the cart to review your selection, then contact us to complete your order. Online checkout is not yet available.",
  },
  {
    q: "How does the current offer work?",
    a: `${siteConfig.offer.headline}, ${siteConfig.offer.sub.toLowerCase()}. ${siteConfig.offer.note}`,
  },
  {
    q: "What happens in a consultation?",
    a: "A consultation is a prayerful, faith-based conversation about your questions and season of life. It offers spiritual encouragement and does not guarantee specific outcomes or replace professional medical, legal or financial advice.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-ivory py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="container-lux max-w-3xl">
        <RuledHeading>
          <span id="faq-heading" className="text-3xl sm:text-4xl">Questions</span>
        </RuledHeading>
        <div className="mt-12 divide-y divide-gold/30 border-y border-gold/30">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-xl text-navy hover:text-gold-dark [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-gold-dark transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-5 leading-relaxed text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-ivory" aria-labelledby="contact-strip-heading">
      <Image src={images.palace} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/70" />
      <div className="container-lux flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div>
          <h2 id="contact-strip-heading" className="text-3xl text-ivory-50 sm:text-4xl">
            Have a question or prayer request?
          </h2>
          <p className="mt-2 text-ivory/75">We would love to hear from you.</p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-ivory/90 hover:text-gold-light">
            <Mail className="h-4 w-4 text-gold" aria-hidden="true" /> {siteConfig.email}
          </a>
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-ivory/90 hover:text-gold-light">
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {siteConfig.phone}
          </a>
          <ButtonLink href="/contact" arrow>
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
