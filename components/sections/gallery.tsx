"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const t = useTranslations("gallery");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [checkScroll]);

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1));
      if (e.key === "ArrowRight") setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1));
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && selectedImage !== null) {
        setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
      } else if (diff < 0 && selectedImage !== null) {
        setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
      }
    }
  };

  return (
    <section id="gallery" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
            <Camera className="w-4 h-4" />
            {t("title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-base sm:text-lg text-brand-coffee/70 dark:text-brand-beige/55 max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="relative">
          <div ref={scrollRef} onScroll={checkScroll} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 snap-center cursor-pointer group"
                onClick={() => setSelectedImage(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedImage(index); } }}
                aria-label={image.alt}
              >
                <div className="w-[280px] h-[370px] sm:w-[340px] sm:h-[450px] md:w-[400px] md:h-[530px] rounded-2xl overflow-hidden relative bg-brand-coffee/5 dark:bg-brand-beige/5 shadow-card dark:shadow-glass">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 400px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-coffee/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-brand-beige font-medium text-sm">{image.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-beige/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-brand-beige" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {canScrollLeft && (
            <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-11 h-11 rounded-full bg-brand-beige dark:bg-brand-coffee/80 shadow-card dark:shadow-glass flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown hover:bg-brand-brown/5 transition-all duration-300 z-10" aria-label="Image précédente">
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-11 h-11 rounded-full bg-brand-beige dark:bg-brand-coffee/80 shadow-card dark:shadow-glass flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown hover:bg-brand-brown/5 transition-all duration-300 z-10" aria-label="Image suivante">
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {galleryImages.map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-brand-brown/20 dark:bg-brand-beige/20" />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-coffee/95 dark:bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[selectedImage].alt}
          >
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-brand-beige/10 hover:bg-brand-beige/20 flex items-center justify-center text-brand-beige transition-all z-10" aria-label="Fermer">
              <X className="w-6 h-6" />
            </button>

            <button onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1); }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-beige/10 hover:bg-brand-beige/20 flex items-center justify-center text-brand-beige transition-all z-10" aria-label="Image précédente">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1); }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-beige/10 hover:bg-brand-beige/20 flex items-center justify-center text-brand-beige transition-all z-10" aria-label="Image suivante">
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full" style={{ aspectRatio: `${galleryImages[selectedImage].width} / ${galleryImages[selectedImage].height}`, maxHeight: "75vh" }}>
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
              <p className="text-brand-beige text-center mt-4 font-medium text-sm sm:text-base">{galleryImages[selectedImage].alt}</p>
              <p className="text-brand-beige/60 text-center text-xs sm:text-sm mt-1">{selectedImage + 1} / {galleryImages.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
