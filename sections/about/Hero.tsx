"use client";

import PageHero from "@/components/PageHero";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <PageHero
      badge="CORPORATE PROFILE"
      title="Engineering Beyond"
      highlight="Foundations"
      description="Established in 2018, Metal Infrastructures & Constructions Ltd. (MICON) combines BUET-trained engineering leadership, heavy fabrication facilities, and turnkey construction expertise to deliver reliable industrial infrastructure across Bangladesh."
      bgImage="/AboutBG.jpg"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
      primaryCta={{
        label: "Our Services",
        href: "/services",
        icon: ArrowRight,
      }}
      secondaryCta={{
        label: "Contact Us",
        href: "/contact",
        icon: PhoneCall,
      }}
    />
  );
}

