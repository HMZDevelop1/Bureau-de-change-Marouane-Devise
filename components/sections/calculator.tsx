"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calculator, ArrowUpDown, RotateCcw } from "lucide-react";
import { currencies } from "@/data/currencies";
import { cn } from "@/lib/utils";

export function CalculatorSection() {
  const t = useTranslations("calculator");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const curr = currencies.find((c) => c.code === fromCurrency);
    if (curr && amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount) && numAmount > 0) {
        setResult(numAmount * curr.sell);
      } else {
        setResult(null);
      }
    }
  };

  const reset = () => {
    setAmount("");
    setFromCurrency("EUR");
    setResult(null);
  };

  return (
    <section className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4" />
              {t("title")}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-6">
              {t("subtitle")}
            </h2>
            <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40 mb-8 leading-relaxed">
              {t("disclaimer")}
            </p>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 dark:bg-green-500/10 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">{t("no_commission")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass p-6 md:p-8 backdrop-blur-xl">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/40 mb-2">{t("amount")}</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value); setResult(null); }}
                    placeholder="1000"
                    className="w-full px-4 py-3.5 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige placeholder:text-brand-coffee/30 dark:placeholder:text-brand-beige/30 focus:outline-none focus:ring-2 focus:ring-brand-brown/30 focus:border-brand-brown/50 text-lg font-semibold transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/40 mb-2">{t("from")}</label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => { setFromCurrency(e.target.value); setResult(null); }}
                    className="w-full px-4 py-3.5 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-brown/30 focus:border-brand-brown/50 font-medium transition-all duration-300"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setFromCurrency(fromCurrency === "EUR" ? "USD" : "EUR")}
                    className="p-3 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 text-brand-brown dark:text-brand-beige hover:bg-brand-brown hover:text-brand-beige transition-all duration-300 hover:rotate-180"
                    aria-label={t("swap")}
                  >
                    <ArrowUpDown className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-center p-4 rounded-xl bg-brand-coffee/[0.03] dark:bg-brand-beige/[0.03] border border-brand-coffee/[0.04] dark:border-brand-beige/[0.04]">
                  <p className="text-sm text-brand-coffee/40 dark:text-brand-beige/30 mb-1">{t("result")}</p>
                  {result !== null ? (
                    <p className="text-2xl sm:text-3xl font-bold text-brand-brown dark:text-brand-beige">
                      {result.toFixed(2)} <span className="text-base sm:text-lg text-brand-coffee/40 dark:text-brand-beige/30">MAD</span>
                    </p>
                  ) : (
                    <p className="text-2xl sm:text-3xl font-bold text-brand-coffee/20 dark:text-brand-beige/10">-- MAD</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={calculate}
                    disabled={!amount}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all duration-300",
                      amount
                        ? "bg-brand-coffee text-brand-beige shadow-coffee hover:shadow-coffee-lg hover:bg-brand-brown active:scale-[0.98]"
                        : "bg-brand-coffee/10 dark:bg-brand-beige/[0.04] text-brand-coffee/30 dark:text-brand-beige/20 cursor-not-allowed"
                    )}
                  >
                    {t("calculate")}
                  </button>
                  <button
                    onClick={reset}
                    className="px-4 py-3.5 rounded-xl border border-brand-brown/10 dark:border-brand-beige/[0.08] text-brand-coffee/40 dark:text-brand-beige/30 hover:text-brand-brown hover:border-brand-brown/30 transition-all duration-300"
                    aria-label={t("swap")}
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
