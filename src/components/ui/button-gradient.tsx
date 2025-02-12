
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonGradientProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg" | "sm";
}

const ButtonGradient = React.forwardRef<HTMLButtonElement, ButtonGradientProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300",
          "before:absolute before:inset-0 before:transition-all before:duration-300",
          variant === "default"
            ? [
                "bg-gradient-to-r from-accent to-primary text-white shadow-lg",
                "hover:from-accent/90 hover:to-primary/90",
                "before:opacity-0 hover:before:opacity-100",
                "before:bg-gradient-to-r before:from-accent/90 before:to-primary/90",
              ]
            : [
                "border-2 border-accent/20 bg-white/5 text-accent",
                "hover:border-accent/40 hover:bg-accent/5",
                "before:opacity-0",
              ],
          size === "default" && "h-11 px-8",
          size === "lg" && "h-14 px-10 text-lg",
          size === "sm" && "h-9 px-6",
          "font-medium",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative">{props.children}</span>
      </button>
    );
  }
);
ButtonGradient.displayName = "ButtonGradient";

export { ButtonGradient };
