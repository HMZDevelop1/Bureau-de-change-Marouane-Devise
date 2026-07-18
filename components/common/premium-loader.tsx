"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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

export function PremiumLoader() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduced = usePrefersReducedMotion();
  const scrollYRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lockScroll = useCallback(() => {
    scrollYRef.current = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollYRef.current);
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        lockScroll();
        setShow(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // sessionStorage unavailable
    }
  }, [lockScroll]);

  useEffect(() => {
    if (!show) return;
    timerRef.current = setTimeout(() => setShow(false), DURATION_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [show]);

  if (!mounted || !show) return null;

  const dur = reduced ? 0.15 : 0.4;
  const logoDelay = reduced ? 0 : 0.08;
  const logoDur = reduced ? 0.25 : 0.65;
  const sweepDelay = reduced ? 0 : 0.3;
  const sweepDur = reduced ? 0.15 : 0.85;
  const barDelay = reduced ? 0 : 0.25;
  const barDur = reduced ? 0.15 : 0.75;
  const textDelay = reduced ? 0.05 : 0.45;

  return (
    <AnimatePresence onExitComplete={unlockScroll}>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: dur, ease: "easeInOut" }}
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
            }}
          />

          {/* Logo with 3D transform */}
          <div className="relative" style={{ perspective: "600px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              transition={{
                duration: logoDur,
                delay: logoDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <Image
                  src="/logo/logo-official.png"
                  alt="Marouane Devise"
                  width={128}
                  height={128}
                  className="object-contain"
                  priority
                  sizes="128px"
                  style={{
                    filter: "drop-shadow(0 0 32px rgba(65, 45, 21, 0.35))",
                  }}
                />

                {/* Light sweep */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "220%", opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: sweepDur,
                    delay: sweepDelay,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 overflow-hidden rounded-full pointer-events-none"
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

          {/* Loading line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: barDelay, duration: 0.35 }}
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
                  duration: barDur,
                  delay: barDelay,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #412D15, #E1DCC9, #412D15, transparent)",
                }}
              />
            </div>
          </motion.div>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: textDelay, duration: 0.35 }}
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
