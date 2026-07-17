"use client";

import { useTranslations } from "next-intl";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, Zap, TrendingUp, Users, Shield, Award } from "lucide-react";
import { businessInfo } from "@/data/business";
import { useEffect, useRef } from "react";

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(1));
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const controls = animate(count, target, { duration, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v; });
    return () => { controls.stop(); unsubscribe(); };
  }, [target, duration, count, rounded]);
  return <span ref={ref}>0.0</span>;
}

export function WhyUsSection() {
  const t = useTranslations("whyUs");
  const features = [
    { icon: Zap, title: t("fast"), description: t("fastDesc") },
    { icon: TrendingUp, title: t("competitive"), description: t("competitiveDesc") },
    { icon: Users, title: t("professional"), description: t("professionalDesc") },
    { icon: Shield, title: t("trusted"), description: t("trustedDesc") },
  ];

  return (
    <section className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40 max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] p-6 shadow-card dark:shadow-glass hover:shadow-brand dark:hover:shadow-glass-lg hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12] transition-all duration-500 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center mx-auto mb-4 text-brand-brown dark:text-brand-beige">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-coffee dark:text-brand-beige mb-2">{feature.title}</h3>
              <p className="text-sm text-brand-coffee/50 dark:text-brand-beige/40">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] p-8 shadow-card dark:shadow-glass text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-brand-brown dark:text-brand-beige" />
            <span className="text-sm font-semibold text-brand-brown dark:text-brand-beige">{t("rating")}</span>
          </div>
          <div className="text-5xl font-bold text-brand-coffee dark:text-brand-beige mb-2"><CountUp target={businessInfo.googleRating} /></div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(businessInfo.googleRating) ? "fill-brand-brown text-brand-brown dark:fill-brand-beige dark:text-brand-beige" : "fill-brand-coffee/10 dark:fill-brand-beige/10 text-brand-coffee/10 dark:text-brand-beige/10"}`} />
            ))}
          </div>
          <p className="text-sm text-brand-coffee/40 dark:text-brand-beige/30">{t("reviews")}</p>
        </motion.div>
      </div>
    </section>
  );
}
