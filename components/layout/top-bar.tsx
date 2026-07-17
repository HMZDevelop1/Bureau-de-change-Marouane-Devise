"use client";

import { useTranslations } from "next-intl";
import { MapPin, Star, Clock } from "lucide-react";
import { businessInfo, GOOGLE_MAPS_URL } from "@/data/business";
import { isOpenNow, getTimeUntilClose } from "@/lib/hours";

export function TopBar() {
  const t = useTranslations("topBar");
  const open = isOpenNow();
  const timeLeft = getTimeUntilClose();

  return (
    <div className="bg-brand-coffee text-brand-beige text-xs py-2 relative z-[60] hidden md:block">
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-beige transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{businessInfo.address}</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span className={open ? "text-green-400" : "text-red-400"}>
              {open ? t("open") : t("closed")}
            </span>
            {open && timeLeft && (
              <span className="text-brand-beige/50">- {t("closesIn")} {timeLeft}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-brand-beige transition-colors"
          >
            <Star className="w-3.5 h-3.5 fill-brand-beige text-brand-beige" />
            <span className="font-semibold">{businessInfo.googleRating}</span>
            <span className="text-brand-beige/50">({businessInfo.totalReviews} {t("reviews")})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
