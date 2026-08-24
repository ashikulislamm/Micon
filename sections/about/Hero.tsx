"use client";

import PageHero from "@/components/PageHero";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <PageHero
      badge="WHO WE ARE"
      title="About MICON &"
      highlight="Our Resources"
      description="With all of our resources and infrastructure, delivering excellence and structural longevity to our industrial customers across Bangladesh is our highest priority."
      bgImage="/AboutBG.jpg"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
      primaryCta={{
        label: "Explore Capabilities",
        href: "/services",
        icon: ArrowRight,
      }}
      secondaryCta={{
        label: "Download Brochure",
        href: "/quote",
        icon: Download,
      }}
    />
  );
}
