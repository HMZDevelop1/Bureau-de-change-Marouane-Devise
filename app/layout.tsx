import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marouane Devise | Bureau de Change à Casablanca",
  description:
    "Bureau de change à Casablanca offrant des taux compétitifs, un service rapide, sans commission et sans frais cachés. Dotation touristique, pèlerinage, scolarité, missions et stages à l'étranger.",
  keywords: [
    "bureau de change Casablanca",
    "change devise Casablanca",
    "dotation touristique Maroc",
    "dotation pèlerinage",
    "change euro dirham",
    "change dollar dirham",
  ],
  openGraph: {
    title: "Marouane Devise | Bureau de Change à Casablanca",
    description:
      "Bureau de change à Casablanca avec taux compétitifs, service rapide, sans commission et sans frais cachés.",
    type: "website",
    locale: "fr_FR",
    siteName: "Marouane Devise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
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
