import ContactSidebar from "@/sections/quote/ContactSidebar";
import QuoteForm from "@/sections/quote/QuoteForm";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Get a Quote
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            Partner with MICON for your next industrial infrastructure project. Our team of
            experts is ready to provide you with a comprehensive technical and financial
            proposal.
          </p>
        </div>

        {/* Main Content */}
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
