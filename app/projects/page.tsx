"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { Search, Building2, Filter, X } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "peb-steel", label: "PEB Steel Building" },
  { id: "rcc", label: "RCC Structure" },
  { id: "green", label: "Green Buildings" },
  { id: "facilities", label: "ETP/WTP Facilities" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-background">
      {/* Symmetrical Dark Page Hero */}
      <PageHero
        badge="OUR PORTFOLIO"
        title="Engineering Excellence"
        highlight="Delivered Worldwide"
        description="Explore our diverse portfolio of innovative projects spanning industrial PEB facilities, sustainable green buildings, and cutting-edge environmental infrastructure."
        bgImage="/Steel Building/SB_1.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio Projects" },
        ]}
      >
        {/* Integrated Search Bar inside PageHero Slot */}
        <div className="max-w-2xl mx-auto mt-4 w-full">
          <div className="relative flex items-center bg-card/90 backdrop-blur-md border border-white/20 rounded-full shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all px-2">
            <Search className="ml-4 w-5 h-5 text-muted-foreground shrink-0" />
            <Input
              type="text"
              placeholder="Search projects by title, location, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent px-4 py-5 font-body text-sm text-foreground focus-visible:ring-0 placeholder:text-muted-foreground/70"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mr-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </PageHero>

      {/* Filter Section */}
      <section className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-3">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full justify-between font-heading text-xs uppercase"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filter Categories
              </span>
              <span>{filteredProjects.length} Projects</span>
            </Button>
          </div>

          {/* Category Filter Buttons */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block overflow-x-auto scrollbar-hide`}>
            <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-3">
              {CATEGORIES.map((cat) => {
                const count =
                  cat.id === "all"
                    ? PROJECTS_DATA.length
                    : PROJECTS_DATA.filter((p) => p.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`
                      font-heading text-xs uppercase font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 shrink-0 cursor-pointer
                      ${
                        isSelected
                          ? "bg-primary text-white shadow-sm"
                          : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
                      }
                    `}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20 bg-card rounded-2xl border border-border max-w-lg mx-auto"
              >
                <Building2 className="w-12 h-12 mx-auto text-muted-foreground mb-4 opacity-50" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">No Projects Match Your Search</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Try adjusting your search criteria or category filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  variant="outline"
                  size="sm"
                  className="font-heading text-xs uppercase"
                >
                  Reset All Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
