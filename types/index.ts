export type Locale = "fr" | "en" | "ar";

export interface DayHours {
  open: string;
  close: string;
}

export interface OpeningHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface CurrencyRate {
  code: string;
  name: string;
  nameEn: string;
  nameAr: string;
  flag: string;
  buy: number;
  sell: number;
  trend: "up" | "down" | "stable";
  lastUpdated: string;
}

export interface Service {
  id: string;
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  details: {
    fullDescription: Record<Locale, string>;
    documents: Record<Locale, string[]>;
    process: Record<Locale, string[]>;
    estimatedTime: Record<Locale, string>;
  };
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: Record<Locale, string>;
  date: string;
}

export interface FAQ {
  id: string;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export interface NavLink {
  href: string;
  label: Record<Locale, string>;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
  mapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: OpeningHours;
}

export interface ReservationForm {
  name: string;
  currency: string;
  amount: string;
  date: string;
  message: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
