import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "currency-exchange",
    icon: "ArrowLeftRight",
    title: { fr: "Change de devises", en: "Currency Exchange", ar: "صرف العملات" },
    description: {
      fr: "Changez vos euros, dollars, livres et autres devises aux meilleurs taux du marché, sans commission.",
      en: "Exchange your euros, dollars, pounds and other currencies at the best market rates, commission-free.",
      ar: "صرف اليورو والدولار والجنيه والعملات الأخرى بأفضل أسعار السوق وبدون عمولة.",
    },
  },
  {
    id: "tourist-allowance",
    icon: "Plane",
    title: { fr: "Dotation touristique", en: "Tourist Allowance", ar: "المخصص السياحي" },
    description: {
      fr: "Bénéficiez de votre dotation touristique officielle pour vos voyages à l'étranger.",
      en: "Get your official tourist allowance for your trips abroad.",
      ar: "احصل على مخصصك السياحي الرسمي لرحلاتك إلى الخارج.",
    },
  },
  {
    id: "pilgrimage",
    icon: "Compass",
    title: { fr: "Dotation pèlerinage", en: "Pilgrimage Allowance", ar: "مخصص الحج" },
    description: {
      fr: "Préparez votre pèlerinage en toute sérénité avec notre service de change dédié.",
      en: "Prepare for your pilgrimage with peace of mind with our dedicated exchange service.",
      ar: "استعد لحجك بطمأنينة مع خدمة الصرف المخصصة لدينا.",
    },
  },
  {
    id: "education",
    icon: "GraduationCap",
    title: { fr: "Scolarité", en: "Education", ar: "المخصص المدرسي" },
    description: {
      fr: "Financez vos études ou celles de vos enfants à l'étranger avec des taux avantageux.",
      en: "Fund your studies or your children's studies abroad with favorable rates.",
      ar: "ممول دراساتك أو دراسات أطفالك في الخارج بأسعار مميزة.",
    },
  },
  {
    id: "business",
    icon: "Briefcase",
    title: { fr: "Missions professionnelles", en: "Business Missions", ar: "المهام المهنية" },
    description: {
      fr: "Change rapide et sécurisé pour vos déplacements professionnels à l'international.",
      en: "Fast and secure exchange for your international business trips.",
      ar: "صرف سريع وآمن لرحلاتك التجارية الدولية.",
    },
  },
  {
    id: "internship",
    icon: "Building2",
    title: { fr: "Stages à l'étranger", en: "Internships Abroad", ar: "التمارين في الخارج" },
    description: {
      fr: "Préparez votre stage international avec les fonds nécessaires en toute simplicité.",
      en: "Prepare for your international internship with the necessary funds with ease.",
      ar: "استعد لتدريبك الدولي بالأموال اللازمة بسهولة.",
    },
  },
];
