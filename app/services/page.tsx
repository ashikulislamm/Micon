import { Metadata } from "next";
import Hero from "@/sections/services/Hero";
import ServicesList from "@/sections/services/ServicesList";
import Standards from "@/sections/services/Standards";
import ProcessFlow from "@/sections/services/ProcessFlow";
import CTA from "@/sections/services/CTA";

export const metadata: Metadata = {
  title: "Our Services - Design-Build Steel, Turnkey RCC & Treatment Plants | MICON",
  description:
    "MICON's seven service lines: Design-Build PEB Steel Buildings, Turnkey RCC & Steel Structures, ETP/WTP/STP/RMS Rooms, Boundary Walls, Structural Retrofitting, Industrial Utility Infrastructure, and BIM & Modular Construction.",
  keywords: [
    "construction services Bangladesh",
    "pre-engineered steel building Bangladesh",
    "turnkey construction",
    "ETP WTP STP construction",
    "boundary wall construction",
    "structural retrofitting",
    "BIM implementation",
    "modular construction",
    "industrial construction services",
    "utility infrastructure construction",
  ],
  openGraph: {
    title: "Our Services - MICON",
    description:
      "Seven engineering and construction service lines delivered design-build by an ISO 9001:2015 certified, PWD Class-A contractor.",
    url: "https://www.miconbd.com/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesList />
      <Standards />
      <ProcessFlow />
      <CTA />
    </div>
  );
}
