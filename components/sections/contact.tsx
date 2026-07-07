"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, ExternalLink } from "lucide-react";
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

            {/* Address */}
            <Card className="hover:shadow-card-hover transition-all duration-300 border-brand-ocean/5 bg-white group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-brand-sm bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                    <MapPin className="h-6 w-6 text-brand-gold group-hover:text-brand-ocean transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-ocean">
                      {t("address")}
                    </h3>
                    <p className="text-brand-ocean/50">
                      {contactInfo.address}
                    </p>
                  </div>
                  <a
                    href={contactInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="rounded-brand border-brand-ocean/20 text-brand-ocean hover:bg-brand-ocean hover:text-white font-semibold transition-all duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t("direction")}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours - Dynamic Component */}
            <OpeningHours />
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-brand-ocean/5 overflow-hidden shadow-brand">
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
