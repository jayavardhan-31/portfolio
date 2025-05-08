"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const certifications = ["Oracle OCI Architect Associate (Dec 2023)", "Oracle AI Foundations Associate (Dec 2023)"]

  return (
    <section id="certifications" className="py-20 px-4 bg-black/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neon-pink glow-text-pink">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="animate-float"
            >
              <Badge
                variant="outline"
                className="py-3 px-6 text-base bg-black/50 border-neon-blue flex items-center gap-2"
              >
                <Award className="h-5 w-5 text-neon-pink" />
                {cert}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
