"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E1DCC9",
            padding: "1rem",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#1F150C",
                marginBottom: "0.5rem",
              }}
            >
              Something went wrong
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#1F150C99",
                marginBottom: "1.5rem",
              }}
            >
              Please refresh the page or try again later.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              <button
                onClick={reset}
                style={{
                  padding: "0.5rem 1.5rem",
                  border: "1px solid #412D1533",
                  borderRadius: "0.75rem",
                  backgroundColor: "transparent",
                  color: "#1F150C",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: "0.5rem 1.5rem",
                  border: "none",
                  borderRadius: "0.75rem",
                  backgroundColor: "#1F150C",
                  color: "#E1DCC9",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.875rem",
                }}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
