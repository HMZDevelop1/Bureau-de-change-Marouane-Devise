"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  TrendingUp,
  Shield,
  Zap,
  Eye,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { currencies } from "@/data/currencies";
import { contactInfo } from "@/data/contact";

const floatingCurrencies = currencies.slice(0, 6);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy-50 to-white dark:from-navy-950 dark:to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-royal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Currency Cards - Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingCurrencies.map((currency, index) => (
          <motion.div
            key={currency.code}
            className="absolute glass rounded-xl px-4 py-3 shadow-lg"
            style={{
              top: `${15 + index * 12}%`,
              right: index % 2 === 0 ? "5%" : "12%",
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currency.flag}</span>
              <div>
                <p className="text-xs font-medium text-navy-900 dark:text-white">
                  {currency.code}
                </p>
                <p className="text-xs text-gold-600 dark:text-gold-400 font-semibold">
                  {currency.buyRate.toFixed(2)} MAD
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
          >
            <MapPin className="h-4 w-4 text-gold-600" />
            <span className="text-sm font-medium text-gold-600 dark:text-gold-400">
              {t("badge")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 dark:text-white leading-tight mb-6"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-navy-600 dark:text-gray-300 mb-8 max-w-2xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#rates">
              <Button size="lg" className="rounded-full">
                <TrendingUp className="h-5 w-5 mr-2" />
                {t("cta_rates")}
              </Button>
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Button size="lg" variant="outline" className="rounded-full">
                <Phone className="h-5 w-5 mr-2" />
                {t("cta_call")}
              </Button>
            </a>
            <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full">
                <MapPin className="h-5 w-5 mr-2" />
                {t("cta_direction")}
              </Button>
            </a>
          </motion.div>

          {/* Google Rating Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass shadow-lg"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= 4
                      ? "fill-gold-500 text-gold-500"
                      : "fill-gold-500/50 text-gold-500/50"
                  }`}
                />
              ))}
            </div>
            <div className="h-6 w-px bg-navy-200 dark:bg-navy-700" />
            <span className="font-semibold text-navy-900 dark:text-white">
              4.8/5
            </span>
            <span className="text-sm text-navy-500 dark:text-gray-400">
              Google
            </span>
            <span className="text-sm text-navy-400 dark:text-gray-500">•</span>
            <span className="text-sm text-navy-500 dark:text-gray-400">
              19 avis
            </span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {[
              {
                icon: Shield,
                label: t("trust_no_commission"),
              },
              {
                icon: Zap,
                label: t("trust_fast"),
              },
              {
                icon: Eye,
                label: t("trust_transparent"),
              },
              {
                icon: TrendingUp,
                label: t("trust_secure"),
              },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-navy-600 dark:text-gray-300"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                  <badge.icon className="h-4 w-4 text-navy-600 dark:text-gold-400" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
