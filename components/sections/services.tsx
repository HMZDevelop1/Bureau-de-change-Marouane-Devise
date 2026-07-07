"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Banknote,
  TrendingUp,
  Shield,
  Percent,
  Plane,
  Building2,
  GraduationCap,
  Briefcase,
  CalendarCheck,
  HeadphonesIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Banknote,
  TrendingUp,
  Shield,
  Percent,
  Plane,
  Building2,
  GraduationCap,
  Briefcase,
  CalendarCheck,
  HeadphonesIcon,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20 lg:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Banknote;
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-navy-100 dark:border-navy-800 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white dark:text-navy-900" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
