import Hero from "@/sections/services/Hero";
import ServicesList from "@/sections/services/ServicesList";
import Standards from "@/sections/services/Standards";
import ProcessFlow from "@/sections/services/ProcessFlow";
import CTA from "@/sections/services/CTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesList />
      <Standards />
      <ProcessFlow />
      <CTA />
    </div>
  );
}
