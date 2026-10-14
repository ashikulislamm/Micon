"use client";

import PageHero from "@/components/PageHero";
import { ArrowRight, FolderOpen } from "lucide-react";

export default function Hero() {
  return (
    <PageHero
      badge="OUR SERVICES"
      title="Engineering Solutions,"
      highlight="Design to Handover"
      description="Design-build PEB steel buildings, turnkey RCC and steel structures, treatment plant facilities and more, delivered under one contract."
      bgImage="/Steel Building/SB_2.jpg"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
      primaryCta={{
        label: "Request Proposal",
        href: "/quote",
        icon: ArrowRight,
      }}
      secondaryCta={{
        label: "View Projects",
        href: "/projects",
        icon: FolderOpen,
      }}
    />
  );
}
