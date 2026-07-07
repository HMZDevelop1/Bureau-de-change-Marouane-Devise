import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Marouane Devise | Bureau de Change à Casablanca",
  description:
    "Bureau de change à Casablanca offrant des taux compétitifs, un service rapide, sans commission et sans frais cachés.",
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
      "Bureau de change à Casablanca offrant des taux compétitifs, un service rapide, sans commission et sans frais cachés.",
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
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
