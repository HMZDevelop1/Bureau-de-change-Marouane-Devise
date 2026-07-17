"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Search, RefreshCw, ArrowUpRight } from "lucide-react";
import { currencies } from "@/data/currencies";

export function RatesSection() {
  const t = useTranslations("rates");
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.nameEn.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  const TrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-brand-coffee/30 dark:text-brand-beige/30" />;
  };

  return (
    <section id="rates" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
            <RefreshCw className="w-4 h-4" />
            {t("updated")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-coffee dark:text-brand-beige mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-coffee/30 dark:text-brand-beige/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("search")}
              className="w-full pl-12 pr-4 py-3.5 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige placeholder:text-brand-coffee/30 dark:placeholder:text-brand-beige/30 focus:outline-none focus:ring-2 focus:ring-brand-brown/30 focus:border-brand-brown/50 transition-all duration-300"
            />
          </div>
        </motion.div>

        <div className="hidden md:block">
          <div className="bg-brand-beige dark:bg-brand-beige/[0.03] rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass overflow-hidden">
            <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-brand-coffee/[0.03] dark:bg-brand-beige/[0.03] border-b border-brand-brown/[0.06] dark:border-brand-beige/[0.06]">
              <span className="text-sm font-semibold text-brand-coffee/50 dark:text-brand-beige/40">{t("all")}</span>
              <span className="text-sm font-semibold text-brand-coffee/50 dark:text-brand-beige/40 text-right">{t("buy")}</span>
              <span className="text-sm font-semibold text-brand-coffee/50 dark:text-brand-beige/40 text-right">{t("sell")}</span>
              <span className="text-sm font-semibold text-brand-coffee/50 dark:text-brand-beige/40 text-right">Spread</span>
              <span className="text-sm font-semibold text-brand-coffee/50 dark:text-brand-beige/40 text-right">Tendance</span>
            </div>
            {displayed.map((currency, i) => (
              <motion.div
                key={currency.code}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-brand-brown/[0.04] dark:border-brand-beige/[0.04] last:border-0 hover:bg-brand-brown/[0.02] dark:hover:bg-brand-beige/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{currency.flag}</span>
                  <div>
                    <p className="font-semibold text-brand-coffee dark:text-brand-beige text-sm">{currency.code}/MAD</p>
                    <p className="text-xs text-brand-coffee/40 dark:text-brand-beige/30">{locale === "en" ? currency.nameEn : locale === "ar" ? currency.nameAr : currency.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-brand-coffee dark:text-brand-beige">{currency.buy.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-brand-brown dark:text-brand-beige">{currency.sell.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-brand-coffee/40 dark:text-brand-beige/30">{(currency.sell - currency.buy).toFixed(2)}</p>
                </div>
                <div className="flex justify-end items-center">
                  <TrendIcon trend={currency.trend} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-3">
          {displayed.map((currency, i) => (
            <motion.div
              key={currency.code}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-brand-beige dark:bg-brand-beige/[0.04] rounded-xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] p-4 shadow-card dark:shadow-glass"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{currency.flag}</span>
                <span className="font-semibold text-brand-coffee dark:text-brand-beige text-sm">{currency.code}/MAD</span>
                <TrendIcon trend={currency.trend} />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-coffee/40 dark:text-brand-beige/30">{t("buy")}</span>
                  <span className="font-bold text-brand-coffee dark:text-brand-beige">{currency.buy.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-coffee/40 dark:text-brand-beige/30">{t("sell")}</span>
                  <span className="font-bold text-brand-brown dark:text-brand-beige">{currency.sell.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-brown/15 dark:border-brand-beige/10 text-brand-coffee dark:text-brand-beige font-semibold rounded-xl hover:border-brand-brown/30 dark:hover:border-brand-beige/20 hover:text-brand-brown hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300"
            >
              {t("viewAll")}
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
