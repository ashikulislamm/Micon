import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "News & Insights - MICON Industry Updates",
  description:
    "Stay informed with the latest industrial construction trends, PEB engineering insights, site milestones, and corporate announcements from MICON Bangladesh.",
};

const newsArticles = [
  {
    id: "1",
    slug: "micon-delivers-60m-peb-steel-span",
    title: "MICON Successfully Delivers 60m Column-Free PEB Facility in Gazipur",
    category: "Engineering Milestone",
    date: "August 15, 2026",
    author: "MICON Media Office",
    summary:
      "Our structural engineering team has completed erection of one of Bangladesh's longest column-free pre-engineered steel spans for a high-capacity logistics warehouse.",
    image: "/Steel Building/SB_1.png",
    readTime: "4 min read",
  },
  {
    id: "2",
    slug: "iso-9001-2015-recertification",
    title: "MICON Achieves ISO 9001:2015 Recertification with Outstanding Audit Score",
    category: "Corporate Excellence",
    date: "July 28, 2026",
    author: "Quality Assurance Division",
    summary:
      "Following a comprehensive audit by international assessors, MICON reaffirms its commitment to stringent quality management across civil and steel construction works.",
    image: "/Green Buildings/GB_2.jpg",
    readTime: "3 min read",
  },
  {
    id: "3",
    slug: "advancements-in-bim-level-2",
    title: "How BIM Level 2 Digital Twins Reduced Site Rework by 98% in Turnkey Projects",
    category: "Technical Insight",
    date: "June 10, 2026",
    author: "Engr. Tanvir Ahmed (BIM Lead)",
    summary:
      "An in-depth look into how Tekla 3D modeling and clash detection optimize structural steel fabrication and MEP routing before breaking ground.",
    image: "/Steel Building/SB_2.jpg",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "sustainable-green-factory-trends-2026",
    title: "The Rise of LEED Certified Green Factories in Bangladesh's Export Sector",
    category: "Sustainability",
    date: "May 19, 2026",
    author: "Sustainability Desk",
    summary:
      "Exploring how eco-friendly industrial construction, solar roof integration, and zero wastewater discharge elevate global compliance for Bangladeshi manufacturers.",
    image: "/Facilities/FC_3.jpg",
    readTime: "5 min read",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Symmetrical Dark Page Hero */}
      <PageHero
        badge="NEWS & MEDIA"
        title="Industry Insights &"
        highlight="Corporate Updates"
        description="Keep up with MICON's latest project milestones, technical innovations, and industrial engineering advancements across Bangladesh."
        bgImage="/Facilities/FC_3.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & Media" },
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-card rounded-2xl border border-border shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="default" size="sm">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-body">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {article.author}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-body text-xs text-muted-foreground">{article.readTime}</span>
                  <Link
                    href={`/news#${article.slug}`}
                    className="font-heading text-xs font-bold uppercase tracking-wider text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <CTASection
          title="Looking for Custom Engineering Consultation?"
          description="Talk to our structural experts to discuss your upcoming factory, warehouse, or environmental plant."
          variant="compact"
        />
      </div>
    </div>
  );
}
