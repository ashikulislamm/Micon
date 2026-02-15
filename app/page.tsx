import { Metadata } from "next";
import Hero from "@/sections/home/Hero";
import { Certifications } from "@/sections/home/Certifications";
import Expertise from "@/sections/home/Expertise";
import Stats from "@/sections/home/Stats";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
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
    description: "Transform your industrial vision into reality with Bangladesh's trusted construction partner.",
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

      {/* Extra content to test scroll behavior */}
      <section className="min-h-screen flex items-center justify-center bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Additional Sections Coming Soon
          </h2>
          <p className="text-muted-foreground">
            Hero section is complete - test the responsive design and animations
          </p>
        </div>
      </section>
    </div>
  );
}
