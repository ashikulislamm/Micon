import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSidebar from "@/sections/quote/ContactSidebar";
import QuoteForm from "@/sections/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote - Request Construction Project Proposal",
  description:
    "Request a comprehensive quote for your industrial construction project. Get expert consultation and detailed proposals for PEB Steel Buildings, RCC Structures, Treatment Plants, and more from MICON.",
  keywords: [
    "construction quote Bangladesh",
    "project proposal",
    "construction estimate",
    "PEB quote",
    "industrial construction cost",
    "building construction quote",
    "engineering consultation",
  ],
  openGraph: {
    title: "Get a Quote - MICON Construction Services",
    description:
      "Request detailed technical and financial proposals for your next industrial project. Free consultation available.",
    url: "https://www.miconbd.com/quote",
    type: "website",
  },
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Symmetrical Dark Page Hero */}
      <PageHero
        badge="PROJECT ESTIMATION"
        title="Get a Customized"
        highlight="Technical Proposal"
        description="Partner with MICON for your next industrial infrastructure project. Our directors will provide a comprehensive technical and financial proposal."
        bgImage="/RCC/RCC_1.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get a Quote" },
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
