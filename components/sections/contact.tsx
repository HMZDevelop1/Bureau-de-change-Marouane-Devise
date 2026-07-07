"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone */}
            <Card className="hover:shadow-lg transition-shadow border-navy-100 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white dark:text-navy-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-900 dark:text-white">
                      {t("call")}
                    </h3>
                    <p className="text-navy-600 dark:text-gray-400">
                      {contactInfo.phoneFormatted}
                    </p>
                  </div>
                  <a href={`tel:${contactInfo.phone}`}>
                    <Button size="sm" className="rounded-full">
                      <Phone className="h-4 w-4 mr-2" />
                      {t("call")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover:shadow-lg transition-shadow border-navy-100 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-900 dark:text-white">
                      WhatsApp
                    </h3>
                    <p className="text-navy-600 dark:text-gray-400">
                      {contactInfo.phoneFormatted}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-green-500 text-green-600"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="hover:shadow-lg transition-shadow border-navy-100 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white dark:text-navy-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-900 dark:text-white">
                      {t("address")}
                    </h3>
                    <p className="text-navy-600 dark:text-gray-400">
                      {contactInfo.address}
                    </p>
                  </div>
                  <a
                    href={contactInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="rounded-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("direction")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="hover:shadow-lg transition-shadow border-navy-100 dark:border-navy-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white dark:text-navy-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
                      {t("hours")}
                    </h3>
                    <div className="space-y-1 text-sm text-navy-600 dark:text-gray-400">
                      <p>{contactInfo.openingHours.weekday}</p>
                      <p>{contactInfo.openingHours.saturday}</p>
                      <p>{contactInfo.openingHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-navy-100 dark:border-navy-800 overflow-hidden">
              <div className="relative h-full min-h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8489!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjEiTiA3wrAzNScyMy4zIlc!5e0!3m2!1sfr!2sma!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
