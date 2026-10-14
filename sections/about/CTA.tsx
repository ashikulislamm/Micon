import CTASection from "@/components/CTASection";

export default function CTA() {
  return (
    <CTASection
      title="Ready to Build Beyond Foundations?"
      subtitle="START YOUR PROJECT"
      description="Partner with MICON's experienced engineering team to plan and construct your next industrial facility with speed, quality, and reliability."
      primaryCtaText="Contact Us"
      primaryCtaHref="/contact"
      secondaryCtaText="Request a Quote"
      secondaryCtaHref="/quote"
      variant="dark"
      showContactBar={true}
    />
  );
}
