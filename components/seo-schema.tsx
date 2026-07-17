"use client";

import { businessInfo, GOOGLE_MAPS_URL } from "@/data/business";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.nameFull,
    description: "Bureau de change à Casablanca avec taux compétitifs, service rapide, sans commission et sans frais cachés.",
    url: GOOGLE_MAPS_URL,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
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
  const faqs = [
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du lundi au mercredi de 9h30 à 22h, et du jeudi au dimanche de 9h à 22h.",
    },
    {
      question: "Acceptez-vous toutes les devises ?",
      answer: "Nous acceptons les principales devises internationales : EUR, USD, GBP, CAD, CHF, AED, SAR, TRY et plus encore.",
    },
    {
      question: "Y a-t-il des frais de commission ?",
      answer: "Non, nous ne facturons aucune commission. Nos taux sont transparents et compétitifs.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
