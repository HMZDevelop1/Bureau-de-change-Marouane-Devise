import { DayHours } from "@/types";

const TIMEZONE = "Africa/Casablanca";

export type DayKey = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export const DAY_LABELS: Record<DayKey, { fr: string; en: string; ar: string }> = {
  monday: { fr: "Lundi", en: "Monday", ar: "الإثنين" },
  tuesday: { fr: "Mardi", en: "Tuesday", ar: "الثلاثاء" },
  wednesday: { fr: "Mercredi", en: "Wednesday", ar: "الأربعاء" },
  thursday: { fr: "Jeudi", en: "Thursday", ar: "الخميس" },
  friday: { fr: "Vendredi", en: "Friday", ar: "الجمعة" },
  saturday: { fr: "Samedi", en: "Saturday", ar: "السبت" },
  sunday: { fr: "Dimanche", en: "Sunday", ar: "الأحد" },
};

export const DAY_ORDER: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function getCurrentTimeInCasablanca(): Date {
  const now = new Date();
  const casablancaTime = new Date(
    now.toLocaleString("en-US", { timeZone: TIMEZONE })
  );
  return casablancaTime;
}

export function getTodayKey(): DayKey {
  const now = getCurrentTimeInCasablanca();
  const dayIndex = now.getDay();
  const mapping: DayKey[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return mapping[dayIndex];
}

export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

export function formatTimeDisplay(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

export function isOpenNow(
  openingHours: Record<DayKey, DayHours>
): { isOpen: boolean; status: string; todayHours: DayHours | null } {
  const today = getTodayKey();
  const todayHours = openingHours[today];

  if (!todayHours) {
    return { isOpen: false, status: "Fermé", todayHours: null };
  }

  const now = getCurrentTimeInCasablanca();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = timeToMinutes(todayHours.open);
  const closeMinutes = timeToMinutes(todayHours.close);

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  return {
    isOpen,
    status: isOpen ? "Ouvert" : "Fermé",
    todayHours,
  };
}

export function getTimeUntilClose(
  openingHours: Record<DayKey, DayHours>
): string | null {
  const today = getTodayKey();
  const todayHours = openingHours[today];

  if (!todayHours) return null;

  const now = getCurrentTimeInCasablanca();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const closeMinutes = timeToMinutes(todayHours.close);

  if (currentMinutes >= closeMinutes) return null;

  const remaining = closeMinutes - currentMinutes;
  const hours = Math.floor(remaining / 60);
  const minutes = remaining % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  return `${minutes}min`;
}

export function getTimeUntilOpen(
  openingHours: Record<DayKey, DayHours>
): string | null {
  const now = getCurrentTimeInCasablanca();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const today = getTodayKey();
  const todayHours = openingHours[today];

  if (todayHours) {
    const openMinutes = timeToMinutes(todayHours.open);
    if (currentMinutes < openMinutes) {
      const remaining = openMinutes - currentMinutes;
      const hours = Math.floor(remaining / 60);
      const minutes = remaining % 60;
      if (hours > 0) {
        return `${hours}h ${minutes}min`;
      }
      return `${minutes}min`;
    }
  }

  // Find next opening day
  const todayIndex = DAY_ORDER.indexOf(today);
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (todayIndex + i) % 7;
    const nextDay = DAY_ORDER[nextDayIndex];
    const nextDayHours = openingHours[nextDay];
    if (nextDayHours) {
      return DAY_LABELS[nextDay].fr;
    }
  }

  return null;
}

export function getNextCloseTime(
  openingHours: Record<DayKey, DayHours>
): Date | null {
  const today = getTodayKey();
  const todayHours = openingHours[today];

  if (!todayHours) return null;

  const now = getCurrentTimeInCasablanca();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const closeMinutes = timeToMinutes(todayHours.close);

  if (currentMinutes >= closeMinutes) return null;

  const [closeH, closeM] = todayHours.close.split(":").map(Number);
  const result = new Date(now);
  result.setHours(closeH, closeM, 0, 0);

  return result;
}
