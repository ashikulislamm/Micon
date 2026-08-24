"use client";

import PageHero from "@/components/PageHero";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <PageHero
      badge="OUR CAPABILITIES"
      title="Comprehensive Construction &"
      highlight="Engineering Solutions"
      description="From 60m+ clear span PEB steel buildings to turnkey RCC structures, environmental treatment plants, and 3D BIM technology — MICON delivers end-to-end industrial excellence."
      bgImage="/Steel Building/SB_2.jpg"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Our Services" },
      ]}
      primaryCta={{
        label: "Request Engineering Proposal",
        href: "/quote",
        icon: ArrowRight,
      }}
      secondaryCta={{
        label: "View Executed Projects",
        href: "/projects",
        icon: FileText,
      }}
    />
  );
}
