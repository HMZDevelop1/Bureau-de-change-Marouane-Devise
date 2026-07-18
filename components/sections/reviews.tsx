"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { GOOGLE_MAPS_URL } from "@/data/business";

export function ReviewsSection() {
  const t = useTranslations("reviews");
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) { el.addEventListener("scroll", checkScroll, { passive: true }); return () => el.removeEventListener("scroll", checkScroll); }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -340 : 340, behavior: "smooth" });
  };

  const starClass = (filled: boolean) =>
    filled ? "fill-brand-brown text-brand-brown dark:fill-brand-beige dark:text-brand-beige" : "fill-brand-coffee/10 dark:fill-brand-beige/10 text-brand-coffee/10 dark:text-brand-beige/10";

  return (
    <section id="reviews" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-brand-brown dark:fill-brand-beige" />
            {t("title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-base sm:text-lg text-brand-coffee/70 dark:text-brand-beige/55 max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="relative">
          {canScrollLeft && (
            <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-brand-beige dark:bg-brand-coffee/80 shadow-card dark:shadow-glass flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown transition-all" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-brand-beige dark:bg-brand-coffee/80 shadow-card dark:shadow-glass flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown transition-all" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <div ref={scrollRef} onScroll={checkScroll} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {reviews.map((review, i) => (
              <motion.div key={review.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 snap-center w-[270px] sm:w-[320px] bg-brand-beige dark:bg-brand-coffee/40 rounded-2xl border border-brand-brown/[0.06] dark:border-brand-beige/[0.06] p-5 sm:p-6 shadow-card dark:shadow-glass hover:shadow-brand dark:hover:shadow-glass-lg hover:border-brand-brown/20 dark:hover:border-brand-beige/[0.12] transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 flex items-center justify-center text-brand-brown dark:text-brand-beige font-bold text-sm">{review.author.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-brand-coffee dark:text-brand-beige text-sm">{review.author}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${starClass(j < review.rating)}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-brand-coffee/60 dark:text-brand-beige/65 text-sm leading-relaxed mb-4">{review.text[locale as keyof typeof review.text]}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-coffee/50 dark:text-brand-beige/55">{review.date}</span>
                  <span className="text-xs text-brand-coffee/50 dark:text-brand-beige/55">Google</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-8 md:mt-10">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-brand-brown/15 dark:border-brand-beige/10 text-brand-coffee dark:text-brand-beige font-semibold rounded-xl hover:border-brand-brown/30 dark:hover:border-brand-beige/20 hover:text-brand-brown hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300 text-sm sm:text-base">
            {t("seeAll")}<ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
