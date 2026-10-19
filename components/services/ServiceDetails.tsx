import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Ornaments";
import { DoveIcon, HeartStarIcon, LotusIcon, MoonStarIcon } from "@/components/ui/ServiceIcons";

const services = [
  {
    title: "Spiritual Consultation",
    Icon: LotusIcon,
    summary: "A prayerful conversation to help you reflect on where you are and where God may be leading you.",
    points: ["Space to share your questions and season of life", "Scripture-centered reflection and prayer", "Encouragement as you discern your next steps"],
  },
  {
    title: "Dream Interpretation",
    Icon: MoonStarIcon,
    summary: "Explore dreams that have stayed with you and reflect on their possible meaning through a faith-based perspective.",
    points: ["Thoughtful discussion of symbols and themes", "Reflection grounded in faith and prayer", "Guidance on how to keep seeking understanding"],
  },
  {
    title: "Relationships & Family Support",
    Icon: HeartStarIcon,
    summary: "Faith-centered support as you navigate relationships with a spouse, family members, or others close to you.",
    points: ["A listening ear and prayerful perspective", "Encouragement toward healthy communication", "Reflection on love, forgiveness and reconciliation"],
  },
  {
    title: "Prayer, Deliverance & Restoration",
    Icon: DoveIcon,
    summary: "Time set aside for prayer and spiritual encouragement as you seek freedom, renewal and restoration in your walk with God.",
    points: ["Focused prayer for your situation", "Encouragement rooted in Scripture", "Support as you pursue spiritual renewal"],
  },
];

export function ServiceList() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">OUR SERVICES</Eyebrow>
          <h2 className="mt-5 text-4xl text-navy sm:text-5xl">Faith-based guidance, offered with care</h2>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map(({ title, Icon, summary, points }) => (
            <li key={title} className="flex flex-col rounded-sm border border-gold/35 bg-ivory-50 p-8 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(6,27,43,.4)] sm:p-10">
              <Icon className="h-14 w-14 text-gold-dark" />
              <h3 className="mt-6 text-3xl text-navy">{title}</h3>
              <p className="mt-3 text-ink/80">{summary}</p>
              <ul className="mt-6 space-y-3 border-t border-gold/25 pt-6">
                {points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-ink/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink/65">
          These services provide spiritual encouragement and faith-based perspective. They do not guarantee specific outcomes and are not a substitute for
          medical, psychological, legal or financial advice from a qualified professional.
        </p>
      </div>
    </section>
  );
}

export function ServicesCta() {
  return (
    <section className="silk py-16 text-center text-ivory sm:py-20">
      <div className="container-lux">
        <p className="font-serif text-2xl text-gold-light">{siteConfig.offer.eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-4xl text-ivory-50 sm:text-5xl">Request a consultation</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ivory/85">
          Share what is on your heart and we will be in touch. Eligible book orders under our current offer include a complimentary consultation.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact" arrow>
            Contact Us
          </ButtonLink>
          <ButtonLink href="/pricing#offer" variant="outline-light">
            View the Offer
          </ButtonLink>
        </div>
        <p className="mt-5 text-xs text-ivory/70">{siteConfig.offer.note}</p>
      </div>
    </section>
  );
}
