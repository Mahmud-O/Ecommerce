import { cn } from "@/lib/utils"

export function Marquee({ className, children, repeat = 2 }) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className="flex shrink-0 animate-marquee items-center gap-8 pr-8"
        >
          {children}
        </div>
      ))}
    </div>
  )
}
