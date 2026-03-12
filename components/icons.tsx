"use client"

import React from "react"
import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: React.forwardRef<SVGSVGElement, LucideProps>(function Logo({ className, ...props }, ref) {
    return (
      <img
        ref={ref as any}
        src="/logo.png"
        alt="Logo"
        className={className}
        {...(props as any)}
      />
    )
  }),
}
