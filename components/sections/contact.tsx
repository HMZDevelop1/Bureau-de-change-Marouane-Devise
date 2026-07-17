"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Clock, ExternalLink } from "lucide-react";
import { businessInfo, GOOGLE_MAPS_URL } from "@/data/business";
import { generateCallUrl, generateWhatsAppUrl } from "@/lib/whatsapp";
import { isOpenNow, getFullOpeningHours, getTimeUntilClose } from "@/lib/hours";

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const open = isOpenNow();
  const timeLeft = getTimeUntilClose();
  const hours = getFullOpeningHours(locale);

  return (
    <section id="contact" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40 max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.a href={generateCallUrl()} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 p-6 bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass hover:shadow-brand dark:hover:shadow-glass-lg hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center group-hover:bg-brand-brown group-hover:text-brand-beige text-brand-brown dark:text-brand-beige transition-all duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-brand-coffee dark:text-brand-beige">{t("call")}</p>
              <p className="text-sm text-brand-brown dark:text-brand-beige font-medium">{businessInfo.phoneFormatted}</p>
            </div>
          </motion.a>

          <motion.a href={generateWhatsAppUrl()} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="flex items-center gap-4 p-6 bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass hover:shadow-brand dark:hover:shadow-glass-lg hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 dark:bg-green-500/10 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white text-green-600 transition-all duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-brand-coffee dark:text-brand-beige">{t("whatsapp")}</p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Message instantane</p>
            </div>
          </motion.a>

          <motion.a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex items-center gap-4 p-6 bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass hover:shadow-brand dark:hover:shadow-glass-lg hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center group-hover:bg-brand-brown group-hover:text-brand-beige text-brand-brown dark:text-brand-beige transition-all duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-brand-coffee dark:text-brand-beige">{t("direction")}</p>
              <p className="text-sm text-brand-brown dark:text-brand-beige font-medium flex items-center gap-1">{businessInfo.address} <ExternalLink className="w-3 h-3" /></p>
            </div>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-brand-brown dark:text-brand-beige" />
              <h3 className="font-semibold text-brand-coffee dark:text-brand-beige">{t("hours")}</h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2.5 h-2.5 rounded-full ${open ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
              <span className={open ? "text-green-600 dark:text-green-400 font-semibold" : "text-red-600 dark:text-red-400 font-semibold"}>
                {open ? "Ouvert maintenant" : "Ferme"}
              </span>
              {open && timeLeft && <span className="text-sm text-brand-coffee/40 dark:text-brand-beige/30">- ferme dans {timeLeft}</span>}
            </div>
            <div className="space-y-2">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-brand-coffee/60 dark:text-brand-beige/50">{h.day}</span>
                  <span className="font-medium text-brand-coffee dark:text-brand-beige">{h.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass h-72 md:h-auto min-h-[300px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d${businessInfo.coordinates.lng}!3d${businessInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${businessInfo.coordinates.lat}!5e0!3m2!1sfr!2sma!4v1`}
              width="100%" height="100%" style={{ border: 0, minHeight: "300px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Marouane Devise - Casablanca"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
