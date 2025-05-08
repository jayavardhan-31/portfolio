import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Certifications from "@/components/sections/Certifications"
import Contact from "@/components/sections/Contact"
import ParticleBackground from "@/components/3d/ParticleBackground"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="bg-gradient-to-b from-gray-950 to-black" />}>
          <ParticleBackground />
        </Suspense>
      </div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  )
}
