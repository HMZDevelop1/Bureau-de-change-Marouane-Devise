"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(
  () => import("@/components/common/whatsapp-button").then((m) => ({ default: m.WhatsAppButton })),
  { ssr: false }
);
const BackToTop = dynamic(
  () => import("@/components/common/back-to-top").then((m) => ({ default: m.BackToTop })),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () => import("@/components/common/scroll-progress").then((m) => ({ default: m.ScrollProgress })),
  { ssr: false }
);

export function ClientShell() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
