// Replace the 3D component with a simpler CSS-based alternative
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function RotatingText3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="relative w-64 h-64 flex items-center justify-center"
      >
        <div className="absolute inset-0 border-4 border-neon-blue rounded-full opacity-30" />
        <div className="absolute inset-2 border-4 border-neon-pink rounded-full opacity-20" />
        <div className="absolute inset-4 border-4 border-neon-blue rounded-full opacity-10" />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="z-10 bg-black bg-opacity-50 px-6 py-3 rounded-lg backdrop-blur-sm"
        >
          <span className="text-5xl font-bold">
            <span className="text-neon-blue glow-text">J</span>
            <span className="text-neon-pink glow-text-pink">K</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
