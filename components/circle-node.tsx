"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Briefcase, GraduationCap, Mail, User, Code, Folder } from "lucide-react"
import { useTheme } from "next-themes"

type CircleNodeProps = {
  size: number
  label: string
  subLabel?: string
  image?: string
  active?: boolean
  expanded?: boolean
  glow?: boolean
  icon?: "briefcase" | "graduation-cap" | "mail" | "user" | "code" | "folder"
  onClick?: () => void
}

export default function CircleNode({
  size,
  label,
  subLabel,
  image,
  active = false,
  expanded = false,
  glow = false,
  icon,
  onClick,
}: CircleNodeProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const renderIcon = () => {
    if (!icon) return null

    const iconSize = size * 0.3
    const iconProps = {
      size: iconSize,
      className: active ? "text-white" : expanded && isDark ? "text-black" : expanded ? "text-primary" : "text-white",
    }

    switch (icon) {
      case "briefcase":
        return <Briefcase {...iconProps} />
      case "graduation-cap":
        return <GraduationCap {...iconProps} />
      case "mail":
        return <Mail {...iconProps} />
      case "code":
        return <Code {...iconProps} />
      case "folder":
        return <Folder {...iconProps} />
      case "user":
      default:
        return <User {...iconProps} />
    }
  }

  return (
    <div className={cn(glow && "glow")}>
      <div
        className={cn(
          "rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover-lift",
          active
            ? "bg-full-gradient text-white shadow-lg shadow-primary/30 hover-glow"
            : expanded
              ? "glass text-foreground shadow-xl"
              : isDark
                ? "bg-forest-teal text-white shadow-lg hover:shadow-xl dark:shadow-black/20 hover-glow"
                : "bg-light-forest-teal text-white shadow-lg hover:shadow-xl hover-glow",
          "transform transition-all duration-300",
          active && "scale-110",
          !active && "hover:scale-105",
        )}
        style={{
          width: size,
          height: size,
        }}
        onClick={onClick}
      >
        {image ? (
          <div
            className={cn(
              "relative overflow-hidden rounded-full border-2 transition-all duration-300",
              active
                ? "border-white/50 hover:border-white/70"
                : expanded
                  ? "border-white/30 dark:border-white/10 hover:border-white/50 dark:hover:border-white/20"
                  : "border-white/30 hover:border-white/50",
            )}
            style={{ width: size * 0.7, height: size * 0.7 }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={label}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ) : (
          <div
            className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
            style={{ height: size * 0.6 }}
          >
            {renderIcon()}
          </div>
        )}

        <div
          className={cn(
            "font-medium mt-2 text-center px-2 transition-all duration-300",
            active ? "text-white" : expanded ? "gradient-text font-semibold" : "text-white",
          )}
          style={{ fontSize: size * 0.12 }}
        >
          {label}
        </div>

        {subLabel && (
          <div
            className={cn(
              "text-xs mt-1 transition-all duration-300",
              active ? "text-white/80" : expanded ? "text-foreground/70" : "text-white/80",
            )}
          >
            {subLabel}
          </div>
        )}
      </div>
    </div>
  )
}
