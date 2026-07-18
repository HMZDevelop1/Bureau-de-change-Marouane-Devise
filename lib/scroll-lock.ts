let lockCount = 0;
let savedScrollY = 0;

export function lockScroll(): void {
  if (typeof window === "undefined") return;
  try {
    if (lockCount === 0) {
      savedScrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.width = "100%";
    }
    lockCount++;
  } catch {
    // Silently fail
  }
}

export function unlockScroll(): void {
  if (typeof window === "undefined") return;
  try {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, savedScrollY);
    }
  } catch {
    // Silently fail
  }
}
