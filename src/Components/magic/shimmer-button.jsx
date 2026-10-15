import * as React from "react"
import { cn } from "@/lib/utils"

export const ShimmerButton = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl border-2 border-ink bg-persimmon px-6 py-3 text-sm font-bold text-paper transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2 active:translate-x-[2px] active:translate-y-[2px]",
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-marigold/60 blur-md transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      </button>
    )
  }
)
ShimmerButton.displayName = "ShimmerButton"
