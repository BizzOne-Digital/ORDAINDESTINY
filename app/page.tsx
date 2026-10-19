import { Hero } from "@/components/home/Hero";
import { BookIntro } from "@/components/home/BookIntro";
import { Editions } from "@/components/home/Editions";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SpecialOffer } from "@/components/home/SpecialOffer";
import { ContactStrip, HomeFaq, JourneySteps, MissionBand, WhatYoullDiscover } from "@/components/home/MoreSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookIntro />
      <WhatYoullDiscover />
      <Editions />
      <ServicesOverview />
      <JourneySteps />
      <MissionBand />
      <SpecialOffer />
      <HomeFaq />
      <ContactStrip />
    </>
  );
}
