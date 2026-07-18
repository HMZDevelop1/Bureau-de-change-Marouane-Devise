"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Mail, Star, Clock } from "lucide-react";
import { contactInfo } from "@/data/contact";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const quickHours = [
    { days: t("hoursWeekdays"), hours: "09:30 – 22:00" },
    { days: t("hoursWeekends"), hours: "09:00 – 22:00" },
  ];

  return (
    <footer className="bg-brand-black border-t border-brand-beige/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-5">
            <Link href={`/${locale}`} className="flex items-center gap-3 group" aria-label="Marouane Devise">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-brand-beige/10 flex-shrink-0">
                <Image
                  src="/logo/logo-official.png"
                  alt="Marouane Devise Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-brand-beige tracking-tight font-display">Marouane</span>
                <span className="font-bold text-lg text-brand-beige/60 ml-0.5 tracking-tight">Devise</span>
              </div>
            </Link>
            <p className="text-brand-beige/40 text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-2 bg-brand-beige/[0.05] w-fit px-3 py-1.5 rounded-full border border-brand-beige/[0.06]">
              <Star className="h-4 w-4 fill-brand-beige text-brand-beige" />
              <span className="text-sm font-semibold text-brand-beige">4.8/5</span>
              <span className="text-brand-beige/40 text-sm">Google</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-brand-beige text-sm uppercase tracking-wider">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                { href: "#rates", label: t("linkRates") },
                { href: "#services", label: t("linkServices") },
                { href: "#about", label: t("linkAbout") },
                { href: "#reviews", label: t("linkReviews") },
                { href: "#faq", label: t("linkFaq") },
                { href: "#contact", label: t("linkContact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-beige/40 hover:text-brand-beige transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-brand-beige text-sm uppercase tracking-wider">{t("services")}</h3>
            <ul className="space-y-3">
              {[
                t("serviceExchange"),
                t("serviceTourism"),
                t("servicePilgrimage"),
                t("serviceEducation"),
                t("serviceNoCommission"),
                t("serviceReservation"),
              ].map((service) => (
                <li key={service}>
                  <span className="text-brand-beige/40 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-brand-beige text-sm uppercase tracking-wider">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-beige mt-0.5 shrink-0" />
                <span className="text-brand-beige/40 text-sm">{contactInfo.city}, {contactInfo.country}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-beige shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-brand-beige/40 hover:text-brand-beige transition-colors text-sm"
                >
                  {contactInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-beige shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-brand-beige/40 hover:text-brand-beige transition-colors text-sm break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock className="h-4 w-4 text-brand-beige mt-0.5 shrink-0" />
                <div className="text-brand-beige/40 text-sm space-y-0.5">
                  {quickHours.map((item, i) => (
                    <div key={i}>
                      <span className="text-brand-beige/30">{item.days}:</span>{" "}
                      <span className="text-brand-beige/50">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-beige/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-beige/30 text-sm">{t("copyright")}</p>
            <div className="flex items-center gap-1.5 text-brand-beige/30 text-sm">
              <span>{t("madeWith")}</span>
              <span className="text-brand-beige">&hearts;</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
