// components/ui/badge.tsx
"use client"

import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary"
  className?: string
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-gray-100 text-gray-800",
  secondary: "bg-accent/10 text-accent",
}

const Badge = React.forwardRef<
  React.ElementRef<"span">,
  BadgeProps
>(({ variant = "default", className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        // base badge styles
        "inline-flex items-center rounded-full text-xs font-medium transition-colors",
        // variant-specific
        variantClasses[variant],
        // any extra classes passed in (e.g. px-3 py-1, hover:…, etc.)
        className
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export { Badge }
