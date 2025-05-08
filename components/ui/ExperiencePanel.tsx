"use client"

import { motion } from "framer-motion"
import FloatingCard from "./FloatingCard"

interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

interface ExperiencePanelProps {
  experience: Experience
  index: number
}

export default function ExperiencePanel({ experience, index }: ExperiencePanelProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <FloatingCard>
        <div className="p-6 h-full">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className={`text-xl font-bold ${isEven ? "text-neon-blue" : "text-neon-pink"}`}>
                {experience.company}
              </h3>
              <p className="text-gray-300">{experience.role}</p>
            </div>
            <span className="text-sm text-gray-400 bg-black/50 px-2 py-1 rounded">{experience.period}</span>
          </div>

          <ul className="space-y-3">
            {experience.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-start gap-2"
              >
                <span className={`text-lg ${isEven ? "text-neon-blue" : "text-neon-pink"}`}>•</span>
                <span className="text-gray-300">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </FloatingCard>
    </motion.div>
  )
}
