import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Carousel = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("relative", className)} {...props}>
    {children}
  </div>
))
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const scrollRef = React.useRef(null)
  React.useImperativeHandle(ref, () => scrollRef.current)
  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex gap-4 overflow-x-auto scroll-smooth pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("shrink-0 [scroll-snap-align:start]", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

function CarouselPrevious({ className, targetRef, ...props }) {
  const scroll = () => {
    const el = typeof targetRef === "string" ? document.querySelector(targetRef) : targetRef?.current
    if (el) el.scrollBy({ left: -320, behavior: "smooth" })
  }
  return (
    <button
      type="button"
      aria-label="Scroll left"
      onClick={scroll}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  )
}

function CarouselNext({ className, targetRef, ...props }) {
  const scroll = () => {
    const el = typeof targetRef === "string" ? document.querySelector(targetRef) : targetRef?.current
    if (el) el.scrollBy({ left: 320, behavior: "smooth" })
  }
  return (
    <button
      type="button"
      aria-label="Scroll right"
      onClick={scroll}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors hover:bg-marigold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
