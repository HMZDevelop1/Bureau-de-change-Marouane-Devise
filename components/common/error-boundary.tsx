"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (typeof window !== "undefined") {
      console.error("[ErrorBoundary] Caught:", error.message, error.stack);
      console.error("[ErrorBoundary] Component stack:", errorInfo.componentStack);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-brand-beige dark:bg-brand-black px-4">
            <div className="text-center p-8 max-w-md">
              <p className="text-brand-coffee dark:text-brand-beige text-lg font-semibold mb-2">
                Something went wrong
              </p>
              <p className="text-brand-coffee/60 dark:text-brand-beige/55 text-sm mb-4">
                Please refresh the page or try again later.
              </p>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <pre className="text-left text-xs text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl mb-4 overflow-auto max-h-40">
                  {this.state.error.message}
                </pre>
              )}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={this.handleReset}
                  className="px-6 py-2 border border-brand-brown/20 dark:border-brand-beige/20 text-brand-coffee dark:text-brand-beige rounded-xl font-semibold hover:bg-brand-brown/5 dark:hover:bg-brand-beige/[0.06] transition-colors"
                >
                  Try again
                </button>
                <button
                  onClick={this.handleRefresh}
                  className="px-6 py-2 bg-brand-coffee text-brand-beige rounded-xl font-semibold hover:bg-brand-brown transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
