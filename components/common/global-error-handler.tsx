"use client";

import { useEffect } from "react";

export function GlobalErrorHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleError = (event: ErrorEvent) => {
      if (process.env.NODE_ENV === "development") {
        console.error("[GlobalError]", event.message, event.filename, event.lineno);
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (process.env.NODE_ENV === "development") {
        console.error("[UnhandledRejection]", event.reason);
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
