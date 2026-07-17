"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const t = useTranslations("faq");
  const locale = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            {t("title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40">{t("subtitle")}</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={faq.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <button onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className={cn("w-full flex items-center justify-between gap-4 p-5 rounded-xl border text-left transition-all duration-300",
                  openId === faq.id ? "bg-brand-brown/5 dark:bg-brand-beige/[0.06] border-brand-brown/20 dark:border-brand-beige/20" : "bg-brand-beige dark:bg-brand-coffee/40 border-brand-brown/[0.06] dark:border-brand-beige/[0.06] hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12]"
                )}>
                <span className={cn("font-semibold text-sm md:text-base", openId === faq.id ? "text-brand-brown dark:text-brand-beige" : "text-brand-coffee dark:text-brand-beige")}>
                  {faq.question[locale as keyof typeof faq.question]}
                </span>
                <ChevronDown className={cn("w-5 h-5 shrink-0 transition-transform duration-300", openId === faq.id ? "rotate-180 text-brand-brown dark:text-brand-beige" : "text-brand-coffee/30 dark:text-brand-beige/30")} />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-5 py-4 text-sm text-brand-coffee/60 dark:text-brand-beige/50 leading-relaxed">
                      {faq.answer[locale as keyof typeof faq.answer]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
