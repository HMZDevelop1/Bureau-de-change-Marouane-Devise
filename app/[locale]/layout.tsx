import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n-routing";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo-schema";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const baseUrl = "https://marouane-devise.vercel.app";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "ar" ? "ar_MA" : locale === "en" ? "en_US" : "fr_FR",
      siteName: "Marouane Devise",
      url: `${baseUrl}/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  const isValidLocale = routing.locales.includes(locale as any);

  if (!isValidLocale) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <FAQSchema />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
