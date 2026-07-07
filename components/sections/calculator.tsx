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

  return (
    <section id="calculator" className="py-20 lg:py-32 bg-brand-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-brand-ocean/55">
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
          <Card className="shadow-brand-lg border-brand-ocean/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-ocean">
                <CalcIcon className="h-5 w-5 text-brand-orange" />
                {t("title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-semibold text-brand-ocean mb-2">
                  {t("amount")}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean text-lg font-bold focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                  min="0"
                />
              </div>

              {/* Currency Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-sm font-semibold text-brand-ocean mb-2">
                    {t("from")}
                  </label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
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
                    className="rounded-full bg-brand-ocean/5 hover:bg-brand-orange/10 text-brand-ocean hover:text-brand-orange transition-all"
                  >
                    <ArrowUpDown className="h-5 w-5" />
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-ocean mb-2">
                    {t("to")}
                  </label>
                  <div className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-brand-ivory">
                    <span className="text-lg font-bold text-brand-ocean">MAD</span>
                    <span className="text-brand-ocean/40 ml-2 text-sm">
                      Dirham Marocain
                    </span>
                  </div>
                </div>
              </div>

              {/* Result */}
              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-gold/10 border border-brand-gold/30 rounded-brand-lg p-6"
                >
                  <p className="text-sm font-semibold text-brand-ocean/60 mb-2">
                    {t("result")}
                  </p>
                  <p className="text-3xl font-bold text-brand-ocean">
                    {result.toFixed(2)}{" "}
                    <span className="text-lg font-medium text-brand-ocean/50">
                      MAD
                    </span>
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm font-medium text-brand-orange">
                    <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    {t("no_commission")}
                  </div>
                </motion.div>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 text-sm text-brand-ocean/45 bg-brand-ocean/3 rounded-brand p-4">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-brand-ocean/30" />
                <p>{t("disclaimer")}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
