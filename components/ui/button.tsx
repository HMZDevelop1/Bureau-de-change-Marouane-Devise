import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "coffee";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            "bg-brand-coffee text-brand-beige hover:bg-brand-brown shadow-coffee hover:shadow-coffee-lg":
              variant === "default" || variant === "coffee",
            "border border-brand-brown/15 bg-brand-beige text-brand-coffee hover:bg-brand-brown/5 hover:border-brand-brown/30 shadow-sm":
              variant === "outline",
            "border border-brand-beige/10 bg-brand-beige/[0.04] text-brand-beige hover:bg-brand-beige/[0.08] shadow-sm dark:border-brand-beige/10 dark:bg-brand-beige/[0.04] dark:text-brand-beige dark:hover:bg-brand-beige/[0.08]":
              variant === "outline",
            "text-brand-coffee hover:bg-brand-brown/5 hover:text-brand-brown":
              variant === "ghost",
            "text-brand-coffee/60 hover:text-brand-brown hover:underline underline-offset-4":
              variant === "link",
          },
          {
            "h-10 px-5 py-2": size === "default",
            "h-9 px-3 text-xs": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
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
