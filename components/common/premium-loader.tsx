"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "md_loader_seen";
const DURATION_MS = 1400;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function lockScroll() {
  if (typeof document === "undefined") return;
  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  if (typeof document === "undefined") return;
  const scrollY = parseInt(document.body.style.top || "0", 10) * -1;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  window.scrollTo(0, scrollY || 0);
}

export function PremiumLoader() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduced = usePrefersReducedMotion();

  const hide = useCallback(() => {
    setShow(false);
    unlockScroll();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    try {
      const seen = sessionStorage.getItem(SESSION_KEY);
      if (!seen) {
        lockScroll();
        setShow(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // sessionStorage not available
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(hide, DURATION_MS);
    return () => clearTimeout(timer);
  }, [show, hide]);

  if (!mounted || !show) return null;

  const fadeDuration = reduced ? 0.15 : 0.4;
  const logoDelay = reduced ? 0 : 0.1;
  const logoDuration = reduced ? 0.3 : 0.7;
  const sweepDelay = reduced ? 0 : 0.35;
  const sweepDuration = reduced ? 0.2 : 0.9;
  const barDelay = reduced ? 0 : 0.3;
  const barDuration = reduced ? 0.2 : 0.8;

  return (
    <AnimatePresence onExitComplete={unlockScroll}>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration, ease: "easeInOut" }}
          onAnimationComplete={() => unlockScroll()}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000000" }}
          aria-hidden="true"
        >
          {/* Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 pointer-events-none"
            style={{
              width: "min(80vw, 420px)",
              height: "min(80vw, 420px)",
              background: "radial-gradient(circle, #412D15 0%, transparent 70%)",
              filter: "blur(60px)",
              willChange: "transform",
            }}
          />

          {/* Logo with 3D transform */}
          <div className="relative" style={{ perspective: "600px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.75, rotateY: -18, rotateX: 6 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              transition={{
                duration: logoDuration,
                delay: logoDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <Image
                  src="/logo/logo-official.png"
                  alt="Marouane Devise"
                  width={128}
                  height={128}
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(0 0 32px rgba(65, 45, 21, 0.35))",
                    color: "transparent",
                  }}
                  priority
                  sizes="128px"
                />

                {/* Light sweep */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "220%", opacity: [0, 0.55, 0] }}
                  transition={{
                    duration: sweepDuration,
                    delay: sweepDelay,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
                  style={{ willChange: "transform" }}
                >
                  <div
                    className="w-[35%] h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(225,220,201,0.18), transparent)",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: barDelay, duration: 0.4 }}
            className="absolute bottom-[30%] sm:bottom-[28%] left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-28"
          >
            <div
              className="h-[2px] w-full rounded-full overflow-hidden"
              style={{ backgroundColor: "rgba(225,220,201,0.08)" }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: barDuration,
                  delay: barDelay,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #412D15, #E1DCC9, #412D15, transparent)",
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0.1 : 0.5, duration: 0.4 }}
            className="absolute bottom-[22%] sm:bottom-[20%] text-[10px] sm:text-xs tracking-[0.3em] uppercase select-none"
            style={{
              color: "rgba(225,220,201,0.3)",
              fontFamily: "var(--font-manrope)",
            }}
          >
            Marouane Devise
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
