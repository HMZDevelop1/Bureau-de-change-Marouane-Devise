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

export function ClientShell() {
  return (
    <>
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
