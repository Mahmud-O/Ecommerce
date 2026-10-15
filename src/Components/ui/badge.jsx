/* eslint-disable react-refresh/only-export-components */
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-persimmon text-paper",
        olive: "bg-olive text-paper",
        marigold: "bg-marigold text-ink",
        brick: "bg-brick text-paper",
        clay: "bg-clay text-ink",
        outline: "bg-paper text-ink",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
