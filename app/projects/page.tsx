"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Calendar,
  Building2,
  ArrowRight,
  Filter,
  X,
} from "lucide-react";

// ==================== TYPES ====================
interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  image: string;
  tags: string[];
  status: "completed" | "ongoing" | "upcoming";
}

// ==================== CONFIGURATION ====================
const CONFIG = {
  hero: {
    badge: "OUR PORTFOLIO",
    title: "Engineering Excellence",
    subtitle: "Delivered Worldwide",
    description:
      "Explore our diverse portfolio of innovative projects spanning industrial facilities, sustainable buildings, and cutting-edge infrastructure solutions.",
  },
  categories: [
    { id: "all", label: "All Projects", count: 0 },
    { id: "peb-steel", label: "PEB Steel Building", count: 0 },
    { id: "rcc", label: "RCC Structure", count: 0 },
    { id: "green", label: "Green Buildings", count: 0 },
    { id: "facilities", label: "ETP/WTP Facilities", count: 0 },
  ],
};

// ==================== DATA ====================
const projects: Project[] = [
  {
    id: "1",
    title: "Modern Industrial Complex",
    category: "peb-steel",
    location: "Dhaka, Bangladesh",
    year: "2025",
    area: "50,000 sq.ft",
    description:
      "State-of-the-art pre-engineered steel building designed for manufacturing excellence with sustainable features and modern infrastructure.",
    image: "/Steel Building/SB_1.png",
    tags: ["Industrial", "Steel Structure", "LEED Certified"],
    status: "completed",
  },
  {
    id: "2",
    title: "Premium Steel Manufacturing Hub",
    category: "peb-steel",
    location: "Chittagong, Bangladesh",
    year: "2024",
    area: "75,000 sq.ft",
    description:
      "Large-scale industrial facility with advanced steel framework and energy-efficient design for optimal production capacity.",
    image: "/Steel Building/SB_2.jpg",
    tags: ["Manufacturing", "Industrial", "High-Rise"],
    status: "completed",
  },
  {
    id: "3",
    title: "Commercial High-Rise Tower",
    category: "rcc",
    location: "Chittagong, Bangladesh",
    year: "2024",
    area: "120,000 sq.ft",
    description:
      "Premium reinforced concrete structure with advanced engineering solutions for urban commercial development.",
    image: "/RCC/RCC_1.jpg",
    tags: ["Commercial", "Urban", "High-Rise"],
    status: "completed",
  },
  {
    id: "4",
    title: "Residential Complex RCC",
    category: "rcc",
    location: "Dhaka, Bangladesh",
    year: "2025",
    area: "95,000 sq.ft",
    description:
      "Modern residential building with robust concrete structure and contemporary architectural design.",
    image: "/RCC/RCC_2.jpg",
    tags: ["Residential", "Urban Living", "Modern"],
    status: "completed",
  },
  {
    id: "5",
    title: "Green Manufacturing Facility",
    category: "green",
    location: "Gazipur, Bangladesh",
    year: "2025",
    area: "80,000 sq.ft",
    description:
      "LEED-certified factory building with eco-friendly design, energy-efficient systems, and sustainable materials.",
    image: "/Green Buildings/GB_2.jpg",
    tags: ["Sustainable", "LEED Gold", "Eco-Friendly"],
    status: "completed",
  },
  {
    id: "6",
    title: "Sustainable Office Complex",
    category: "green",
    location: "Dhaka, Bangladesh",
    year: "2024",
    area: "65,000 sq.ft",
    description:
      "Green building featuring renewable energy systems, natural ventilation, and environmentally conscious design.",
    image: "/Green Buildings/GB_1.jpg",
    tags: ["Green Building", "Office", "Renewable Energy"],
    status: "completed",
  },
  {
    id: "7",
    title: "Advanced Water Treatment Plant",
    category: "facilities",
    location: "Narayanganj, Bangladesh",
    year: "2024",
    area: "25,000 sq.ft",
    description:
      "Specialized facility construction with cutting-edge treatment technology and environmental compliance systems.",
    image: "/Facilities/FC_3.jpg",
    tags: ["Water Treatment", "Environmental", "Technology"],
    status: "completed",
  },
  {
    id: "8",
    title: "Industrial ETP Facility",
    category: "facilities",
    location: "Gazipur, Bangladesh",
    year: "2025",
    area: "30,000 sq.ft",
    description:
      "Effluent treatment plant with advanced purification systems and sustainable waste management solutions.",
    image: "/Facilities/FC_1.jpg",
    tags: ["ETP", "Industrial", "Waste Management"],
    status: "ongoing",
  },
  {
    id: "9",
    title: "Premium Steel Warehouse",
    category: "peb-steel",
    location: "Sylhet, Bangladesh",
    year: "2024",
    area: "60,000 sq.ft",
    description:
      "High-capacity storage facility with modern steel construction and efficient space utilization.",
    image: "/Steel Building/SB_3.jpg",
    tags: ["Warehouse", "Storage", "Logistics"],
    status: "completed",
  },
];

// Update category counts
CONFIG.categories.forEach((cat) => {
  if (cat.id === "all") {
    cat.count = projects.length;
  } else {
    cat.count = projects.filter((p) => p.category === cat.id).length;
  }
});

// ==================== MAIN COMPONENT ====================
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-xl border border-primary/20 rounded-full mb-6 shadow-lg"
            >
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {CONFIG.hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 tracking-tight"
            >
              {CONFIG.hero.title}
              <br />
              <span className="text-primary">{CONFIG.hero.subtitle}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {CONFIG.hero.description}
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-blue-500/40 to-primary/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative flex items-center bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
                  <Search className="ml-5 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search projects by name, location, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 border-0 bg-transparent px-4 py-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mr-5 p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter Categories
              </span>
              <span className="text-xs text-muted-foreground">
                {filteredProjects.length} projects
              </span>
            </Button>
          </div>

          {/* Category Filters */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block overflow-x-auto scrollbar-hide`}
          >
            <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-4">
              {CONFIG.categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    relative group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300
                    ${
                      selectedCategory === category.id
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white/60 backdrop-blur-xl text-foreground hover:bg-white border border-gray-200/50 hover:border-primary/30 hover:shadow-md"
                    }
                  `}
                >
                  <span>{category.label}</span>
                  <span
                    className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${
                      selectedCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }
                  `}
                  >
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center lg:text-left">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
              {searchQuery && (
                <span>
                  {" "}
                  for "<span className="font-semibold">{searchQuery}</span>"
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              // Empty State
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    No Projects Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query to find what
                    you're looking for.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            ) : (
              // Projects Grid
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

// ==================== PROJECT CARD COMPONENT ====================
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div
            className={`
            px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border
            ${
              project.status === "completed"
                ? "bg-green-500/20 text-green-700 border-green-500/30"
                : project.status === "ongoing"
                ? "bg-blue-500/20 text-blue-700 border-blue-500/30"
                : "bg-orange-500/20 text-orange-700 border-orange-500/30"
            }
          `}
          >
            {project.status === "completed"
              ? "Completed"
              : project.status === "ongoing"
              ? "Ongoing"
              : "Upcoming"}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Category Badge - Bottom Left */}
          <div className="absolute bottom-4 left-4 z-10">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                {CONFIG.categories.find((c) => c.id === project.category)
                  ?.label || project.category}
              </span>
            </div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Button
              size="sm"
              className="bg-white text-foreground hover:bg-white/90 shadow-xl"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="truncate">{project.location.split(",")[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground col-span-2">
              <Building2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{project.area}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-gray-100 text-xs font-medium text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Blur Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
