import { currencies } from "@/data/currencies";

export function getFallbackRates() {
  return {
    rates: currencies,
    lastUpdated: new Date().toISOString(),
    source: "fallback" as const,
  };
}

export function isRatesStale(lastUpdated: string, maxAgeMs: number = 24 * 60 * 60 * 1000): boolean {
  return new Date().getTime() - new Date(lastUpdated).getTime() > maxAgeMs;
}
