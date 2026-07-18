"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/i18n-navigation";
import { useTheme } from "next-themes";
import { Menu, X, Phone, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { generateCallUrl } from "@/lib/whatsapp";

const locales = [
  { code: "fr", label: "FR", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "en", label: "EN", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "ar", label: "\u0639\u0631\u0628\u064A", flag: "\u{1F1F8}\u{1F1E6}" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      try {
        setScrolled(window.scrollY > 20);
      } catch {
        // ignore
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen, mounted]);

  const switchLocale = useCallback(
    (newLocale: string) => {
      try {
        if (!pathname) {
          router.push(`/${newLocale}`);
          return;
        }
        router.replace(pathname, { locale: newLocale });
      } catch {
        if (typeof window !== "undefined") {
          window.location.href = `/${newLocale}`;
        }
      }
    },
    [pathname, router]
  );

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px]">
        <nav className="container-wide flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-brand-brown/10 animate-pulse" />
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-beige/80 dark:bg-brand-coffee/80 backdrop-blur-2xl border-b border-brand-brown/[0.06] dark:border-brand-beige/[0.06] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-[72px]">
        <Link href={`/${locale}`} className="flex items-center gap-3 group" aria-label="Logo Marouane Devise Bureau de Change">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden shadow-brand group-hover:shadow-brand-hover transition-shadow duration-300 flex-shrink-0">
            <Image
              src="/logo/logo-official.png"
              alt="Logo Marouane Devise Bureau de Change"
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

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-2.5 min-h-[44px] text-sm font-medium text-brand-coffee/70 dark:text-brand-beige/60 hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300">
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
            className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-brand-coffee dark:text-brand-beige hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.04] transition-all duration-300"
            aria-label={tc("toggleMenu")}
            aria-expanded={isOpen}
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
              <div className="flex items-center gap-3 px-4 pb-3 mb-2 border-b border-brand-brown/10 dark:border-brand-beige/[0.06]">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo/logo-official.png"
                    alt="Logo Marouane Devise Bureau de Change"
                    fill
                    className="object-contain"
                    sizes="36px"
                  />
                </div>
                <div>
                  <span className="block text-sm font-bold text-brand-coffee dark:text-brand-beige leading-tight font-display">Marouane</span>
                  <span className="block text-xs font-semibold text-brand-brown leading-tight">Devise</span>
                </div>
              </div>

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("common");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="p-2.5 min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center" aria-label={t("toggleTheme")} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-brand-coffee/70 dark:text-brand-beige/70 hover:text-brand-brown dark:hover:text-brand-beige rounded-lg hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.06] transition-all duration-300"
      aria-label={`${t("toggleTheme")} (${isDark ? t("themeLight") : t("themeDark")})`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
