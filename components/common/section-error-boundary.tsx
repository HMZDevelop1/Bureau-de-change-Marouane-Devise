"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
}

export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.error(`[SectionError:${this.props.name || "unknown"}]`, error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
