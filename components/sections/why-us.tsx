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
    <section className="py-20 lg:py-32 bg-brand-ivory">
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
              className="bg-white rounded-brand-lg p-6 text-center shadow-card border border-brand-ocean/5"
            >
              <div className="w-12 h-12 rounded-brand-sm bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-brand-orange" />
              </div>
              <div className="text-3xl font-bold text-brand-ocean mb-1">
                {stat.isDecimal ? (
                  <span>4.8</span>
                ) : (
                  <AnimatedCounter target={stat.value} />
                )}
                <span className="text-brand-orange">{stat.suffix}</span>
              </div>
              <p className="text-sm text-brand-ocean/50">
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
              className="flex items-start gap-4 p-5 rounded-brand-lg bg-white border border-brand-ocean/5 shadow-card"
            >
              <div className="w-10 h-10 rounded-brand-sm bg-brand-gold/15 flex items-center justify-center shrink-0">
                <feature.icon className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-ocean mb-1">
                  {t(feature.titleKey as any)}
                </h3>
                <p className="text-sm text-brand-ocean/50">
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
