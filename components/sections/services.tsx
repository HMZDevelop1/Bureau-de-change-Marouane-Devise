"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeftRight, Plane, Compass, GraduationCap, Briefcase, Building2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  ArrowLeftRight, Plane, Compass, GraduationCap, Briefcase, Building2,
};

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section id="services" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40 max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || ArrowLeftRight;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] p-6 shadow-card dark:shadow-glass hover:shadow-brand dark:hover:shadow-glass-lg hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center mb-5 group-hover:bg-brand-brown group-hover:text-brand-beige text-brand-brown dark:text-brand-beige transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-coffee dark:text-brand-beige mb-3">
                  {service.title[locale as keyof typeof service.title]}
                </h3>
                <p className="text-brand-coffee/50 dark:text-brand-beige/40 text-sm leading-relaxed mb-4">
                  {service.description[locale as keyof typeof service.description]}
                </p>
                <div className="flex items-center gap-2 text-brand-brown dark:text-brand-beige text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
