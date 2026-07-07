"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Award } from "lucide-react";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-gray-300 leading-relaxed mb-8">
              {t("content")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Transparence" },
                { icon: Clock, label: "Rapidité" },
                { icon: Users, label: "Professionnalisme" },
                { icon: Award, label: "Confiance" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-navy-900/50 border border-navy-100 dark:border-navy-800"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <span className="font-medium text-navy-900 dark:text-white text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-navy-700 dark:to-navy-800 p-8 shadow-2xl">
              <div className="h-full rounded-2xl bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-white mb-2">
                    4.8
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-6 w-6 ${
                          star <= 4 ? "text-gold-500" : "text-gold-500/50"
                        } fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-lg">Google Reviews</p>
                  <p className="text-white/50 text-sm mt-1">19 avis vérifiés</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-royal-500/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
