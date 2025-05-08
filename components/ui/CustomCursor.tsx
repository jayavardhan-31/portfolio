"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isEnabled, setIsEnabled] = useState(true)

  useEffect(() => {
    // Check if reduced motion is preferred
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setIsEnabled(false)
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  if (!isEnabled) return null

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: "spring", damping: 10, stiffness: 100, mass: 0.1 }}
    />
  )
}
