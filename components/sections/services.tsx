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
      staggerChildren: 0.08,
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
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-ocean mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-brand-ocean/55 max-w-2xl mx-auto">
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
                <Card className="h-full hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-brand-ocean/5 bg-white group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-brand-sm bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-lg text-brand-ocean group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-ocean/50 text-sm leading-relaxed">
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
