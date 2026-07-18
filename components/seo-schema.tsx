import { businessInfo, GOOGLE_MAPS_URL } from "@/data/business";
import { faqs } from "@/data/faqs";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.nameFull,
    description: "Bureau de change à Casablanca avec taux compétitifs, service rapide, sans commission et sans frais cachés.",
    url: "https://marouanedevise.vercel.app",
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng,
    },
    hasMap: GOOGLE_MAPS_URL,
    sameAs: [GOOGLE_MAPS_URL],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.googleRating,
      reviewCount: businessInfo.totalReviews,
      bestRating: 5,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
        opens: "09:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "MAD, EUR, USD, GBP, CAD, CHF, AED, SAR, TRY",
    paymentAccepted: "Cash",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.fr,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.fr,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
