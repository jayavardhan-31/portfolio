"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ExperiencePanel from "@/components/ui/ExperiencePanel"

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const experiences = [
    {
      company: "Value Health",
      role: "GenAI Engineer",
      period: "Jan 2025 – Present",
      highlights: [
        "ScribeX AI: Real-time medical note automation (↓70% time, 92% accuracy)",
        "Virtual Radiologist: 30k+ reports analyzed (↑12% accuracy)",
      ],
    },
    {
      company: "Ignitus",
      role: "Machine Learning Intern",
      period: "Aug 2023 – Oct 2023",
      highlights: ["CV3 – Facial Sentiment Analysis (50k images; ↑5% accuracy)"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-black/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-neon-pink glow-text-pink">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-neon-blue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperiencePanel key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
