"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  image: string;
  featured?: boolean;
}

// ==================== CONFIGURATION ====================
const CONFIG = {
  section: {
    title: "FEATURED PROJECTS",
    heading: "Showcasing Excellence",
    subheading: "in Engineering & Construction",
  },
};

const projects: Project[] = [
  {
    id: "1",
    title: "Modern Industrial Complex",
    category: "PEB Steel Building",
    location: "Dhaka, Bangladesh",
    year: "2025",
    area: "50,000 sq.ft",
    description:
      "A state-of-the-art pre-engineered steel building designed for manufacturing excellence with sustainable features and modern infrastructure.",
    image: "/Steel Building/SB_1.png",
    featured: true,
  },
  {
    id: "2",
    title: "Commercial High-Rise Tower",
    category: "RCC Structure",
    location: "Chittagong, Bangladesh",
    year: "2024",
    area: "120,000 sq.ft",
    description:
      "Premium reinforced concrete structure with advanced engineering solutions for urban commercial development.",
    image: "/RCC/RCC_1.jpg",
  },
  {
    id: "3",
    title: "Green Manufacturing Facility",
    category: "Sustainable Construction",
    location: "Gazipur, Bangladesh",
    year: "2025",
    area: "80,000 sq.ft",
    description:
      "LEED-certified factory building with eco-friendly design, energy-efficient systems, and sustainable materials.",
    image: "/Green Buildings/GB_2.jpg",
  },
  {
    id: "4",
    title: "Advanced Water Treatment Plant",
    category: "ETP/WTP Facility",
    location: "Narayanganj, Bangladesh",
    year: "2024",
    area: "25,000 sq.ft",
    description:
      "Specialized facility construction with cutting-edge treatment technology and environmental compliance systems.",
    image: "/Facilities/FC_3.jpg",
  },
];

export default function FeaturedProjects() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs lg:text-sm font-semibold tracking-widest text-primary mb-3 lg:mb-4 uppercase"
          >
            {CONFIG.section.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
          >
            {CONFIG.section.heading}
            <br />
            <span className="text-primary">{CONFIG.section.subheading}</span>
          </motion.h2>
        </div>

        {/* Featured Project - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Image Container */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold mb-4"
                >
                  {featuredProject.category}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4"
                >
                  {featuredProject.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm md:text-base lg:text-lg text-white/90 mb-6 max-w-2xl"
                >
                  {featuredProject.description}
                </motion.p>

                {/* Project Meta Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-4 md:gap-6 mb-6"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm md:text-base">
                      {featuredProject.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm md:text-base">
                      {featuredProject.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm md:text-base">
                      {featuredProject.area}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="group/btn bg-white text-foreground hover:bg-white/90"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button
                      size="sm"
                      className="bg-white text-foreground hover:bg-white/90"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <Link href="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
