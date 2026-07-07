"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, TrendingUp, TrendingDown, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currencies, popularCurrencies } from "@/data/currencies";
import { formatTime } from "@/lib/utils";

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

export function RatesSection() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "popular">("all");
  const t = useTranslations("rates");

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayCurrencies =
    activeTab === "popular"
      ? filteredCurrencies.filter((c) => popularCurrencies.includes(c.code))
      : filteredCurrencies;

  return (
    <section id="rates" className="py-20 lg:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <p className="text-lg text-navy-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-navy-400" />
            <input
              type="text"
              placeholder={t("search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-100 dark:bg-navy-800 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-white dark:bg-navy-700 text-navy-900 dark:text-white shadow-sm"
                  : "text-navy-600 dark:text-gray-400"
              }`}
            >
              {t("all")}
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "popular"
                  ? "bg-white dark:bg-navy-700 text-navy-900 dark:text-white shadow-sm"
                  : "text-navy-600 dark:text-gray-400"
              }`}
            >
              {t("popular")}
            </button>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-2 text-sm text-navy-500 dark:text-gray-400 mb-6">
          <Clock className="h-4 w-4" />
          <span>
            {t("updated")}: {formatTime(currencies[0].lastUpdated)}
          </span>
        </div>

        {/* Currency Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {displayCurrencies.map((currency) => (
            <motion.div key={currency.code} variants={item}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-navy-100 dark:border-navy-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{currency.flag}</span>
                      <div>
                        <CardTitle className="text-lg">{currency.code}</CardTitle>
                        <p className="text-sm text-navy-500 dark:text-gray-400">
                          {currency.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400 mb-1">
                        <TrendingDown className="h-3 w-3" />
                        <span className="text-xs font-medium">{t("buy")}</span>
                      </div>
                      <p className="text-lg font-bold text-green-700 dark:text-green-300">
                        {currency.buyRate.toFixed(2)}
                      </p>
                      <p className="text-xs text-green-600/70 dark:text-green-400/70">
                        MAD
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 mb-1">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-xs font-medium">{t("sell")}</span>
                      </div>
                      <p className="text-lg font-bold text-red-700 dark:text-red-300">
                        {currency.sellRate.toFixed(2)}
                      </p>
                      <p className="text-xs text-red-600/70 dark:text-red-400/70">
                        MAD
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
