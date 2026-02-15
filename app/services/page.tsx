import { Metadata } from "next";
import Hero from "@/sections/services/Hero";
import ServicesList from "@/sections/services/ServicesList";
import Standards from "@/sections/services/Standards";
import ProcessFlow from "@/sections/services/ProcessFlow";
import CTA from "@/sections/services/CTA";

export const metadata: Metadata = {
  title: "Our Services - Complete Engineering & Construction Solutions",
  description:
    "Explore MICON's comprehensive construction services: PEB Steel Buildings, Turnkey RCC & Steel Structures, ETP/WTP/STP Plants, Boundary Walls, Retrofitting, Industrial Infrastructure, and BIM Technology Implementation.",
  keywords: [
    "construction services Bangladesh",
    "pre-engineered building services",
    "turnkey construction",
    "treatment plant construction",
    "boundary wall construction",
    "retrofitting services",
    "BIM implementation",
    "modular construction",
    "industrial construction services",
    "utility infrastructure construction",
  ],
  openGraph: {
    title: "Our Services - MICON Engineering Solutions",
    description:
      "7 specialized construction services including Design-Build PEB, Turnkey RCC & Steel, Treatment Plants, Boundary Walls, Retrofitting, Infrastructure, and BIM Technology.",
    url: "https://www.micon.com.bd/services",
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
