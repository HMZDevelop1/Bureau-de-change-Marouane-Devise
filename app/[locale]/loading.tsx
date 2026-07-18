import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-beige dark:bg-brand-coffee">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <Image
            src="/logo/logo-official.png"
            alt="Marouane Devise"
            width={64}
            height={64}
            className="object-contain"
            priority
            style={{ animation: "logo-spin 1.2s ease-out forwards" }}
          />
        </div>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-brown/40 dark:bg-brand-beige/40 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 rounded-full bg-brand-brown/40 dark:bg-brand-beige/40 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 rounded-full bg-brand-brown/40 dark:bg-brand-beige/40 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
