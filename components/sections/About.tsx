"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import FloatingCard from "@/components/ui/FloatingCard"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const education = [
    {
      institution: "Amrita School of Engineering",
      degree: "B.Tech AI",
      period: "2021–Present",
    },
  ]

  const skills = ["Java", "Python", "SQL", "Linux", "Windows", "LLMs", "ROS", "AWS"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-neon-blue glow-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-pink mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FloatingCard>
            <div className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue glow-text">Education</h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {education.map((edu, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-neon-pink before:rounded-full"
                  >
                    <h4 className="text-xl font-semibold">{edu.institution}</h4>
                    <p className="text-gray-300">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </FloatingCard>

          <FloatingCard>
            <div className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-neon-pink glow-text-pink">Skills</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-black/30 border border-gray-800 rounded-lg p-3 text-center hover:border-neon-blue transition-colors duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
