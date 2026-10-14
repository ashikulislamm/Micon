import { COMPANY_CONTACT } from "@/lib/data/company";
import { SERVICES_DATA } from "@/lib/data/services";

export default function JsonLd() {
  const baseUrl = "https://www.miconbd.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "MICON",
        legalName: "Metal Infrastructures and Constructions Ltd",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/Logo_Black.png`,
          width: 250,
          height: 60,
        },
        description:
          "Premier construction and engineering company in Bangladesh specializing in Pre-Engineered Steel Buildings (PEB), Turnkey RCC Structures, ETP/WTP Facilities, and BIM Technology.",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_CONTACT.headOffice.addressLines.join(", "),
          addressLocality: "Dhaka",
          postalCode: "1229",
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.811876,
          longitude: 90.423384,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: COMPANY_CONTACT.hotline,
            contactType: "customer service",
            email: COMPANY_CONTACT.email,
            areaServed: "BD",
            availableLanguage: ["English", "Bengali"],
          },
          {
            "@type": "ContactPoint",
            telephone: COMPANY_CONTACT.emergencyPhone,
            contactType: "emergency support",
            email: COMPANY_CONTACT.email,
            areaServed: "BD",
          },
        ],
        sameAs: [
          COMPANY_CONTACT.social.linkedin,
          COMPANY_CONTACT.social.facebook,
          COMPANY_CONTACT.social.youtube || "",
        ].filter(Boolean),
        foundingDate: "2018",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 50,
        },
        award: [
          "ISO 9001:2015 Quality Management System Certification",
          "BNBC 2020 Structural Safety Compliance",
          "LEED Green Building Certified Contractor",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "MICON - Leading Construction & Engineering Solutions",
        description:
          "Premier construction company in Bangladesh delivering PEB steel buildings, RCC structures, and environmental treatment plants.",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "MICON Engineering Solutions",
        image: `${baseUrl}/Logo_Black.png`,
        telephone: COMPANY_CONTACT.hotline,
        email: COMPANY_CONTACT.email,
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_CONTACT.headOffice.addressLines.join(", "),
          addressLocality: "Dhaka",
          postalCode: "1229",
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.811876,
          longitude: 90.423384,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120",
        },
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#services`,
        serviceType: "Industrial Construction & Structural Engineering",
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Bangladesh",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "MICON Engineering Services",
          itemListElement: SERVICES_DATA.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.shortDescription,
              url: `${baseUrl}/services/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${baseUrl}/about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Services",
            item: `${baseUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Portfolio Projects",
            item: `${baseUrl}/projects`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact",
            item: `${baseUrl}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
