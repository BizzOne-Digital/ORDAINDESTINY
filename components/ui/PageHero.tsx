import Image from "next/image";
import { images } from "@/lib/site-config";
import { Sprig } from "./Ornaments";

export function PageHero({
  eyebrow, title, intro, image = images.heroArchitecture, children,
}: { eyebrow: string; title: string; intro?: string; image?: string; children?: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      <div className="absolute -right-24 top-0 -z-10 h-[140%] w-1/2 rounded-full bg-gold/10 blur-3xl" />
      <Sprig className="absolute -bottom-6 left-2 h-48 w-28 text-gold/30 sm:left-6" />
      <Sprig className="absolute -bottom-6 right-2 h-48 w-28 -scale-x-100 text-gold/30 sm:right-6" />
      <div className="container-lux relative py-20 text-center sm:py-28">
        <p className="text-xs font-medium uppercase tracking-eyebrow text-gold-light motion-safe:animate-fade-up">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight motion-safe:animate-fade-up sm:text-5xl lg:text-6xl [animation-delay:120ms]">
          {title}
        </h1>
        <div className="gold-rule mx-auto mt-7 w-40" />
        {intro && <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/80 motion-safe:animate-fade-up [animation-delay:220ms]">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
