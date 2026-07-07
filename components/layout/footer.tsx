"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Star, Clock } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { DAY_ORDER, DAY_LABELS, formatTimeDisplay, type DayKey } from "@/lib/hours";

export function Footer() {
  const t = useTranslations("footer");

  const quickHours = [
    { days: "Lun – Mer", hours: "09:30 – 22:00" },
    { days: "Jeu – Dim", hours: "09:00 – 22:00" },
  ];

  return (
    <footer className="bg-brand-ocean text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-brand-sm bg-brand-orange flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">
                  M
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Marouane</span>
                <span className="font-display font-bold text-xl text-brand-gold ml-0.5">
                  Devise
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full">
              <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
              <span className="text-sm font-semibold">4.8/5</span>
              <span className="text-white/50 text-sm">Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-gold">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#rates"
                  className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                >
                  Taux de change
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#reservation"
                  className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                >
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-gold">{t("services")}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/60 text-sm">Échange instantané</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">Dotation touristique</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">Dotation pèlerinage</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">Départ scolarité</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">Sans commission</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-gold">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                >
                  {contactInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                <div className="text-white/60 text-sm space-y-0.5">
                  {quickHours.map((item, i) => (
                    <div key={i}>
                      <span className="text-white/40">{item.days}:</span>{" "}
                      <span className="text-white/70">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">{t("copyright")}</p>
            <div className="flex items-center gap-1.5 text-white/40 text-sm">
              <span>{t("madeWith")}</span>
              <span className="text-brand-orange">♥</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
