import Hero from "@/sections/about/Hero";
import Leader from "@/sections/about/Leader";
import MissionVision from "@/sections/about/MissionVision";
import Machinaries from "@/sections/about/Machinaries";
import TechnicalCapacity from "@/sections/about/TechnicalCapacity";
import CoreValues from "@/sections/about/CoreValues";
import Sustainability from "@/sections/about/Sustainability";
import CTA from "@/sections/about/CTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Leader />
      <MissionVision />
      <Machinaries />
      <TechnicalCapacity />
      <CoreValues />
      <Sustainability />
      <CTA />
    </div>
  );
}
