import { contactInfo } from "@/data/contact";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marouane Devise",
    description:
      "Bureau de change à Casablanca offrant des taux compétitifs, un service rapide, sans commission et sans frais cachés.",
    image: "/favicon.svg",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard Massira Al Khadra",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contactInfo.coordinates.lat,
      longitude: contactInfo.coordinates.lng,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "19",
      bestRating: "5",
    },
    priceRange: "$$",
    currency: "MAD",
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
      question: "Quels documents sont nécessaires pour effectuer un change ?",
      answer:
        "Une pièce d'identité valide (passeport, carte nationale ou permis de conduire) est requise pour toute opération de change.",
    },
    {
      question: "Y a-t-il une commission sur les opérations de change ?",
      answer: "Non, nous ne prélevons aucune commission.",
    },
    {
      question: "Peut-on réserver une devise à l'avance ?",
      answer:
        "Oui, nous offrons un service de réservation de devises via téléphone ou WhatsApp.",
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
