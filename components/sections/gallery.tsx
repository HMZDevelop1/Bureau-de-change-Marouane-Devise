"use client";

import { useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const t = useTranslations("gallery");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -scrollRef.current.offsetWidth * 0.7 : scrollRef.current.offsetWidth * 0.7, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="gallery" className="section-padding bg-brand-beige dark:bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-beige dark:from-brand-black via-brand-beige dark:via-brand-black to-brand-beige dark:to-brand-black pointer-events-none" />
      <div className="container-wide relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-brown/10 dark:bg-brand-beige/10 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-brown dark:text-brand-beige text-sm font-semibold mb-6">
            <Camera className="w-4 h-4" />
            {t("title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-4">{t("title")}</h2>
          <p className="text-lg text-brand-coffee/50 dark:text-brand-beige/40 max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>
        <div className="relative">
          <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
            {galleryImages.map((image, index) => (
              <motion.div key={image.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="flex-shrink-0 snap-center cursor-pointer group" onClick={() => setSelectedImage(index)}>
                <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden relative bg-brand-coffee/5 dark:bg-brand-beige/5">
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 256px, 320px" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-coffee/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-brand-beige font-medium text-sm">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {canScrollLeft && <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-brand-beige dark:bg-brand-coffee/80 shadow-card dark:shadow-glass flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown hover:bg-brand-brown/5 transition-all duration-300 z-10"><ChevronLeft className="w-5 h-5" /></button>}
          {canScrollRight && <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-brand-beige dark:bg-brand-coffee/80 shadow-card dark:shadow-glass flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown hover:bg-brand-brown/5 transition-all duration-300 z-10"><ChevronRight className="w-5 h-5" /></button>}
        </div>
      </div>
      {selectedImage !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-brand-coffee/95 dark:bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-beige/10 flex items-center justify-center text-brand-beige hover:bg-brand-beige/20 transition-all z-10"><X className="w-6 h-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-beige/10 flex items-center justify-center text-brand-beige hover:bg-brand-beige/20 transition-all z-10"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-beige/10 flex items-center justify-center text-brand-beige hover:bg-brand-beige/20 transition-all z-10"><ChevronRight className="w-6 h-6" /></button>
          <motion.div key={selectedImage} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} width={800} height={600} className="w-full h-full object-contain rounded-2xl" style={{ maxHeight: "70vh" }} priority />
            <p className="text-brand-beige text-center mt-4 font-medium">{galleryImages[selectedImage].alt}</p>
            <p className="text-brand-beige/40 text-center text-sm mt-1">{selectedImage + 1} / {galleryImages.length}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
