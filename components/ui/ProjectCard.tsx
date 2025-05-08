"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, FileText } from "lucide-react"
import { Button } from "./button"

interface Project {
  name: string
  stack: string[]
  details: string
  date: string
  repo?: string
  demo?: string
  caseStudy?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
        }}
        className="floating-card rounded-xl bg-black/30 backdrop-blur-sm border border-gray-800 overflow-hidden cursor-pointer"
        onClick={toggleModal}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-neon-blue">{project.name}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, i) => (
              <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-sm mb-3">{project.details}</p>

          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">{project.date}</span>
            <span className="text-xs text-neon-pink">View Details →</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative bg-gray-900 border border-gray-800 rounded-xl w-full max-w-2xl p-6 overflow-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={toggleModal}>
                <X className="h-6 w-6" />
              </button>

              <h2 className="text-2xl font-bold mb-4 text-neon-blue">{project.name}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-neon-pink">Details</h3>
                <p className="text-gray-300">{project.details}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-neon-pink">Date</h3>
                <p className="text-gray-300">{project.date}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.repo && (
                  <Button variant="neon" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  </Button>
                )}

                {project.demo && (
                  <Button variant="neonPink" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.caseStudy && (
                  <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.caseStudy} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      Case Study
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
