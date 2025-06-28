import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[0.5rem] border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        green:"border-transparent bg-green-300 text-gray-800 shadow hover:bg-green-300/80",
        gray: "border-transparent bg-gray-500 text-gray-50 shadow hover:bg-gray-600",
        red: "border-transparent bg-red-500 text-red-50 shadow hover:bg-red-600",
        blue: "border-transparent bg-blue-500 text-blue-50 shadow hover:bg-blue-600",
        purple: "border-transparent bg-purple-500 text-purple-100 shadow hover:bg-purple-500/80",
        pink: "border-transparent bg-pink-500 text-pink-50 shadow hover:bg-pink-600",
        yellow: "border-transparent bg-yellow-500 text-yellow-50 shadow hover:bg-yellow-600",
        orange: "border-transparent bg-orange-500 text-orange-50 shadow hover:bg-orange-600",
        teal: "border-transparent bg-teal-500 text-teal-50 shadow hover:bg-teal-600",
        indigo: "border-transparent bg-indigo-300 text-gray-800 shadow hover:bg-indigo-300/80",
        slate: "border-transparent bg-slate-500 text-slate-50 shadow hover:bg-slate-600",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge }