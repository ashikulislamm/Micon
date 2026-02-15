export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.micon.com.bd/#organization",
        name: "MICON",
        legalName: "MICON Engineering Solutions",
        url: "https://www.micon.com.bd",
        logo: {
          "@type": "ImageObject",
          url: "https://www.micon.com.bd/Logo.png",
          width: 250,
          height: 60,
        },
        description:
          "Leading construction and engineering company in Bangladesh specializing in PEB Steel Buildings, RCC Structures, Treatment Plants, and Industrial Construction.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ka-6/A, 3 Floor, Jagannathpur, Vatara",
          addressLocality: "Dhaka",
          postalCode: "1229",
          addressCountry: "BD",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+880-1812-345-678",
            contactType: "customer service",
            email: "info@micon.com.bd",
            areaServed: "BD",
            availableLanguage: ["English", "Bengali"],
          },
        ],
        sameAs: [
          "https://www.facebook.com/micon",
          "https://www.linkedin.com/company/micon",
          "https://twitter.com/micon",
        ],
        foundingDate: "2017",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 30,
        },
        award: ["ISO 9001:2015 Certification", "LEED Certified Projects"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.micon.com.bd/#website",
        url: "https://www.micon.com.bd",
        name: "MICON - Construction & Engineering Solutions",
        description:
          "Leading construction company in Bangladesh offering comprehensive engineering solutions",
        publisher: {
          "@id": "https://www.micon.com.bd/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": "https://www.micon.com.bd/#service",
        serviceType: "Construction and Engineering Services",
        provider: {
          "@id": "https://www.micon.com.bd/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Bangladesh",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Construction Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Design-Build Construction of Pre-Engineered Steel Buildings",
                description:
                  "Complete design-build PEB solutions for industrial facilities",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Turnkey Construction of RCC and Steel Structures",
                description:
                  "Comprehensive turnkey construction combining RCC and steel systems",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Construction of ETP, WTP, STP, and RMS Rooms",
                description: "Environmental treatment plant construction services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Boundary Wall Construction",
                description:
                  "Industrial perimeter security and boundary wall solutions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Civil and Steel Structure Retrofitting Works",
                description: "Structural rehabilitation and strengthening services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Industrial Utility Infrastructure Construction",
                description: "Complete utility infrastructure development services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Implementation of BIM, Modular Construction, and Automation",
                description: "Advanced construction technology implementation",
              },
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.micon.com.bd/#localbusiness",
        name: "MICON",
        image: "https://www.micon.com.bd/Logo.png",
        telephone: "+880-1812-345-678",
        email: "info@micon.com.bd",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ka-6/A, 3 Floor, Jagannathpur, Vatara",
          addressLocality: "Dhaka",
          postalCode: "1229",
          addressCountry: "BD",
        },
        priceRange: "$$$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "100",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.micon.com.bd/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.micon.com.bd/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://www.micon.com.bd/about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Services",
            item: "https://www.micon.com.bd/services",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: "https://www.micon.com.bd/contact",
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
