import type { Metadata } from "next";
import { images } from "@/lib/site-config";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceList, ServicesCta } from "@/components/services/ServiceDetails";

export const metadata: Metadata = {
  title: "Services",
  description: "Faith-based spiritual consultation, dream interpretation, relationships and family support, and prayer for restoration.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="GUIDANCE FOR YOUR JOURNEY"
        title="Prayerful support for every season"
        intro="Faith-centered conversations to help you reflect, seek God, and move forward with clarity and hope."
        image={images.palace}
      />
      <ServiceList />
      <ServicesCta />
    </>
  );
}
