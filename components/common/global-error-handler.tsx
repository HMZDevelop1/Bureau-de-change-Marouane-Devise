"use client";

import { useEffect } from "react";

export function GlobalErrorHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleError = (event: ErrorEvent) => {
      event.preventDefault();
      if (process.env.NODE_ENV === "development") {
        console.error("[GlobalErrorHandler] Uncaught error:", event.error);
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();
      if (process.env.NODE_ENV === "development") {
        console.error("[GlobalErrorHandler] Unhandled rejection:", event.reason);
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
