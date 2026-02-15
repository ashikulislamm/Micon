import Hero from "@/sections/home/Hero";
import { Certifications } from "@/sections/home/Certifications";
import Expertise from "@/sections/home/Expertise";
import Stats from "@/sections/home/Stats";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import Partners from "@/sections/home/Partners";

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
