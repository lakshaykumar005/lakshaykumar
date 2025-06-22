"use client"

import { useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

export function useScrollAnimation() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return { ref, controls }
}
