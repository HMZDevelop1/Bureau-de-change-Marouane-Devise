"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpDown, Calculator as CalcIcon, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { currencies } from "@/data/currencies";

export function CalculatorSection() {
  const t = useTranslations("calculator");
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const selectedCurrency = currencies.find((c) => c.code === fromCurrency);

  useEffect(() => {
    if (selectedCurrency && amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount) && numAmount > 0) {
        setResult(numAmount * selectedCurrency.buyRate);
      } else {
        setResult(null);
      }
    }
  }, [amount, selectedCurrency]);

  const handleSwap = () => {
    // For now, just swap the direction concept
    // In a real app, this would switch between buy/sell
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-gray-50 dark:bg-navy-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        >
          <Card className="shadow-xl border-navy-100 dark:border-navy-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalcIcon className="h-5 w-5 text-gold-500" />
                {t("title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-navy-700 dark:text-gray-300 mb-2">
                  {t("amount")}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  min="0"
                />
              </div>

              {/* Currency Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-gray-300 mb-2">
                    {t("from")}
                  </label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSwap}
                    className="rounded-full bg-navy-100 dark:bg-navy-800 hover:bg-navy-200 dark:hover:bg-navy-700"
                  >
                    <ArrowUpDown className="h-5 w-5 text-navy-600 dark:text-gray-300" />
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-gray-300 mb-2">
                    {t("to")}
                  </label>
                  <div className="w-full px-4 py-3 rounded-xl border border-navy-200 dark:border-navy-700 bg-navy-50 dark:bg-navy-900 text-navy-900 dark:text-white">
                    <span className="text-lg font-semibold">MAD</span>
                    <span className="text-navy-500 dark:text-gray-400 ml-2">
                      Dirham Marocain
                    </span>
                  </div>
                </div>
              </div>

              {/* Result */}
              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-xl p-6"
                >
                  <p className="text-sm text-navy-600 dark:text-gray-400 mb-2">
                    {t("result")}
                  </p>
                  <p className="text-3xl font-bold text-navy-900 dark:text-white">
                    {result.toFixed(2)}{" "}
                    <span className="text-lg font-medium text-navy-600 dark:text-gray-400">
                      MAD
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-green-600 dark:text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    {t("no_commission")}
                  </div>
                </motion.div>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-sm text-navy-500 dark:text-gray-400 bg-gray-50 dark:bg-navy-800/50 rounded-lg p-4">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <p>{t("disclaimer")}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
