import { businessInfo } from "@/data/business";

const PHONE_RAW = businessInfo.phone;

export function generateWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${PHONE_RAW.replace(/[^0-9]/g, "")}`;
  const defaultMsg = `Bonjour Marouane Devise, je souhaite avoir des informations sur vos taux de change.`;
  const encoded = encodeURIComponent(message || defaultMsg);
  return `${base}?text=${encoded}`;
}

export function generateWhatsAppReservationUrl(params: {
  name: string;
  currency: string;
  amount: string;
  date: string;
  message?: string;
}): string {
  const lines = [
    `Bonjour Marouane Devise, je souhaite réserver une devise.`,
    ``,
    `Nom: ${params.name}`,
    `Devise: ${params.currency}`,
    `Montant: ${params.amount}`,
    `Date: ${params.date}`,
  ];
  if (params.message) lines.push(`Message: ${params.message}`);
  lines.push(``, `Merci !`);
  return generateWhatsAppUrl(lines.join("\n"));
}

export function generateCallUrl(): string {
  return `tel:${PHONE_RAW}`;
}

export function getPhoneFormatted(): string {
  return businessInfo.phoneFormatted;
}
