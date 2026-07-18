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
  metadataBase: new URL("https://marouanedevise.vercel.app"),
  title: "Marouane Devise | Bureau de Change a Casablanca",
  description: "Bureau de change a Casablanca offrant des taux competitifs, un service rapide, sans commission et sans frais caches.",
  keywords: ["bureau de change Casablanca", "change devise Casablanca", "dotation touristique Maroc"],
  openGraph: {
    title: "Marouane Devise | Bureau de Change a Casablanca",
    description: "Bureau de change a Casablanca avec taux competitifs, service rapide, sans commission et sans frais caches.",
    type: "website",
    locale: "fr_FR",
    siteName: "Marouane Devise",
    images: [{ url: "/images/og-social.png", width: 1536, height: 1024, alt: "Marouane Devise" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${cormorant.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
