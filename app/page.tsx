"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100">
            Hi, I'm <span className="text-zinc-400">Nour Abdelrahman</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300">Mechatronics Engineering Student</h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            Motivated Mechatronics Engineering student at the University of Waterloo with strong 
            experience in CAD, and design for manufacturing. Proficient in C++, Python, with 
            working knowledge of FEA and PCB design. Trilingual and adaptable, aiming to 
            contribute to roles in mechanical design, manufacturing, automation or aerospace 
            engineering.
          </p>

          {/* Achievement counters */}
          <div className="flex items-center gap-16 pt-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-2xl font-bold text-purple-400">3+</div>
              <div className="text-sm text-zinc-400">Years of Work Experience</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-2xl font-bold text-purple-400">5+</div>
              <div className="text-sm text-zinc-400">Projects</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-2xl font-bold text-purple-400">20+</div>
              <div className="text-sm text-zinc-400">Skills</div>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-zinc-700 hover:bg-zinc-600">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-zinc-600 text-zinc-400 hover:bg-zinc-800">
              <Link href="/resume">
                Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-12 pt-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-800 w-24 h-24">
                <Github style={{ width: '90px', height: '90px', minWidth: '90px', minHeight: '90px' }} />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-800 w-24 h-24">
                <Linkedin style={{ width: '90px', height: '90px', minWidth: '90px', minHeight: '90px' }} />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Profile picture with enhanced styling */}
          <div className="relative w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem] rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-1 rounded-full bg-zinc-900 flex items-center justify-center">
              <img
                src="/Professional Headshot of Confident Young Man.png"
                alt="Profile"
                className="rounded-full w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-zinc-100">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "CAD & Modelling",
              description: "SolidWorks (CSWA), AutoCAD, Altium Designer, technical drawing standards, GD&T.",
              icon: "🔧",
            },
            {
              title: "Programming",
              description: "C++, Python, RobotC, Excel, SAP, SolidWorks PDM, MS Office, Tortoise SVN.",
              icon: "💻",
            },
            {
              title: "Soft Skills",
              description:
                "Leadership, Organization, Time Management, Communication, Attention to Detail, Critical Thinking.",
              icon: "🧠",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-purple-500 transition-all"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-100">{skill.title}</h3>
              <p className="text-zinc-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-zinc-100">Featured Projects</h2>
          <Button asChild variant="ghost" className="text-purple-400 hover:text-purple-300">
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "SketchBot",
              description: "A robot capable of creating outlines for engineering sketches using C++ and Robot C.",
              timeframe: "10/2024 - 11/2024",
              image: "/SketchBot full pic.jpg",
            },
            {
              title: "V6 Engine Assembly",
              description:
                "Complete V6 engine assembly in SolidWorks with simulated real-world engine motion and timing.",
              timeframe: "01/2025 - 03/2025",
              image: "/V6 Engine.png",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-all"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                  <span className="text-purple-400 text-sm">{project.timeframe}</span>
                </div>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <Button asChild variant="outline" className="border-zinc-600 text-zinc-400 hover:bg-zinc-800">
                  <Link href={`/projects#${project.title.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-zinc-100">Experience</h2>
          <Button asChild variant="ghost" className="text-purple-400 hover:text-purple-300">
            <Link href="/projects#experience">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Manufacturing Engineering Intern",
              company: "Lincoln Electric, Python X",
              location: "Waterdown, Canada",
              timeframe: "01/2025 - 05/2025",
              description:
                "Created engineering drawings and assemblies in SolidWorks and AutoCAD, performed analysis calculations, and collaborated with senior engineers.",
            },
            {
              title: "Quality Technician Intern",
              company: "The Home Depot Store Support Center",
              location: "Bolton, Canada",
              timeframe: "06/2024 - 09/2024",
              description:
                "Conducted quality inspections on products, helped uncover production problems, and performed in-depth measurements and tests.",
            },
          ].map((experience, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-500 transition-all p-6"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-zinc-100">{experience.title}</h3>
                <span className="text-purple-400 text-sm">{experience.timeframe}</span>
              </div>
              <p className="text-zinc-300 mb-2">{experience.company}</p>
              <p className="text-zinc-400 mb-4">{experience.location}</p>
              <p className="text-zinc-400">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
