import { businessInfo } from "@/data/business";

const PHONE_RAW = businessInfo.phone;

const defaultMessages: Record<string, string> = {
  fr: "Bonjour Marouane Devise, je souhaite avoir des informations sur vos taux de change.",
  en: "Hello Marouane Devise, I would like information about your exchange rates.",
  ar: "مرحباً ماروان ديفيز، أود الحصول على معلومات حول أسعار الصرف لديكم.",
};

const reservationMessages: Record<string, string> = {
  fr: "Bonjour Marouane Devise, je souhaite réserver une devise.",
  en: "Hello Marouane Devise, I would like to reserve currency.",
  ar: "مرحباً ماروان ديفيز، أود حجز عملة.",
};

const thanksMessages: Record<string, string> = {
  fr: "Merci !",
  en: "Thank you!",
  ar: "شكراً!",
};

export function generateWhatsAppUrl(message?: string, locale?: string): string {
  const base = `https://wa.me/${PHONE_RAW.replace(/[^0-9]/g, "")}`;
  const lang = locale && locale in defaultMessages ? locale : "fr";
  const defaultMsg = defaultMessages[lang];
  const encoded = encodeURIComponent(message || defaultMsg);
  return `${base}?text=${encoded}`;
}

export function generateWhatsAppReservationUrl(params: {
  name: string;
  currency: string;
  amount: string;
  date: string;
  message?: string;
  locale?: string;
}): string {
  const lang = params.locale && params.locale in reservationMessages ? params.locale : "fr";
  const nameLabel = lang === "ar" ? "الاسم" : lang === "en" ? "Name" : "Nom";
  const currencyLabel = lang === "ar" ? "العملة" : lang === "en" ? "Currency" : "Devise";
  const amountLabel = lang === "ar" ? "المبلغ" : lang === "en" ? "Amount" : "Montant";
  const dateLabel = lang === "ar" ? "التاريخ" : lang === "en" ? "Date" : "Date";
  const messageLabel = lang === "ar" ? "رسالة" : lang === "en" ? "Message" : "Message";

  const lines = [
    reservationMessages[lang],
    "",
    `${nameLabel}: ${params.name}`,
    `${currencyLabel}: ${params.currency}`,
    `${amountLabel}: ${params.amount}`,
    `${dateLabel}: ${params.date}`,
  ];
  if (params.message) lines.push(`${messageLabel}: ${params.message}`);
  lines.push("", thanksMessages[lang]);
  return generateWhatsAppUrl(lines.join("\n"), lang);
}

export function generateCallUrl(): string {
  return `tel:${PHONE_RAW}`;
}

export function getPhoneFormatted(): string {
  return businessInfo.phoneFormatted;
}
