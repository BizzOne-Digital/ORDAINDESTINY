import type { Metadata } from "next";
import { images, siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/ui/PageHero";
import { AboutBook, AboutCta, AboutIntro } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, created by ${siteConfig.owner} writing as ${siteConfig.author}, and the book ${siteConfig.bookTitle}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="Faith, calling and the hope of restoration"
        intro={`Meet ${siteConfig.name} and the heart behind ${siteConfig.bookTitle}.`}
        image={images.library}
      />
      <AboutIntro />
      <AboutBook />
      <AboutCta />
    </>
  );
}
