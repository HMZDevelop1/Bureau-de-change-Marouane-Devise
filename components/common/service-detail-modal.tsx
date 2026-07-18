"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Phone, Clock, FileText, ListChecks, ArrowLeftRight, Plane, Compass, GraduationCap, Briefcase, Building2 } from "lucide-react";
import type { Service } from "@/types";
import { generateWhatsAppUrl, generateCallUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ElementType> = {
  ArrowLeftRight, Plane, Compass, GraduationCap, Briefcase, Building2,
};

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const t = useTranslations("services");
  const locale = useLocale();
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (service === null) return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    setTimeout(() => closeButtonRef.current?.focus(), 100);
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, handleKeyDown]);

  if (!service) return null;

  const localeKey = locale as keyof typeof service.title;
  const Icon = iconMap[service.icon] || ArrowLeftRight;
  const details = service.details;

  const whatsappMessage = locale === "ar"
    ? `مرحباً ماروان ديفيز، أنا مهتم بخدمة "${service.title[localeKey]}". هل يمكنكم إعطائي مزيد من المعلومات؟`
    : locale === "en"
      ? `Hello Marouane Devise, I am interested in the "${service.title[localeKey]}" service. Could you provide more information?`
      : `Bonjour Marouane Devise, je suis intéressé par le service "${service.title[localeKey]}". Pourriez-vous me donner plus d'informations ?`;
  const whatsappUrl = generateWhatsAppUrl(whatsappMessage, locale);
  const callUrl = generateCallUrl();

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-brand-coffee/60 dark:bg-brand-black/70 backdrop-blur-md flex items-start justify-center overflow-y-auto p-4 pt-20 sm:pt-24 pb-8"
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
          role="dialog"
          aria-modal="true"
          aria-label={service.title[localeKey]}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-brand-beige dark:bg-brand-coffee rounded-2xl border border-brand-brown/10 dark:border-brand-beige/[0.08] shadow-brand-lg dark:shadow-glass-lg overflow-hidden"
          >
            <div className="sticky top-0 z-10 bg-brand-beige/90 dark:bg-brand-coffee/90 backdrop-blur-xl border-b border-brand-brown/[0.06] dark:border-brand-beige/[0.06] px-5 sm:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center flex-shrink-0 text-brand-brown dark:text-brand-beige">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-display font-bold text-brand-coffee dark:text-brand-beige truncate">
                  {service.title[localeKey]}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brand-brown/5 dark:bg-brand-beige/[0.06] hover:bg-brand-brown/10 dark:hover:bg-brand-beige/[0.12] flex items-center justify-center text-brand-coffee/60 dark:text-brand-beige/60 hover:text-brand-coffee dark:hover:text-brand-beige transition-all duration-200 flex-shrink-0"
                aria-label={t("modalClose")}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 sm:px-8 py-6 space-y-6">
              <p className="text-brand-coffee/70 dark:text-brand-beige/60 text-sm sm:text-base leading-relaxed">
                {details.fullDescription[localeKey]}
              </p>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-brown/5 dark:bg-brand-beige/[0.04] border border-brand-brown/[0.06] dark:border-brand-beige/[0.06]">
                <Clock className="w-4 h-4 text-brand-brown dark:text-brand-beige flex-shrink-0" />
                <span className="text-sm font-medium text-brand-coffee dark:text-brand-beige">{t("modalEstimatedTime")}:</span>
                <span className="text-sm text-brand-coffee/60 dark:text-brand-beige/65">{details.estimatedTime[localeKey]}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-brand-brown dark:text-brand-beige" />
                  <h3 className="text-sm font-semibold text-brand-coffee dark:text-brand-beige uppercase tracking-wider">{t("modalDocuments")}</h3>
                </div>
                <ul className="space-y-2">
                  {details.documents[localeKey].map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-brand-coffee/60 dark:text-brand-beige/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-brown/40 dark:bg-brand-beige/40 mt-1.5 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks className="w-4 h-4 text-brand-brown dark:text-brand-beige" />
                  <h3 className="text-sm font-semibold text-brand-coffee dark:text-brand-beige uppercase tracking-wider">{t("modalProcess")}</h3>
                </div>
                <ol className="space-y-2.5">
                  {details.process[localeKey].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-coffee/60 dark:text-brand-beige/65">
                      <span className="w-5 h-5 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold text-brand-brown dark:text-brand-beige">{i + 1}</span>
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="sticky bottom-0 bg-brand-beige/90 dark:bg-brand-coffee/90 backdrop-blur-xl border-t border-brand-brown/[0.06] dark:border-brand-beige/[0.06] px-5 sm:px-8 py-4 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                {t("modalWhatsapp")}
              </a>
              <a
                href={callUrl}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-brand-brown/20 dark:border-brand-beige/20 text-brand-coffee dark:text-brand-beige hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.06] active:scale-[0.98] transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                {t("modalCall")}
              </a>
              <button
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-brand-coffee/70 dark:text-brand-beige/55 hover:text-brand-coffee dark:hover:text-brand-beige hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.06] transition-all duration-300 text-sm"
              >
                {t("modalClose")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
