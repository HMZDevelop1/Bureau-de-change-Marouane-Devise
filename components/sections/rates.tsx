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
      staggerChildren: 0.08,
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
    <section id="rates" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Search & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-ocean/30" />
            <input
              type="text"
              placeholder={t("search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-brand border border-brand-ocean/10 bg-brand-ivory/50 text-brand-ocean placeholder:text-brand-ocean/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
            />
          </div>

          <div className="flex items-center gap-1 bg-brand-ocean/5 rounded-brand p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-brand-sm text-sm font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-white text-brand-ocean shadow-card"
                  : "text-brand-ocean/50 hover:text-brand-ocean"
              }`}
            >
              {t("all")}
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-4 py-2 rounded-brand-sm text-sm font-semibold transition-all ${
                activeTab === "popular"
                  ? "bg-white text-brand-ocean shadow-card"
                  : "text-brand-ocean/50 hover:text-brand-ocean"
              }`}
            >
              {t("popular")}
            </button>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-2 text-sm text-brand-ocean/40 mb-6">
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
              <Card className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 border-brand-ocean/5 bg-white group cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{currency.flag}</span>
                      <div>
                        <CardTitle className="text-lg text-brand-ocean group-hover:text-brand-orange transition-colors">
                          {currency.code}
                        </CardTitle>
                        <p className="text-sm text-brand-ocean/45">
                          {currency.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-brand-ivory rounded-brand-sm p-3">
                      <div className="flex items-center gap-1 text-brand-orange mb-1">
                        <TrendingDown className="h-3 w-3" />
                        <span className="text-xs font-semibold">{t("buy")}</span>
                      </div>
                      <p className="text-lg font-bold text-brand-orange">
                        {currency.buyRate.toFixed(2)}
                      </p>
                      <p className="text-xs text-brand-ocean/40">
                        MAD
                      </p>
                    </div>
                    <div className="bg-brand-ivory rounded-brand-sm p-3">
                      <div className="flex items-center gap-1 text-brand-ocean mb-1">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-xs font-semibold">{t("sell")}</span>
                      </div>
                      <p className="text-lg font-bold text-brand-ocean">
                        {currency.sellRate.toFixed(2)}
                      </p>
                      <p className="text-xs text-brand-ocean/40">
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
