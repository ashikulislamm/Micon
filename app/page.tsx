import { Metadata } from "next";
import Hero from "@/sections/home/Hero";
import { Certifications } from "@/sections/home/Certifications";
import Expertise from "@/sections/home/Expertise";
import Stats from "@/sections/home/Stats";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import CTA from "@/sections/home/CTA";
import Partners from "@/sections/home/Partners";

export const metadata: Metadata = {
  title: "Home - Leading Construction & Engineering Solutions in Bangladesh",
  description:
    "MICON is Bangladesh's premier construction company specializing in PEB Steel Buildings, Turnkey RCC & Steel Structures, Treatment Plants, and advanced BIM Technology. ISO 9001:2015 certified with 100+ successful projects.",
  keywords: [
    "construction company Bangladesh",
    "best construction company",
    "industrial construction",
    "PEB steel buildings Bangladesh",
    "factory construction",
    "warehouse construction",
    "engineering solutions",
  ],
  openGraph: {
    title: "MICON - Leading Construction & Engineering Solutions",
    description:
      "Transform your industrial vision into reality with Bangladesh's trusted construction partner.",
    url: "https://www.micon.com.bd",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Certifications />
      <Expertise />
      <Stats />
      <FeaturedProjects />
      
      <Partners />
      <CTA />
    </div>
  );
}
