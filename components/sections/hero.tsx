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
  ArrowRight,
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

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-ocean/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/3 rounded-full blur-3xl" />
      </div>

      {/* Floating Currency Cards - Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {floatingCurrencies.map((currency, index) => (
          <motion.div
            key={currency.code}
            className="absolute bg-white rounded-brand-lg px-5 py-4 shadow-card border border-brand-ocean/5"
            style={{
              top: `${15 + index * 12}%`,
              right: index % 2 === 0 ? "5%" : "12%",
            }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{currency.flag}</span>
              <div>
                <p className="text-xs font-bold text-brand-ocean tracking-wide">
                  {currency.code}
                </p>
                <p className="text-xs font-bold text-brand-orange">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/15 border border-brand-gold/30 mb-6"
          >
            <MapPin className="h-4 w-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-ocean">
              {t("badge")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-ocean leading-tight mb-6"
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-brand-ocean/65 mb-8 max-w-2xl leading-relaxed"
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
              <Button
                size="lg"
                className="rounded-brand bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-orange transition-all duration-300 hover:shadow-lg group"
              >
                {t("cta_rates")}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-brand border-brand-ocean text-brand-ocean hover:bg-brand-ocean hover:text-white font-semibold transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t("cta_call")}
              </Button>
            </a>
            <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-brand border-brand-ocean/30 text-brand-ocean hover:bg-brand-ocean hover:text-white font-semibold transition-all duration-300"
              >
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
            className="inline-flex items-center gap-3 px-5 py-3 rounded-brand-lg bg-white shadow-card border border-brand-ocean/5"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= 4
                      ? "fill-brand-gold text-brand-gold"
                      : "fill-brand-gold/40 text-brand-gold/40"
                  }`}
                />
              ))}
            </div>
            <div className="h-6 w-px bg-brand-ocean/10" />
            <span className="font-bold text-brand-ocean">
              4.8/5
            </span>
            <span className="text-sm text-brand-ocean/50">Google</span>
            <span className="text-brand-ocean/20">•</span>
            <span className="text-sm text-brand-ocean/50">
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
                className="flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-brand-sm bg-brand-orange/10 flex items-center justify-center">
                  <badge.icon className="h-4 w-4 text-brand-orange" />
                </div>
                <span className="text-sm font-medium text-brand-ocean/70">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
