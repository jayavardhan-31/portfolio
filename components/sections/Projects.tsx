"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "@/components/ui/ProjectCard"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const projects = [
    {
      name: "Enhanced Cricket Commentary",
      stack: ["GPT-4 Vision", "Gemma 2B", "Zonos voice cloning"],
      details: "Automated match commentary overlaying live stream; achieved 90% user satisfaction in beta",
      date: "October 2024",
      repo: "https://github.com/jayavardhan8907/cricket-ai",
    },
    {
      name: "Government Schemes Discovery",
      stack: ["MixTral 8x7b", "Python", "Transformers"],
      details: "RAG-powered web app aggregating 200+ schemes; reduced search time by 85%",
      date: "March 2024",
      demo: "https://govschemes.example.com",
    },
    {
      name: "Omnichannel Doctor Booking",
      stack: ["AWS Lambda", "Twilio", "OpenAI Whisper", "FastAPI"],
      details: "Voice/email/SMS-based booking agent handling 1k calls/day with 99% uptime",
      date: "February 2025",
      caseStudy: "link-to-case-study.pdf",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-neon-blue glow-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-pink mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
