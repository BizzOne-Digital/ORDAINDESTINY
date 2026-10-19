import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";
import { Crown } from "@/components/ui/Ornaments";
import { CurrentYear } from "@/components/ui/CurrentYear";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ivory text-navy">
      <div className="container-lux py-14">
        <div className="grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
          <Logo />
          <div className="md:border-l md:border-gold/60 md:pl-12">
            <p className="font-serif text-lg">Connect with Ordain Destiny</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-3 hover:text-gold-dark">
                  <Mail className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="inline-flex items-center gap-3 hover:text-gold-dark">
                  <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 font-serif">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gold/60" />
          <Crown className="h-4 w-6 text-gold" />
          <p className="text-[11px] uppercase tracking-eyebrow text-gold-dark">FAITH • PURPOSE • DESTINY</p>
        </div>
        <p className="mt-6 text-sm text-ink/70">
          © <CurrentYear initial={year} /> {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
