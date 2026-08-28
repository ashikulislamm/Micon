import { Metadata } from "next";
import Hero from "@/sections/home/Hero";
import { Certifications } from "@/sections/home/Certifications";
import Expertise from "@/sections/home/Expertise";
import DesignBuildProcess from "@/sections/home/DesignBuildProcess";
import MachineryFleet from "@/sections/home/MachineryFleet";
import Stats from "@/sections/home/Stats";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import CTA from "@/sections/home/CTA";
import Partners from "@/sections/home/Partners";

export const metadata: Metadata = {
  title: "MICON - Leading Construction & Engineering Company in Bangladesh",
  description:
    "MICON (Metal Infrastructures & Constructions Ltd) is Bangladesh's premier ISO 9001:2015 certified industrial construction company. Specializing in PEB Steel Buildings, Turnkey RCC Civil Structures, ETP/WTP Facilities, Retrofitting, and BIM 3D Modeling across Dhaka, Chittagong, Gazipur, Narayanganj & SEZs.",
  keywords: [
    "construction company Bangladesh",
    "PEB steel building contractor Bangladesh",
    "pre engineered building Dhaka",
    "turnkey industrial construction Bangladesh",
    "ETP WTP plant construction company",
    "factory construction contractor Gazipur",
    "warehouse construction Chittagong",
    "LEED green building contractor",
    "structural retrofitting Accord RSC audit Bangladesh",
    "BIM 3D structural modeling Bangladesh",
    "precast boundary wall construction",
    "ISO certified construction company Bangladesh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MICON - Leading Construction & Engineering Solutions in Bangladesh",
    description:
      "ISO 9001:2015 certified engineering firm delivering 60m+ clear span PEB steel buildings, turnkey RCC structures, treatment plants, and BIM 3D modeling across Bangladesh.",
    url: "https://www.micon.com.bd",
    siteName: "MICON",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MICON - Leading Construction & Engineering Solutions",
    description:
      "Bangladesh's trusted construction partner for PEB Steel Buildings, Turnkey RCC, ETP/WTP Plants, and BIM Technology.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Certifications />
      <Expertise />
      <Stats />
      <DesignBuildProcess />
      <MachineryFleet />
      <FeaturedProjects />
      <Partners />
      <CTA />
    </div>
  );
}
