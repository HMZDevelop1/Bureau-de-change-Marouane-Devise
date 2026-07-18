let lockCount = 0;
let savedScrollY = 0;

export function lockScroll(): void {
  if (typeof window === "undefined") return;
  try {
    if (lockCount === 0) {
      savedScrollY = window.scrollY;
      document.body.style.overflow = "hidden";
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
      window.scrollTo(0, savedScrollY);
    }
  } catch {
    // Silently fail
  }
}
