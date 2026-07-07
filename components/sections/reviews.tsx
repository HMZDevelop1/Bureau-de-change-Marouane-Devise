"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Button } from "@/components/ui/button";

export function ReviewsSection() {
  const t = useTranslations("reviews");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-gray-50 dark:bg-navy-800/50 rounded-2xl p-8 md:p-12"
              >
                <Quote className="h-10 w-10 text-gold-500/30 mb-6" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= reviews[current].rating
                          ? "fill-gold-500 text-gold-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl text-navy-900 dark:text-white mb-6 leading-relaxed">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">
                      {reviews[current].author}
                    </p>
                    <p className="text-sm text-navy-500 dark:text-gray-400">
                      {reviews[current].date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-navy-600 dark:text-gray-300">
                      Google Reviews
                    </span>
                    <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "w-6 bg-gold-500"
                      : "bg-navy-300 dark:bg-navy-700"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
