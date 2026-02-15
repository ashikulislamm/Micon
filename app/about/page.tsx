import { Metadata } from "next";
import Hero from "@/sections/about/Hero";
import Leader from "@/sections/about/Leader";
import MissionVision from "@/sections/about/MissionVision";
import Machinaries from "@/sections/about/Machinaries";
import TechnicalCapacity from "@/sections/about/TechnicalCapacity";
import CoreValues from "@/sections/about/CoreValues";
import Sustainability from "@/sections/about/Sustainability";
import CTA from "@/sections/about/CTA";

export const metadata: Metadata = {
  title: "About Us - MICON Engineering Excellence",
  description:
    "Learn about MICON's journey as a leading construction company in Bangladesh. Discover our mission, vision, core values, technical capacity, and commitment to sustainable engineering with ISO 9001:2015 certification.",
  keywords: [
    "about MICON",
    "construction company Bangladesh",
    "engineering company profile",
    "ISO certified construction",
    "sustainable construction",
    "construction company history",
    "engineering expertise",
    "technical capacity",
  ],
  openGraph: {
    title: "About MICON - Engineering Excellence Since 2017",
    description:
      "ISO 9001:2015 certified construction company with 7+ years of excellence, 30+ industry experts, and 100+ successful projects across Bangladesh.",
    url: "https://www.micon.com.bd/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Leader />
      <MissionVision />
      <Machinaries />
      <TechnicalCapacity />
      <CoreValues />
      <Sustainability />
      <CTA />
    </div>
  );
}
