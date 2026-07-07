import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatMAD(amount: number): string {
  return new Intl.NumberFormat("fr-MA", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: string, locale: string = "fr"): string {
  return new Date(date).toLocaleDateString(locale === "ar" ? "ar-MA" : locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(date: string, locale: string = "fr"): string {
  return new Date(date).toLocaleTimeString(locale === "ar" ? "ar-MA" : locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
