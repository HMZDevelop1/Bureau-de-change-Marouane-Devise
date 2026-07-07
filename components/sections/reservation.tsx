"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { currencies } from "@/data/currencies";
import { contactInfo } from "@/data/contact";

export function ReservationSection() {
  const t = useTranslations("reservation");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    currency: "EUR",
    amount: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleWhatsApp = () => {
    const text = `Bonjour, je souhaite réserver des devises:\n\nNom: ${formData.fullName}\nTéléphone: ${formData.phone}\nDevise: ${formData.currency}\nMontant: ${formData.amount}\nDate: ${formData.date}\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="reservation" className="py-20 lg:py-32 bg-white">
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
                <Calendar className="h-5 w-5 text-brand-orange" />
                {t("title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-brand-orange mx-auto mb-4" />
                  <p className="text-xl font-semibold text-brand-ocean">
                    {t("success")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-ocean mb-2">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean placeholder:text-brand-ocean/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-ocean mb-2">
                        {t("form.phone")}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean placeholder:text-brand-ocean/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                      />
                    </div>

                    {/* Currency */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-ocean mb-2">
                        {t("form.currency")}
                      </label>
                      <select
                        value={formData.currency}
                        onChange={(e) =>
                          setFormData({ ...formData, currency: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                      >
                        {currencies.map((currency) => (
                          <option key={currency.code} value={currency.code}>
                            {currency.flag} {currency.code} - {currency.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-ocean mb-2">
                        {t("form.amount")}
                      </label>
                      <input
                        type="number"
                        required
                        min="0"
                        value={formData.amount}
                        onChange={(e) =>
                          setFormData({ ...formData, amount: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean placeholder:text-brand-ocean/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-ocean mb-2">
                        {t("form.date")}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-ocean mb-2">
                      {t("form.message")}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-brand border border-brand-ocean/10 bg-white text-brand-ocean placeholder:text-brand-ocean/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-brand bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-orange transition-all duration-300 flex-1"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      {t("form.submit")}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="rounded-brand border-brand-ocean/20 text-brand-ocean hover:bg-brand-orange hover:border-brand-orange hover:text-white font-semibold transition-all duration-300 flex-1"
                      onClick={handleWhatsApp}
                    >
                      <MessageSquare className="h-5 w-5 mr-2" />
                      {t("form.whatsapp")}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
