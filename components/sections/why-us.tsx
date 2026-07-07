"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Zap, TrendingUp, Users, Award } from "lucide-react";

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
}

const stats = [
  {
    icon: Star,
    value: 4.8,
    suffix: "/5",
    labelKey: "rating",
    isDecimal: true,
  },
  {
    icon: Users,
    value: 19,
    suffix: "",
    labelKey: "reviews",
    isDecimal: false,
  },
  {
    icon: Zap,
    value: 5,
    suffix: " min",
    labelKey: "fast",
    isDecimal: false,
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: "%",
    labelKey: "competitive",
    isDecimal: false,
  },
];

export function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-navy-950">
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

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-navy-900/50 rounded-2xl p-6 text-center shadow-lg border border-navy-100 dark:border-navy-800"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white dark:text-navy-900" />
              </div>
              <div className="text-3xl font-bold text-navy-900 dark:text-white mb-1">
                {stat.isDecimal ? (
                  <span>4.8</span>
                ) : (
                  <AnimatedCounter target={stat.value} />
                )}
                <span className="text-gold-500">{stat.suffix}</span>
              </div>
              <p className="text-sm text-navy-600 dark:text-gray-400">
                {t(stat.labelKey as any)}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Zap,
              titleKey: "fast",
              descKey: "fastDesc",
            },
            {
              icon: TrendingUp,
              titleKey: "competitive",
              descKey: "competitiveDesc",
            },
            {
              icon: Award,
              titleKey: "professional",
              descKey: "professionalDesc",
            },
            {
              icon: Users,
              titleKey: "trusted",
              descKey: "trustedDesc",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-900/30 border border-navy-100 dark:border-navy-800"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                <feature.icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 dark:text-white mb-1">
                  {t(feature.titleKey as any)}
                </h3>
                <p className="text-sm text-navy-600 dark:text-gray-400">
                  {t(feature.descKey as any)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
