export const GOOGLE_MAPS_URL = "https://share.google/9ZPajHR1QrPs0ONM7";

export const businessInfo = {
  name: "Marouane Devise",
  nameFull: "Bureau de Change Marouane Devise",
  tagline: "Votre bureau de change à Casablanca",
  phone: "+212721791914",
  phoneFormatted: "+212 7 21 79 19 14",
  whatsapp: "212721791914",
  email: "contact@marouane-devise.ma",
  address: "Casablanca, Maroc",
  city: "Casablanca",
  country: "Maroc",
  countryAr: "المغرب",
  googleRating: 4.8,
  totalReviews: 19,
  googleMapsUrl: GOOGLE_MAPS_URL,
  coordinates: { lat: 33.5486623, lng: -7.6782142 },
  openingHours: {
    monday: { open: "09:30", close: "22:00" },
    tuesday: { open: "09:30", close: "22:00" },
    wednesday: { open: "09:30", close: "22:00" },
    thursday: { open: "09:00", close: "22:00" },
    friday: { open: "09:00", close: "22:00" },
    saturday: { open: "09:00", close: "22:00" },
    sunday: { open: "09:00", close: "22:00" },
  },
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};

export const contactInfo = {
  phone: businessInfo.phone,
  phoneFormatted: businessInfo.phoneFormatted,
  whatsapp: businessInfo.whatsapp,
  email: businessInfo.email,
  address: businessInfo.address,
  city: businessInfo.city,
  country: businessInfo.country,
  mapsUrl: GOOGLE_MAPS_URL,
  coordinates: businessInfo.coordinates,
  openingHours: businessInfo.openingHours,
};
