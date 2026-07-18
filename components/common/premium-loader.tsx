"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "md_loader_seen";

function getIsMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

function useSafeReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(mq.matches);
      const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } catch {
      // matchMedia not available
    }
  }, []);
  return reduced;
}

export function PremiumLoader() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const reduced = useSafeReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollLockedRef = useRef(false);

  const doLockScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      savedScrollYRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      scrollLockedRef.current = true;
    } catch {
      // Silently fail
    }
  }, []);

  const doUnlockScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      document.body.style.overflow = "";
      const y = savedScrollYRef.current;
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
      scrollLockedRef.current = false;
    } catch {
      // Silently fail
    }
  }, []);

  const savedScrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    setIsMobile(getIsMobile());
    try {
      const alreadySeen = sessionStorage.getItem(SESSION_KEY);
      if (!alreadySeen) {
        doLockScroll();
        setShow(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // sessionStorage unavailable
    }
  }, [doLockScroll]);

  useEffect(() => {
    if (!show) return;
    const duration = isMobile ? 900 : 1300;
    timerRef.current = setTimeout(() => setShow(false), duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [show, isMobile]);

  useEffect(() => {
    return () => {
      if (scrollLockedRef.current) {
        doUnlockScroll();
      }
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [doUnlockScroll]);

  if (!mounted || !show) return null;

  if (reduced) {
    return (
      <AnimatePresence
        onExitComplete={() => {
          if (scrollLockedRef.current) doUnlockScroll();
        }}
      >
        {show && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ backgroundColor: "#000000" }}
            aria-hidden="true"
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
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  if (isMobile) {
    return (
      <AnimatePresence
        onExitComplete={() => {
          if (scrollLockedRef.current) doUnlockScroll();
        }}
      >
        {show && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ backgroundColor: "#000000" }}
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-20 h-20">
                <Image
                  src="/logo/logo-official.png"
                  alt="Marouane Devise"
                  width={128}
                  height={128}
                  className="object-contain"
                  priority
                  sizes="80px"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(65, 45, 21, 0.3))",
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute bottom-[25%] text-[10px] tracking-[0.3em] uppercase select-none"
              style={{
                color: "rgba(225,220,201,0.3)",
                fontFamily: "var(--font-manrope)",
              }}
            >
              Marouane Devise
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  const logoDelay = 0.08;
  const logoDur = 0.65;
  const sweepDelay = 0.3;
  const sweepDur = 0.85;
  const barDelay = 0.25;
  const barDur = 0.75;
  const textDelay = 0.45;

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (scrollLockedRef.current) doUnlockScroll();
      }}
    >
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
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
              <div className="relative w-28 h-28 md:w-32 md:h-32">
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
            className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-24 md:w-28"
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
            className="absolute bottom-[20%] text-xs tracking-[0.3em] uppercase select-none"
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
