"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige dark:bg-brand-black">
      <div className="text-center p-8">
        <p className="text-brand-coffee dark:text-brand-beige text-lg font-semibold mb-2">
          Something went wrong
        </p>
        <p className="text-brand-coffee/60 dark:text-brand-beige/55 text-sm mb-4">
          Please refresh the page or try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-brand-coffee text-brand-beige rounded-xl font-semibold hover:bg-brand-brown transition-colors"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback />;
    }
    return this.props.children;
  }
}
