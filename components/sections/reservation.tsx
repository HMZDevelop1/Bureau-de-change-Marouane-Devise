"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Calendar, User, CreditCard } from "lucide-react";
import { currencies } from "@/data/currencies";
import { generateWhatsAppReservationUrl, generateCallUrl, getPhoneFormatted } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ReservationSection() {
  const t = useTranslations("reservation");
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    if (!name || !amount) return;
    window.open(generateWhatsAppReservationUrl({ name, currency, amount, date, message }), "_blank");
  };

  return (
    <section id="reservation" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              {t("title")}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-6">{t("title")}</h2>
            <p className="text-lg text-brand-coffee/70 dark:text-brand-beige/55 mb-8 leading-relaxed">{t("subtitle")}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 dark:bg-green-500/10 border border-green-500/20">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center"><MessageSquare className="w-6 h-6 text-white" /></div>
                <div>
                  <p className="font-semibold text-brand-coffee dark:text-brand-beige">{t("form.whatsapp")}</p>
                  <p className="text-sm text-brand-coffee/70 dark:text-brand-beige/55">{t("quickResponse")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-brown/5 dark:bg-brand-beige/5 border border-brand-brown/20 dark:border-brand-beige/20">
                <div className="w-12 h-12 rounded-xl bg-brand-coffee dark:bg-brand-beige flex items-center justify-center"><Phone className="w-6 h-6 text-brand-beige dark:text-brand-coffee" /></div>
                <div>
                  <p className="font-semibold text-brand-coffee dark:text-brand-beige">{t("form.submit")}</p>
                  <p className="text-sm text-brand-coffee/70 dark:text-brand-beige/55">{getPhoneFormatted()}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-card dark:shadow-glass p-6 md:p-8 backdrop-blur-xl">
              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/55 mb-2"><User className="w-4 h-4" />{t("form.name")}</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Mohamed Alami"
                    className="w-full px-4 py-3 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige placeholder:text-brand-coffee/50 dark:placeholder:text-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-brown/30 font-medium transition-all duration-300" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/55 mb-2"><CreditCard className="w-4 h-4" />{t("form.currency")}</label>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-brown/30 font-medium transition-all duration-300">
                      {currencies.map((c) => (<option key={c.code} value={c.code}>{c.flag} {c.code}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/55 mb-2 block">{t("form.amount")}</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="1000"
                      className="w-full px-4 py-3 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige placeholder:text-brand-coffee/50 dark:placeholder:text-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-brown/30 font-medium transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/55 mb-2"><Calendar className="w-4 h-4" />{t("form.date")}</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-brown/30 font-medium transition-all duration-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-coffee/60 dark:text-brand-beige/55 mb-2 block">{t("form.message")}</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Message optionnel..."
                    className="w-full px-4 py-3 bg-brand-beige dark:bg-brand-beige/[0.04] border border-brand-brown/10 dark:border-brand-beige/[0.08] rounded-xl text-brand-coffee dark:text-brand-beige placeholder:text-brand-coffee/50 dark:placeholder:text-brand-beige/50 focus:outline-none focus:ring-2 focus:ring-brand-brown/30 font-medium transition-all duration-300 resize-none" />
                </div>
                <div className="flex gap-3">
                  <button onClick={handleWhatsApp} disabled={!name || !amount}
                    className={cn("flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all duration-300",
                      name && amount ? "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl active:scale-[0.98]" : "bg-brand-coffee/10 dark:bg-brand-beige/[0.04] text-brand-coffee/50 dark:text-brand-beige/55 cursor-not-allowed"
                    )}>
                    <MessageSquare className="w-5 h-5" />
                    {t("form.whatsapp")}
                  </button>
                  <a href={generateCallUrl()} className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-brand-brown/30 dark:border-brand-beige/30 text-brand-brown dark:text-brand-beige hover:bg-brand-brown hover:text-brand-beige active:scale-[0.98] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
