"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Phone, MapPin, Star, Shield, Zap, TrendingUp, Clock } from "lucide-react";
import { businessInfo, GOOGLE_MAPS_URL } from "@/data/business";
import { currencies } from "@/data/currencies";
import { generateCallUrl } from "@/lib/whatsapp";
import { isOpenNow } from "@/lib/hours";

const floatingCurrencies = [
  { code: "EUR", flag: "\u{1F1EA}\u{1F1FA}", rate: "10.72" },
  { code: "USD", flag: "\u{1F1FA}\u{1F1F8}", rate: "9.82" },
  { code: "GBP", flag: "\u{1F1EC}\u{1F1E7}", rate: "12.45" },
];

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const open = isOpenNow();

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden bg-brand-beige dark:bg-brand-black">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-beige via-brand-beige to-brand-beige dark:from-brand-black dark:via-brand-black dark:to-brand-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-brown/5 dark:bg-brand-brown/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-coffee/5 dark:bg-brand-coffee/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-brown/10 border border-brand-brown/20 mb-6"
            >
              <span className={`w-2 h-2 rounded-full ${open ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
              <span className="text-sm font-medium text-brand-brown dark:text-brand-beige">{t("badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-coffee dark:text-brand-beige leading-[1.1] mb-6"
            >
              {t("title")}{" "}
              <span className="text-brand-brown dark:text-brand-beige">{t("titleHighlight")}</span>
              <br />
              {t("titleEnd")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-coffee/60 dark:text-brand-beige/50 mb-8 max-w-lg leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#rates" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-coffee text-brand-beige font-semibold rounded-xl shadow-coffee hover:shadow-coffee-lg hover:bg-brand-brown active:scale-[0.98] transition-all duration-300">
                <TrendingUp className="w-5 h-5" />
                {t("cta_rates")}
              </a>
              <a href={generateCallUrl()} className="inline-flex items-center gap-2 px-7 py-3.5 border border-brand-brown/15 dark:border-brand-beige/10 text-brand-coffee dark:text-brand-beige font-semibold rounded-xl hover:border-brand-brown/30 dark:hover:border-brand-beige/20 hover:text-brand-brown hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] active:scale-[0.98] transition-all duration-300">
                <Phone className="w-5 h-5" />
                {t("cta_call")}
              </a>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-brand-brown/15 dark:border-brand-beige/10 text-brand-coffee dark:text-brand-beige font-semibold rounded-xl hover:border-brand-brown/30 dark:hover:border-brand-beige/20 hover:text-brand-brown hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] active:scale-[0.98] transition-all duration-300">
                <MapPin className="w-5 h-5" />
                {t("cta_direction")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, label: t("trust_no_commission") },
                { icon: Zap, label: t("trust_fast") },
                { icon: TrendingUp, label: t("trust_transparent") },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-brand-coffee/50 dark:text-brand-beige/40">
                  <badge.icon className="w-4 h-4 text-brand-brown dark:text-brand-beige" />
                  <span>{badge.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 fill-brand-brown text-brand-brown dark:fill-brand-beige dark:text-brand-beige" />
                <span className="font-semibold text-brand-coffee dark:text-brand-beige">{businessInfo.googleRating}/5</span>
                <span className="text-brand-coffee/40 dark:text-brand-beige/30">({t("trust_reviews")})</span>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/10 to-brand-coffee/10 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-coffee/5 to-brand-brown/5 rounded-3xl -rotate-3" />
              <div className="relative bg-brand-beige dark:bg-brand-coffee/40 rounded-3xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brand-brown dark:text-brand-beige" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-coffee dark:text-brand-beige">Taux du jour</p>
                    <p className="text-xs text-brand-coffee/40 dark:text-brand-beige/30">Mis à jour quotidiennement</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {floatingCurrencies.map((curr, i) => (
                    <motion.div
                      key={curr.code}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-brand-coffee/[0.03] dark:bg-brand-beige/[0.03] border border-brand-coffee/[0.04] dark:border-brand-beige/[0.04]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{curr.flag}</span>
                        <div>
                          <p className="font-semibold text-brand-coffee dark:text-brand-beige text-sm">{curr.code}/MAD</p>
                          <p className="text-xs text-brand-coffee/40 dark:text-brand-beige/30">{currencies.find(c => c.code === curr.code)?.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-brand-brown dark:text-brand-beige text-lg">{curr.rate}</p>
                        <p className="text-xs text-brand-coffee/40 dark:text-brand-beige/30">MAD</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-brand-coffee/[0.06] dark:border-brand-beige/[0.06] flex items-center gap-2 text-xs text-brand-coffee/40 dark:text-brand-beige/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Les taux peuvent varier selon le montant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a href="#rates" className="flex flex-col items-center gap-2 text-brand-coffee/30 dark:text-brand-beige/20 hover:text-brand-brown dark:hover:text-brand-beige transition-colors">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
