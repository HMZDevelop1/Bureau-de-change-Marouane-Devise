import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n-routing";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo-schema";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { BackToTop } from "@/components/common/back-to-top";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { PremiumLoader } from "@/components/common/premium-loader";
import { ErrorBoundary } from "@/components/common/error-boundary";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const baseUrl = "https://marouanedevise.vercel.app";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
      languages: { fr: `${baseUrl}/fr`, en: `${baseUrl}/en`, ar: `${baseUrl}/ar` },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "ar" ? "ar_MA" : locale === "en" ? "en_US" : "fr_FR",
      siteName: "Marouane Devise",
      url: `${baseUrl}/${locale}`,
      images: [{ url: `${baseUrl}/images/og-social.png`, width: 1536, height: 1024, alt: "Marouane Devise" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${baseUrl}/images/og-social.png`],
    },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/logo/logo-official.png" },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  if (!routing.locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning style={{ overflowX: "hidden" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/logo-official.png" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#E1DCC9" media="(prefers-color-scheme: light)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t||t==='system'){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.backgroundColor='#000000';document.body.style.backgroundColor='#000000'}else{document.documentElement.classList.remove('dark');document.documentElement.style.backgroundColor='#E1DCC9';document.body.style.backgroundColor='#E1DCC9'}}catch(e){document.documentElement.style.backgroundColor='#000000';document.body.style.backgroundColor='#000000'}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: "var(--bg-primary)" }}>
        <ThemeProvider>
          <ErrorBoundary>
            <PremiumLoader />
            <NextIntlClientProvider messages={messages}>
              <ScrollProgress />
              <LocalBusinessSchema />
              <FAQSchema />
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <WhatsAppButton />
              <BackToTop />
            </NextIntlClientProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
