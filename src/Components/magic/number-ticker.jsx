import * as React from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export function NumberTicker({ value = 0, className, decimals = 0, prefix = "", suffix = "" }) {
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 })
  const display = useTransform(spring, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`)
  const [text, setText] = React.useState(`${prefix}${(0).toFixed(decimals)}${suffix}`)

  React.useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  React.useEffect(() => {
    const unsubscribe = display.on("change", (v) => setText(v))
    return unsubscribe
  }, [display])

  return <span className={cn("font-display font-bold text-olive", className)}>{text}</span>
}
