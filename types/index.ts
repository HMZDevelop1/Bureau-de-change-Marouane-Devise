export interface CurrencyRate {
  code: string;
  name: string;
  nameEn: string;
  nameAr: string;
  flag: string;
  buyRate: number;
  sellRate: number;
  lastUpdated: string;
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  titleAr: string;
  description: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  textEn: string;
  textAr: string;
  date: string;
  source: "google" | "other";
}

export interface FAQ {
  id: number;
  question: string;
  questionEn: string;
  questionAr: string;
  answer: string;
  answerEn: string;
  answerAr: string;
}

export interface DayHours {
  open: string;
  close: string;
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  email: string;
  address: string;
  addressEn: string;
  addressAr: string;
  city: string;
  country: string;
  googleMapsUrl: string;
  openingHours: {
    monday: DayHours;
    tuesday: DayHours;
    wednesday: DayHours;
    thursday: DayHours;
    friday: DayHours;
    saturday: DayHours;
    sunday: DayHours;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ReservationForm {
  fullName: string;
  phone: string;
  currency: string;
  amount: number;
  date: string;
  message: string;
}

export type Locale = "fr" | "en" | "ar";
