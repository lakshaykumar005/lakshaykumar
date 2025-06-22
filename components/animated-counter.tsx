"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ from, to, duration = 2, suffix = "" }: AnimatedCounterProps) {
  const count = useMotionValue(from)
  const formatted = useTransform(count, (latest) =>
    Number.isInteger(to) ? Math.round(latest).toString() : latest.toFixed(1)
  )
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration })
      return controls.stop
    }
  }, [count, to, duration, inView])

  return (
    <motion.span ref={ref}>
      <motion.span>{formatted}</motion.span>
      {suffix}
    </motion.span>
  )
}
