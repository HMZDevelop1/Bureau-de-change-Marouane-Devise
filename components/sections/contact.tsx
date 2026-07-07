"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/contact";
import { OpeningHours } from "@/components/opening-hours";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Phone */}
            <Card className="hover:shadow-card-hover transition-all duration-300 border-brand-ocean/5 bg-white group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-brand-sm bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Phone className="h-6 w-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-ocean">
                      {t("call")}
                    </h3>
                    <p className="text-brand-ocean/50">
                      {contactInfo.phoneFormatted}
                    </p>
                  </div>
                  <a href={`tel:${contactInfo.phone}`}>
                    <Button size="sm" className="rounded-brand bg-brand-ocean hover:bg-brand-orange text-white font-semibold transition-all duration-300">
                      <Phone className="h-4 w-4 mr-2" />
                      {t("call")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover:shadow-card-hover transition-all duration-300 border-brand-ocean/5 bg-white group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-brand-sm bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageSquare className="h-6 w-6 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-ocean">
                      WhatsApp
                    </h3>
                    <p className="text-brand-ocean/50">
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
                      className="rounded-brand border-green-500/30 text-green-600 hover:bg-green-500 hover:text-white font-semibold transition-all duration-300"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address + Itinerary */}
            <Card className="hover:shadow-card-hover transition-all duration-300 border-brand-ocean/5 bg-white group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-brand-sm bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold transition-colors shrink-0">
                    <MapPin className="h-6 w-6 text-brand-gold group-hover:text-brand-ocean transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-brand-ocean mb-1">
                      {t("address")}
                    </h3>
                    <p className="text-brand-ocean/50 text-sm leading-relaxed">
                      {contactInfo.address}
                    </p>
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-brand-orange hover:text-brand-ocean transition-colors"
                    >
                      <Navigation className="h-4 w-4" />
                      Obtenir l&apos;itinéraire
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <OpeningHours />
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <Card className="border-brand-ocean/5 overflow-hidden shadow-brand">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8489!2d-7.5898!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjEiTiA3wrAzNScyMy4zIlc!5e0!3m2!1sfr!2sma!4v1234567890"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marouane Devise - Google Maps"
                />
              </div>
            </Card>

            {/* Map Button */}
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="w-full rounded-brand bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-orange transition-all duration-300"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Obtenir l&apos;itinéraire
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
