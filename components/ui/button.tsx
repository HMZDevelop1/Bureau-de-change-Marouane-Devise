import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "orange";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-brand-ocean text-white hover:bg-brand-orange shadow-brand hover:shadow-orange":
              variant === "default",
            "border border-brand-ocean/20 bg-white text-brand-ocean hover:bg-brand-ocean hover:text-white":
              variant === "outline",
            "text-brand-ocean hover:bg-brand-orange/10 hover:text-brand-orange":
              variant === "ghost",
            "text-brand-orange underline-offset-4 hover:underline":
              variant === "link",
            "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-orange":
              variant === "orange",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-xl px-3": size === "sm",
            "h-12 rounded-2xl px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
