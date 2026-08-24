import CTASection from "@/components/CTASection";

export default function CTA() {
  return (
    <CTASection
      title="Ready to Build Your Next Project?"
      subtitle="GET STARTED TODAY"
      description="Partner with MICON for reliable, cost-effective, and sustainable engineering solutions. Let's discuss how we can bring your vision to life."
      primaryCtaText="Request a Quote"
      primaryCtaHref="/quote"
      secondaryCtaText="Contact Us"
      secondaryCtaHref="/contact"
      showContactBar
    />
  );
}
