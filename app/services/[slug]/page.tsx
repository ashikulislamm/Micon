import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data/services";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

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
    title: `${service.title} | MICON Bangladesh`,
    description: `${service.shortDescription} Delivered across Bangladesh by MICON, an ISO 9001:2015 certified contractor.`,
    keywords: [
      service.title,
      service.shortTag,
      `${service.shortTag} Bangladesh`,
      "industrial construction Bangladesh",
      ...(service.standards || []),
      ...(service.applications || []),
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - MICON`,
      description: service.shortDescription,
      url: `https://www.miconbd.com/services/${service.slug}`,
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
  const index = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const service = SERVICES_DATA[index];

  if (!service) {
    notFound();
  }

  const related = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        badge={service.shortTag}
        title={service.title}
        description={service.shortDescription}
        bgImage={service.image}
        className="lg:min-h-[560px]"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTag },
        ]}
        primaryCta={{ label: "Request Proposal", href: "/quote" }}
      />

      {/* Overview + specification matrix */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              Overview
            </span>
            <p className="font-body text-base sm:text-lg leading-relaxed text-foreground">
              {service.description}
            </p>

            {service.applications && (
              <div className="pt-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Applications
                </h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {service.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <span className="h-1.5 w-1.5 bg-primary shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:col-span-5">
            <dl className="bg-card shadow-xs divide-y divide-border/60">
              {service.specs.map((spec) => (
                <div key={spec.label} className="p-5 grid grid-cols-3 gap-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground col-span-1">
                    {spec.label}
                  </dt>
                  <dd className="font-body text-sm font-semibold text-foreground col-span-2">
                    {spec.value}
                  </dd>
                </div>
              ))}
              {service.standards && (
                <div className="p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                    Standards
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {service.standards.map((code) => (
                      <span key={code} className="bg-muted px-2.5 py-1 font-mono text-xs text-foreground">
                        {code}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      {/* Key advantages */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              What You Get
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
              Key <span className="font-accent italic font-normal text-primary">Advantages</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <li key={feature} className="bg-card p-6 flex gap-5 shadow-xs">
                <span className="font-mono text-sm font-bold text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-sm sm:text-base leading-relaxed text-foreground">
                  {feature}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Executed projects */}
      {service.references && service.references.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                Track Record
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
                Executed <span className="font-accent italic font-normal text-primary">Projects</span>
              </h2>
            </div>
            <div className="bg-card shadow-xs overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-muted/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="py-3 px-6 font-semibold">Client</th>
                    <th className="py-3 px-6 font-semibold hidden md:table-cell">Location</th>
                    <th className="py-3 px-6 font-semibold">Scope</th>
                    <th className="py-3 px-6 font-semibold text-right">Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 font-body text-sm">
                  {service.references.map((ref) => (
                    <tr key={ref.client + ref.scope} className="hover:bg-muted/40 transition-colors">
                      <td className="py-4 px-6 font-heading font-bold text-foreground">{ref.client}</td>
                      <td className="py-4 px-6 text-muted-foreground hidden md:table-cell">{ref.location}</td>
                      <td className="py-4 px-6 text-foreground">{ref.scope}</td>
                      <td className="py-4 px-6 text-right font-mono text-xs text-primary whitespace-nowrap">
                        {ref.area ?? "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Other <span className="font-accent italic font-normal text-primary">Services</span>
            </h2>
            <Link href="/services">
              <Button variant="outline" className="rounded-none font-heading text-xs uppercase tracking-wider">
                All Services
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-card shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
                    {item.shortTag}
                  </span>
                  <h3 className="font-heading text-base font-bold text-card-foreground leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-primary pt-1">
                    View
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Planning a ${service.shortTag} project?`}
        subtitle="START A CONVERSATION"
        description="Talk to our engineers for an estimate and technical proposal."
        primaryCtaText="Request Proposal"
        primaryCtaHref="/quote"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        showContactBar
      />
    </div>
  );
}
