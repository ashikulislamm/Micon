"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

const PARTNERS: Partner[] = [
  { name: "RAK Ceramics", logo: "/partners/RAK.png", website: "https://www.rakceramics.com/bangladesh/en-bd/" },
  { name: "TVS Motor", logo: "/partners/TVS.png", website: "https://www.tvsmotor.com/" },
  { name: "LafargeHolcim", logo: "/partners/Holcim.png", website: "https://lafargeholcim.com" },
  { name: "Bata Bangladesh", logo: "/partners/Bata.png", website: "https://www.batabd.com/" },
  { name: "Energypac", logo: "/partners/Energypac.png", website: "https://www.energypac.com/" },
  { name: "Anfords Bangladesh", logo: "/partners/Anfords.png", website: "https://anfords.com" },
  { name: "China Railway (CREC)", logo: "/partners/CREC.png" },
  { name: "Partex Star Group", logo: "/partners/Partex.png" },
  { name: "Saikam Logistics", logo: "/partners/Saikam.png" },
  { name: "Alliance Healthcare", logo: "/partners/Alliance.png" },
];

export default function Partners() {
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="STRATEGIC ALLIANCES"
          title="Trusted by Leading"
          subtitle="Industrial"
          alignment="center"
          className="mb-10 lg:mb-14"
        />

        {/* Infinite Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays for smooth edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8 animate-infinite-scroll py-2">
            {duplicatedPartners.map((partner, index) => {
              const CardContent = (
                <div className="relative w-full h-full flex items-center justify-center bg-card p-3 sm:p-4 transition-all duration-200 hover: shadow-xs group">
                  <div className="relative w-28 sm:w-36 h-12 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                    />
                  </div>
                </div>
              );

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-36 sm:w-44 lg:w-48 h-20 sm:h-22 flex items-center justify-center"
                >
                  {partner.website ? (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full"
                      aria-label={`Visit ${partner.name} website`}
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Endorsement Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            Single-Source EPC Contractor for Industrial Enterprises Across Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
}
