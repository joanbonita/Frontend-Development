'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import Link from 'next/link'
import projectsData from '@/app/JsonData/projects.json'

interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  github?: string
  demo?: string
  icon?: string
}

const projects: Project[] = projectsData as Project[]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-600" />
            Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg border border-foreground/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Code2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="px-6 py-4 border-t border-foreground/10 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-foreground/10 flex flex-wrap gap-4 justify-center"
        >
          <Link href="/UI-Components/Profile/Education" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Education
          </Link>
          <Link href="/experience" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Experience
          </Link>
          <Link href="/skills" className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Skills
          </Link>
          <Link href="/#contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
