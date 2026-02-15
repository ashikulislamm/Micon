"use client";

import React from "react";

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

// ==================== CONFIGURATION ====================
// Customize the component behavior and appearance here

const CONFIG = {
  // Animation settings
  animationDuration: 40, // seconds (lower = faster)
  animationDurationMobile: 30, // seconds for mobile devices
  pauseOnHover: true, // pause animation when hovering

  // Display settings
  showStatsBanner: true, // show "Trusted by X+" banner at bottom
  totalPartners: 50, // number to display in stats banner
  useGrayscaleEffect: true, // apply grayscale filter to logos

  // Section content
  section: {
    title: "GLOBAL STRATEGIC PARTNERS",
  },
};

const partners: Partner[] = [
  { name: "RAK", logo: "/partners/RAK.png", website: "https://www.rakceramics.com/bangladesh/en-bd/" },
  { name: "TVS", logo: "/partners/TVS.png", website: "https://www.tvsmotor.com/" },
  {
    name: "LafargeHolcim",
    logo: "/partners/Holcim.png",
    website: "https://lafargeholcim.com",
  },
  { name: "Bata", logo: "/partners/Bata.png", website: "https://www.batabd.com/" },
  {
    name: "Energypac",
    logo: "/partners/Energypac.png",
    website: "https://www.energypac.com/",
  },
  {
    name: "Anfords",
    logo: "/partners/Anfords.png",
    website: "https://anfords.com",
  },
  { name: "CREC", logo: "/partners/CREC.png" },
  { name: "Partex", logo: "/partners/Partex.png" },
  { name: "Saikam", logo: "/partners/Saikam.png" },
];

// ======================================================

export default function Partners() {
  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm md:text-base font-normal tracking-[0.2em] text-gray-400 uppercase">
            {CONFIG.section.title}
          </h2>
        </div>

        {/* Infinite Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex gap-8 md:gap-12 lg:gap-16 animate-infinite-scroll">
            {duplicatedPartners.map((partner, index) => {
              const CardContent = (
                <div className="relative w-full h-full flex items-center justify-center bg-card border border-border rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50">
                  {/* Placeholder for logo - replace with actual images */}
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Uncomment when you have actual logos */}
                    {
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                          CONFIG.useGrayscaleEffect
                            ? "filter grayscale group-hover:grayscale-0"
                            : ""
                        }`}
                      />
                    }
                  </div>
                </div>
              );

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-32 md:w-40 lg:w-48 h-20 md:h-24 lg:h-28 flex items-center justify-center group"
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

        {/* Optional: Stats or Trust Indicators */}
        {CONFIG.showStatsBanner && (
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-sm md:text-base text-muted-foreground">
              Trusted by{" "}
              <span className="font-bold text-foreground">
                {CONFIG.totalPartners}+
              </span>{" "}
              industry leaders worldwide
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
