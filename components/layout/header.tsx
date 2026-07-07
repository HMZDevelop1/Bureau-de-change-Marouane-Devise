"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const locales = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "عربي" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#rates", label: t("rates") },
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-ivory/95 backdrop-blur-xl shadow-brand border-b border-brand-ocean/5"
          : "bg-transparent backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-brand-sm bg-brand-ocean flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-brand-ocean">
                Marouane
              </span>
              <span className="font-display font-bold text-xl text-brand-orange ml-0.5">
                Devise
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-brand-ocean/75 hover:text-brand-orange transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-orange rounded-full transition-all duration-300 group-hover:w-6" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-brand-ocean hover:text-brand-orange hover:bg-brand-orange/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-0.5 bg-brand-ocean/5 rounded-full p-1">
              {locales.map((locale) => (
                <Link
                  key={locale.code}
                  href={`/${locale.code}`}
                  className={cn(
                    "px-3 py-1.5 text-xs font-semibold rounded-full transition-all",
                    "text-brand-ocean/60 hover:text-brand-orange hover:bg-white"
                  )}
                >
                  {locale.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="tel:+212721791914" className="hidden sm:block">
              <Button className="rounded-brand bg-brand-ocean hover:bg-brand-orange text-white font-semibold transition-all duration-300 shadow-brand hover:shadow-orange">
                <Phone className="h-4 w-4 mr-2" />
                {t("reserve")}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full text-brand-ocean hover:text-brand-orange"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-ivory/98 backdrop-blur-xl border-t border-brand-ocean/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-sm font-medium text-brand-ocean hover:text-brand-orange hover:bg-brand-orange/5 rounded-brand-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-3 px-4">
              {locales.map((locale) => (
                <Link
                  key={locale.code}
                  href={`/${locale.code}`}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-ocean/5 text-brand-ocean hover:bg-brand-orange hover:text-white transition-colors"
                >
                  {locale.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
