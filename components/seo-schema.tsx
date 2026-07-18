import { businessInfo, GOOGLE_MAPS_URL } from "@/data/business";
import { faqs } from "@/data/faqs";

const descriptions: Record<string, string> = {
  fr: "Bureau de change à Casablanca avec taux compétitifs, service rapide, sans commission et sans frais cachés.",
  en: "Currency exchange in Casablanca with competitive rates, fast service, zero commission and no hidden fees.",
  ar: "مكتب صرف العملات في الدار البيضاء بأسعار تنافسية وخدمة سريعة وبدون عمولة أو رسوم مخفية.",
};

export function LocalBusinessSchema({ locale = "fr" }: { locale?: string }) {
  const desc = descriptions[locale] || descriptions.fr;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.nameFull,
    description: desc,
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

export function FAQSchema({ locale = "fr" }: { locale?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[locale as keyof typeof faq.question] || faq.question.fr,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[locale as keyof typeof faq.answer] || faq.answer.fr,
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
