"use client";

import { useState } from "react";
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
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "#rates", label: t("rates") },
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 flex items-center justify-center">
              <span className="text-white dark:text-navy-900 font-display font-bold text-lg">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-navy-900 dark:text-white">
                Marouane
              </span>
              <span className="font-display font-bold text-xl text-gold-500">
                Devise
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-navy-800 rounded-full p-1">
              {locales.map((locale) => (
                <Link
                  key={locale.code}
                  href={`/${locale.code}`}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
                    "text-navy-700 dark:text-gray-300 hover:bg-white dark:hover:bg-navy-700"
                  )}
                >
                  {locale.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link href="tel:+212721791914" className="hidden sm:block">
              <Button className="rounded-full bg-gradient-to-r from-navy-800 to-navy-900 dark:from-gold-500 dark:to-gold-600 text-white dark:text-navy-900 font-semibold">
                <Phone className="h-4 w-4 mr-2" />
                {t("reserve")}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-strong border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-navy-700 dark:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {locales.map((locale) => (
                <Link
                  key={locale.code}
                  href={`/${locale.code}`}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-navy-800"
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
