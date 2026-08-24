import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data/services";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  ChevronLeft,
  Building2,
  FileCheck,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found - MICON" };
  }
  return {
    title: `${service.title} | MICON Engineering Bangladesh`,
    description: `${service.shortDescription} Delivered across Bangladesh under ISO 9001:2015 certified protocols.`,
    keywords: [
      service.title,
      service.shortTag,
      `${service.shortTag} Bangladesh`,
      `${service.shortTag} contractor Dhaka`,
      "industrial construction Bangladesh",
      ...(service.standards || []),
      ...(service.applications || []),
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - MICON Engineering Solutions`,
      description: service.shortDescription,
      url: `https://www.micon.com.bd/services/${service.slug}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary inline-flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to All Services
          </Link>
        </div>

        {/* Service Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="default" size="lg">
                {service.shortTag}
              </Badge>
              {service.badge && (
                <Badge variant="outline" size="lg">
                  {service.badge}
                </Badge>
              )}
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {service.title}
            </h1>

            <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Service Guarantee Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-[10px] uppercase tracking-wider text-muted-foreground">Estimated Timeline</p>
                  <p className="font-heading text-sm font-bold text-foreground">{service.timeline}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-[10px] uppercase tracking-wider text-muted-foreground">Warranty Coverage</p>
                  <p className="font-heading text-sm font-bold text-foreground">{service.warranty}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/quote">
                <Button size="xl" className="font-heading text-xs uppercase tracking-wider font-semibold">
                  Get Technical Proposal for This Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Technical Specifications & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Key Deliverables & Features */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Key Engineering Features & Deliverables
            </h2>
            <div className="space-y-4">
              {service.features.map((feature, idx) => (
                <Card key={idx} className="border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-sm sm:text-base text-foreground leading-relaxed">
                      {feature}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Structural Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Technical Specifications
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4 divide-y divide-border">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="pt-3 first:pt-0 flex items-center justify-between">
                    <span className="font-body text-xs sm:text-sm text-muted-foreground">{spec.label}</span>
                    <span className="font-heading text-xs sm:text-sm font-bold text-foreground">{spec.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Applicable Building Codes */}
            {service.standards && service.standards.length > 0 && (
              <div className="p-6 bg-muted/40 rounded-xl border border-border space-y-3">
                <div className="flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                  <FileCheck className="w-4 h-4 text-primary" /> Building Codes & Standards
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.standards.map((code, cIdx) => (
                    <Badge key={cIdx} variant="outline" size="sm">
                      {code}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <CTASection
          title={`Ready to start your ${service.shortTag} project?`}
          subtitle="EXPERT CONSULTATION"
          description="Speak with our technical engineering directors for detailed cost estimations and structural drawings."
          primaryCtaText="Request Detailed Quote"
          primaryCtaHref="/quote"
          showContactBar
        />
      </div>
    </div>
  );
}
