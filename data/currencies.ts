import type { CurrencyRate } from "@/types";

export const currencies: CurrencyRate[] = [
  { code: "EUR", name: "Euro", nameEn: "Euro", nameAr: "يورو", flag: "\u{1F1EA}\u{1F1FA}", buy: 10.72, sell: 10.88, trend: "stable", lastUpdated: new Date().toISOString() },
  { code: "USD", name: "Dollar Américain", nameEn: "US Dollar", nameAr: "دولار أمريكي", flag: "\u{1F1FA}\u{1F1F8}", buy: 9.82, sell: 9.98, trend: "up", lastUpdated: new Date().toISOString() },
  { code: "GBP", name: "Livre Sterling", nameEn: "British Pound", nameAr: "جنيه إسترليني", flag: "\u{1F1EC}\u{1F1E7}", buy: 12.45, sell: 12.68, trend: "down", lastUpdated: new Date().toISOString() },
  { code: "CAD", name: "Dollar Canadien", nameEn: "Canadian Dollar", nameAr: "دولار كندي", flag: "\u{1F1E8}\u{1F1E6}", buy: 7.18, sell: 7.35, trend: "stable", lastUpdated: new Date().toISOString() },
  { code: "CHF", name: "Franc Suisse", nameEn: "Swiss Franc", nameAr: "فرنك سويسري", flag: "\u{1F1E8}\u{1F1ED}", buy: 11.05, sell: 11.22, trend: "up", lastUpdated: new Date().toISOString() },
  { code: "AED", name: "Dirham des EAU", nameEn: "UAE Dirham", nameAr: "درهم إماراتي", flag: "\u{1F1E6}\u{1F1EA}", buy: 2.67, sell: 2.72, trend: "stable", lastUpdated: new Date().toISOString() },
  { code: "SAR", name: "Riyal Saoudien", nameEn: "Saudi Riyal", nameAr: "ريال سعودي", flag: "\u{1F1F8}\u{1F1E6}", buy: 2.62, sell: 2.67, trend: "stable", lastUpdated: new Date().toISOString() },
  { code: "TRY", name: "Lire Turque", nameEn: "Turkish Lira", nameAr: "ليرة تركية", flag: "\u{1F1F9}\u{1F1F7}", buy: 0.27, sell: 0.30, trend: "down", lastUpdated: new Date().toISOString() },
];

export function getCurrencyByCode(code: string): CurrencyRate | undefined {
  return currencies.find((c) => c.code === code);
}
