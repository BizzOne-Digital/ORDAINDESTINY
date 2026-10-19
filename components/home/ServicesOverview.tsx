import Image from "next/image";
import { images } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { RuledHeading } from "@/components/ui/Ornaments";
import { HeartStarIcon, LotusIcon, MoonStarIcon } from "@/components/ui/ServiceIcons";

const items = [
  { title: "Spiritual Consultation", text: "Gain clarity, wisdom and prayerful guidance for your unique journey.", Icon: LotusIcon },
  { title: "Dream Interpretation", text: "Explore the meaning and messages in your dreams through a faith-based lens.", Icon: MoonStarIcon },
  { title: "Relationships & Restoration", text: "Find faith-centered support for healthier, more fulfilling relationships.", Icon: HeartStarIcon },
];

export function ServicesOverview() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-ivory sm:py-20" aria-labelledby="services-heading">
      <Image src={images.palace} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/90" />
      <div className="container-lux">
        <RuledHeading tone="light">
          <span id="services-heading" className="text-3xl sm:text-4xl">Guidance for your journey</span>
        </RuledHeading>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {items.map(({ title, text, Icon }, i) => (
            <li key={title} className={`flex flex-col items-center px-6 text-center md:px-10 ${i > 0 ? "md:border-l md:border-gold/50" : ""}`}>
              <Icon className="h-14 w-14 text-gold" />
              <h3 className="mt-5 text-2xl text-ivory-50">{title}</h3>
              <p className="mt-2 max-w-xs text-ivory/75">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <ButtonLink href="/services" variant="outline-light" arrow>
            View All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
