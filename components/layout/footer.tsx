"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Star } from "lucide-react";
import { contactInfo } from "@/data/contact";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                <span className="text-navy-900 font-display font-bold text-lg">
                  M
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Marouane</span>
                <span className="font-display font-bold text-xl text-gold-400">
                  Devise
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{t("description")}</p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
              <span className="text-sm font-medium">4.8/5</span>
              <span className="text-gray-400 text-sm">Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#rates"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Taux de change
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#reservation"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm">Échange instantané</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Dotation touristique</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Dotation pèlerinage</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Départ scolarité</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Sans commission</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">{t("copyright")}</p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>{t("madeWith")}</span>
              <span className="text-gold-500">♥</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
