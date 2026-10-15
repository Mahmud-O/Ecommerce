import { motion as Motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function BlurFade({ children, className, delay = 0, y = 16, ...props }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Motion.div>
  )
}
