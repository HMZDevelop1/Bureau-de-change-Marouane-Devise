"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { businessInfo } from "@/data/business";
import { generateCallUrl } from "@/lib/whatsapp";

const locales = [
  { code: "fr", label: "FR", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "en", label: "EN", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "ar", label: "\u0639\u0631\u0628\u064A", flag: "\u{1F1F8}\u{1F1E6}" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-beige/80 dark:bg-brand-coffee/80 backdrop-blur-2xl border-b border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="hidden md:block bg-brand-coffee text-brand-beige text-xs py-1.5">
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-brand-beige/70">{businessInfo.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={generateCallUrl()} className="hover:text-brand-beige transition-colors font-medium">
              {businessInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      <nav className="container-wide flex items-center justify-between h-16 md:h-[72px]">
        <Link href={`/${locale}`} className="flex items-center gap-3 group" aria-label="Marouane Devise - Accueil">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden shadow-brand group-hover:shadow-brand-hover transition-shadow duration-300 flex-shrink-0">
            <Image
              src="/logo/logo-official.png"
              alt="Marouane Devise Logo"
              fill
              className="object-contain"
              sizes="44px"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm md:text-base font-bold text-brand-coffee dark:text-brand-beige leading-tight font-display">
              Marouane
            </span>
            <span className="block text-xs md:text-sm font-semibold text-brand-brown leading-tight">
              Devise
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-brand-coffee/70 dark:text-brand-beige/60 hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300"
            >
              {link.label[locale as keyof typeof link.label]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-brand-coffee/70 dark:text-brand-beige/60 hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300">
              <span className="text-base">{currentLocale.flag}</span>
              <span className="hidden sm:inline">{currentLocale.label}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-36 py-1 bg-brand-beige dark:bg-brand-coffee rounded-xl shadow-brand-lg dark:shadow-glass-lg border border-brand-brown/10 dark:border-brand-beige/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className={cn(
                    "w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors",
                    locale === loc.code
                      ? "text-brand-brown bg-brand-brown/5 font-semibold"
                      : "text-brand-coffee dark:text-brand-beige/70 hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04]"
                  )}
                >
                  <span>{loc.flag}</span>
                  <span>{loc.label}</span>
                </button>
              ))}
            </div>
          </div>

          <ThemeToggle />

          <a
            href={generateCallUrl()}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-coffee text-brand-beige text-sm font-semibold rounded-xl shadow-coffee hover:shadow-coffee-lg hover:bg-brand-brown active:scale-[0.98] transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            {t("call")}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-coffee dark:text-brand-beige hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-brand-beige/95 dark:bg-brand-coffee/95 backdrop-blur-2xl border-t border-brand-brown/10 dark:border-brand-beige/[0.06] overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-brand-coffee dark:text-brand-beige hover:text-brand-brown dark:hover:text-brand-beige hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] rounded-xl transition-all duration-300"
                  >
                    {link.label[locale as keyof typeof link.label]}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-brand-brown/10 dark:border-brand-beige/[0.06]">
                <a
                  href={generateCallUrl()}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-coffee text-brand-beige font-semibold rounded-xl shadow-coffee hover:shadow-coffee-lg active:scale-[0.98] transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  {t("call")}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 pt-3">
                {locales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => { switchLocale(loc.code); setIsOpen(false); }}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                      locale === loc.code
                        ? "bg-brand-coffee text-brand-beige"
                        : "bg-brand-brown/5 dark:bg-brand-beige/[0.04] text-brand-coffee dark:text-brand-beige/70"
                    )}
                  >
                    {loc.flag} {loc.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setThemeState(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) {
    return <button className="p-2 rounded-lg w-10 h-10" aria-label="Toggle theme" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-brand-coffee/60 dark:text-brand-beige/60 hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Sun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
