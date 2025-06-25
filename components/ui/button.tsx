// components/ui/button.tsx
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

type ButtonVariants = "default" | "outline" | "ghost"
type ButtonSizes = "icon" | "sm" | "default" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSizes
  asChild?: boolean
  className?: string
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

const variantClasses: Record<ButtonVariants, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
}

const sizeClasses: Record<ButtonSizes, string> = {
  icon: "h-10 w-10",
  sm: "h-9 px-3 rounded-md",
  default: "h-10 py-2 px-4",
  lg: "h-12 px-6 rounded-lg",
}

const Button = React.forwardRef<
  React.ElementRef<"button">,
  ButtonProps & { asChild?: boolean }
>(
  (
    {
      variant = "default",
      size = "default",
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          // base styles
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          // variant-specific
          variantClasses[variant],
          // size-specific
          sizeClasses[size],
          // any extra classes passed in
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
