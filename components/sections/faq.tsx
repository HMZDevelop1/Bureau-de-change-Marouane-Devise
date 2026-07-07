"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const t = useTranslations("faq");

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-gray-400">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-navy-100 dark:border-navy-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-navy-900/50 hover:bg-gray-50 dark:hover:bg-navy-800/50 transition-colors"
              >
                <span className="font-medium text-navy-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-navy-500 shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-navy-600 dark:text-gray-400 bg-gray-50 dark:bg-navy-800/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
