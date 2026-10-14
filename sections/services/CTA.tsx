import CTASection from "@/components/CTASection";

export default function CTA() {
  return (
    <CTASection
      title="Have a project in mind?"
      subtitle="START A CONVERSATION"
      description="Share your requirements and our engineers will respond with a technical proposal."
      primaryCtaText="Request Proposal"
      primaryCtaHref="/quote"
      secondaryCtaText="Contact Us"
      secondaryCtaHref="/contact"
      showContactBar
    />
  );
}
