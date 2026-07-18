"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "md_loader_seen";

export function PremiumLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setShow(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }
  }, []);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at center, #1F150C 0%, #000000 70%)",
          }}
        >
          <link rel="preload" href="/logo/logo-official.png" as="image" />

          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
              style={{ background: "radial-gradient(circle, #412D15 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative" style={{ perspective: "800px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotateY: -25, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <Image
                  src="/logo/logo-official.png"
                  alt="Marouane Devise"
                  width={128}
                  height={128}
                  className="object-contain drop-shadow-[0_0_40px_rgba(65,45,21,0.4)]"
                  priority
                />
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "200%", opacity: [0, 0.6, 0] }}
                  transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
                >
                  <div
                    className="w-1/3 h-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(225,220,201,0.15), transparent)",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-20 sm:w-28"
          >
            <div className="h-[2px] w-full rounded-full overflow-hidden" style={{ backgroundColor: "rgba(225,220,201,0.1)" }}>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #412D15, #E1DCC9, #412D15, transparent)" }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-[30%] sm:bottom-[28%] text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(225,220,201,0.35)", fontFamily: "var(--font-manrope)" }}
          >
            Marouane Devise
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
