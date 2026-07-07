"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";
import {
  DAY_ORDER,
  DAY_LABELS,
  type DayKey,
  isOpenNow,
  getTimeUntilClose,
  getTimeUntilOpen,
  getCurrentTimeInCasablanca,
  formatTimeDisplay,
} from "@/lib/hours";

export function OpeningHours() {
  const t = useTranslations("contact");
  const [now, setNow] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const currentTime = getCurrentTimeInCasablanca();
      setNow(currentTime);

      const { isOpen } = isOpenNow(contactInfo.openingHours);
      if (isOpen) {
        const remaining = getTimeUntilClose(contactInfo.openingHours);
        setCountdown(remaining ? `Fermeture dans ${remaining}` : "");
      } else {
        const until = getTimeUntilOpen(contactInfo.openingHours);
        setCountdown(until ? `Ouverture dans ${until}` : "");
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const { isOpen, status, todayHours } = isOpenNow(contactInfo.openingHours);
  const todayKey = DAY_ORDER[
    (now || new Date()).getDay() === 0 ? 6 : (now || new Date()).getDay() - 1
  ] || "monday";

  return (
    <div className="bg-white rounded-brand-lg border border-brand-ocean/5 shadow-card overflow-hidden">
      {/* Status Header */}
      <div
        className={`px-5 py-4 flex items-center justify-between ${
          isOpen
            ? "bg-green-50 border-b border-green-100"
            : "bg-red-50 border-b border-red-100"
        }`}
      >
        <div className="flex items-center gap-2.5">
          {isOpen ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <XCircle className="h-5 w-5 text-red-500" />
          )}
          <span
            className={`font-bold text-sm ${
              isOpen ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </span>
        </div>
        {countdown && (
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              isOpen
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {countdown}
          </span>
        )}
      </div>

      {/* Schedule */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-4 w-4 text-brand-orange" />
          <h4 className="font-semibold text-brand-ocean text-sm">
            {t("hours")}
          </h4>
        </div>

        <div className="space-y-2">
          {DAY_ORDER.map((day) => {
            const hours = contactInfo.openingHours[day];
            const isToday = day === todayKey;
            const label = DAY_LABELS[day].fr;

            return (
              <div
                key={day}
                className={`flex items-center justify-between py-2 px-3 rounded-brand-sm transition-colors ${
                  isToday
                    ? "bg-brand-orange/5 border border-brand-orange/10"
                    : "hover:bg-brand-ivory/50"
                }`}
              >
                <span
                  className={`text-sm ${
                    isToday
                      ? "font-bold text-brand-orange"
                      : "text-brand-ocean/60"
                  }`}
                >
                  {label}
                  {isToday && (
                    <span className="ml-1.5 text-[10px] font-bold bg-brand-orange text-white px-1.5 py-0.5 rounded-full">
                      Auj.
                    </span>
                  )}
                </span>
                <span
                  className={`text-sm font-medium ${
                    isToday ? "text-brand-ocean" : "text-brand-ocean/50"
                  }`}
                >
                  {formatTimeDisplay(hours.open)} – {formatTimeDisplay(hours.close)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
