import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Ornaments";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} about book orders, spiritual consultation, dream interpretation, or relationships and restoration.`,
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ inquiry?: string }> }) {
  const { inquiry } = await searchParams;
  return (
    <>
      <PageHero eyebrow="CONTACT" title="We would love to hear from you" intro="Questions about the book, an order, or a consultation? Send a message and we will be in touch." />
      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-lux grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <aside>
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h2 className="mt-5 text-4xl text-navy">Connect with {siteConfig.name}</h2>
            <p className="mt-4 text-ink/75">Reach out directly by email or phone, or use the form.</p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 rounded-sm border border-gold/40 bg-ivory-50 p-5 hover:border-gold">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-gold">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-eyebrow text-gold-dark">Email</span>
                    <span className="block break-all font-serif text-xl text-navy group-hover:text-gold-dark">{siteConfig.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="group flex items-center gap-4 rounded-sm border border-gold/40 bg-ivory-50 p-5 hover:border-gold">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-gold">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-eyebrow text-gold-dark">Phone</span>
                    <span className="block font-serif text-xl text-navy group-hover:text-gold-dark">{siteConfig.phone}</span>
                  </span>
                </a>
              </li>
            </ul>
          </aside>
          <div className="rounded-sm border border-gold/35 bg-ivory-50/60 p-6 sm:p-10">
            <h2 className="mb-8 text-3xl text-navy">Send a message</h2>
            <ContactForm defaultInquiry={inquiry} />
          </div>
        </div>
      </section>
    </>
  );
}
