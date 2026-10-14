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
  title: "About Us - Metal Infrastructures & Constructions Ltd. (MICON)",
  description:
    "Metal Infrastructures & Constructions Ltd. (MICON) is an ISO 9001:2015 and PWD Class-A certified design-build contractor led by BUET alumni with 15+ years of leadership, specializing in pre-engineered steel buildings and turnkey industrial civil engineering across Bangladesh.",
  keywords: [
    "about MICON",
    "Metal Infrastructures & Constructions Ltd",
    "construction company Bangladesh",
    "BUET civil engineering leadership",
    "Engr Noman Or Rashid",
    "PEB steel building manufacturer",
    "PWD Class-A contractor",
    "ISO 9001:2015 certified construction",
    "turnkey industrial construction",
    "sustainable green factory Bangladesh",
  ],
  openGraph: {
    title: "About MICON - Building Beyond Foundations",
    description:
      "ISO 9001:2015 and PWD Class-A certified engineering firm led by BUET alumni, delivering 100+ turnkey PEB steel and industrial civil infrastructure projects across Bangladesh.",
    url: "https://www.miconbd.com/about",
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
