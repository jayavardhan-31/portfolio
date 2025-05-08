"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import RotatingText3D from "@/components/3d/RotatingText3D"
import { Suspense } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 20
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 20

      const elements = containerRef.current.querySelectorAll(".parallax")
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement
        const speedX = Number(htmlEl.dataset.speedX) || 1
        const speedY = Number(htmlEl.dataset.speedY) || 1

        htmlEl.style.transform = `translate(${moveX * speedX}px, ${moveY * speedY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl parallax"
          data-speed-x="2"
          data-speed-y="1"
        ></div>
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl parallax"
          data-speed-x="-2"
          data-speed-y="-1"
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-neon-blue mb-2 tracking-wider"
            >
              HELLO, I AM
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Jayavardhan </span>
              <span className="text-neon-pink glow-text-pink">Kolla</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              <span className="text-neon-blue glow-text">GenAI Engineer</span> &{" "}
              <span className="text-neon-pink glow-text-pink">Full-Stack Developer</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="neon" size="lg" className="font-medium">
                View My Work
              </Button>
              <Button variant="neonPink" size="lg" className="font-medium">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex justify-center items-center h-[400px]"
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="text-5xl font-bold">
                    <span className="text-neon-blue glow-text">J</span>
                    <span className="text-neon-pink glow-text-pink">K</span>
                  </div>
                </div>
              }
            >
              <RotatingText3D />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
