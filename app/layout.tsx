import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marouane Devise | Bureau de Change a Casablanca",
  description: "Bureau de change a Casablanca offrant des taux competitifs, un service rapide, sans commission et sans frais caches. Dotation touristique, pelerinage, scolarite, missions et stages a l'etranger.",
  keywords: ["bureau de change Casablanca", "change devise Casablanca", "dotation touristique Maroc", "dotation pelerinage", "change euro dirham", "change dollar dirham"],
  openGraph: {
    title: "Marouane Devise | Bureau de Change a Casablanca",
    description: "Bureau de change a Casablanca avec taux competitifs, service rapide, sans commission et sans frais caches.",
    type: "website",
    locale: "fr_FR",
    siteName: "Marouane Devise",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Marouane Devise" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#E1DCC9" media="(prefers-color-scheme: light)" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
