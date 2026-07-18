"use client";

import { useTranslations } from "next-intl";
import { MessageSquare } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const t = useTranslations("common");
  return (
    <a
      href={generateWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 left-6 sm:bottom-8 sm:left-8 md:bottom-8 md:left-auto md:right-8 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={t("whatsappLabel")}
    >
      <MessageSquare className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-brand-beige dark:border-brand-black animate-pulse" />
    </a>
  );
}
