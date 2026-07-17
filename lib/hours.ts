import { businessInfo } from "@/data/business";
import type { OpeningHours, DayHours } from "@/types";

const hours: OpeningHours = businessInfo.openingHours;

const DAY_KEYS: (keyof OpeningHours)[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getDayKey(date: Date): keyof OpeningHours {
  return DAY_KEYS[date.getDay()];
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getTodayHours(): DayHours {
  const day = getDayKey(new Date());
  return hours[day];
}

export function isOpenNow(): boolean {
  const now = new Date();
  const casablancaTime = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Casablanca" }));
  const currentMinutes = casablancaTime.getHours() * 60 + casablancaTime.getMinutes();
  const today = getDayKey(casablancaTime);
  const todayHours = hours[today];
  if (!todayHours) return false;
  const openMinutes = timeToMinutes(todayHours.open);
  const closeMinutes = timeToMinutes(todayHours.close);
  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export function getTimeUntilClose(): string | null {
  if (!isOpenNow()) return null;
  const now = new Date();
  const casablancaTime = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Casablanca" }));
  const currentMinutes = casablancaTime.getHours() * 60 + casablancaTime.getMinutes();
  const today = getDayKey(casablancaTime);
  const todayHours = hours[today];
  if (!todayHours) return null;
  const closeMinutes = timeToMinutes(todayHours.close);
  const diff = closeMinutes - currentMinutes;
  if (diff <= 0) return null;
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  if (h > 0 && m > 0) return `${h}h${m.toString().padStart(2, "0")}`;
  if (h > 0) return `${h}h`;
  return `${m}min`;
}

export function getTimeUntilOpen(): string | null {
  if (isOpenNow()) return null;
  return null;
}

export function formatTimeDisplay(time: string): string {
  const [h, m] = time.split(":").map(Number);
  return `${h}h${m.toString().padStart(2, "0")}`;
}

export function getDayName(day: keyof OpeningHours, locale: string = "fr"): string {
  const dayMap: Record<keyof OpeningHours, Record<string, string>> = {
    monday: { fr: "Lundi", en: "Monday", ar: "الإثنين" },
    tuesday: { fr: "Mardi", en: "Tuesday", ar: "الثلاثاء" },
    wednesday: { fr: "Mercredi", en: "Wednesday", ar: "الأربعاء" },
    thursday: { fr: "Jeudi", en: "Thursday", ar: "الخميس" },
    friday: { fr: "Vendredi", en: "Friday", ar: "الجمعة" },
    saturday: { fr: "Samedi", en: "Saturday", ar: "السبت" },
    sunday: { fr: "Dimanche", en: "Sunday", ar: "الأحد" },
  };
  return dayMap[day][locale] || dayMap[day]["fr"];
}

export function getFullOpeningHours(locale: string = "fr"): { day: string; hours: string }[] {
  const dayOrder: (keyof OpeningHours)[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  return dayOrder.map((day) => ({
    day: getDayName(day, locale),
    hours: `${formatTimeDisplay(hours[day].open)} - ${formatTimeDisplay(hours[day].close)}`,
  }));
}
