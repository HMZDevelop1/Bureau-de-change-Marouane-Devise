"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Star, Users, GraduationCap, Compass, Briefcase, Heart, Building2 } from "lucide-react";
import { businessInfo } from "@/data/business";

export function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const audiences = [
    { icon: Users, label: t("travelers") },
    { icon: GraduationCap, label: t("students") },
    { icon: Compass, label: t("pilgrims") },
    { icon: Briefcase, label: t("professionals") },
    { icon: Heart, label: t("families") },
    { icon: Building2, label: t("missions") },
  ];

  return (
    <section id="about" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee dark:text-brand-beige mb-6">{t("title")}</h2>
            <p className="text-lg text-brand-coffee/60 dark:text-brand-beige/50 leading-relaxed mb-8">{t("content")}</p>
            <div className="grid grid-cols-3 gap-4">
              {audiences.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-brand-coffee/[0.03] dark:bg-brand-beige/[0.03] border border-brand-coffee/[0.04] dark:border-brand-beige/[0.04] hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.08] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-brand-brown dark:text-brand-beige" />
                  <span className="text-xs font-medium text-brand-coffee/60 dark:text-brand-beige/50 text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center">
                  <Star className="w-8 h-8 fill-brand-brown text-brand-brown dark:fill-brand-beige dark:text-brand-beige" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-brand-coffee dark:text-brand-beige">{businessInfo.googleRating}</p>
                  <p className="text-sm text-brand-coffee/40 dark:text-brand-beige/30">sur Google</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < Math.floor(businessInfo.googleRating) ? "fill-brand-brown text-brand-brown dark:fill-brand-beige dark:text-brand-beige" : "fill-brand-coffee/10 dark:fill-brand-beige/10 text-brand-coffee/10 dark:text-brand-beige/10"}`} />
                ))}
              </div>
              <p className="text-brand-coffee/50 dark:text-brand-beige/40 text-sm">{businessInfo.totalReviews} avis vérifiés sur Google</p>
              <div className="mt-6 pt-6 border-t border-brand-coffee/[0.06] dark:border-brand-beige/[0.06]">
                <p className="text-sm text-brand-coffee/40 dark:text-brand-beige/30 italic">{"Service rapide et professionnel. Les taux sont très compétitifs."}</p>
                <p className="text-xs text-brand-coffee/30 dark:text-brand-beige/20 mt-2">- Ahmed B., avis Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
