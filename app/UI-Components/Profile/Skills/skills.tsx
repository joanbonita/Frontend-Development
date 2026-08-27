'use client'

import { motion } from 'framer-motion'
import { Brain, Code2, Cpu, Server, Cloud } from 'lucide-react'
import Link from 'next/link'

const skillCategories = [
  {
    category: 'AI & Cloud',
    icon: Brain,
    color: 'from-purple-600 to-blue-600',
    items: [
      { name: 'Generative AI', level: 90 },
      { name: 'Artificial Intelligence', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'OCI (AI Foundations)', level: 85 },
      { name: 'Data & Analytics', level: 80 },
    ]
  },
  {
    category: 'Programming',
    icon: Code2,
    color: 'from-blue-600 to-cyan-600',
    items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 80 },
    ]
  },
  {
    category: 'Hardware & Embedded',
    icon: Cpu,
    color: 'from-orange-600 to-red-600',
    items: [
      { name: 'Embedded Systems', level: 90 },
      { name: 'Digital Circuit Design', level: 85 },
      { name: 'Analog Semiconductors', level: 80 },
      { name: 'Schematic Editing', level: 85 },
      { name: 'AutoCAD', level: 80 },
    ]
  },
  {
    category: 'Systems & Networking',
    icon: Server,
    color: 'from-green-600 to-emerald-600',
    items: [
      { name: 'Control Systems Design', level: 80 },
      { name: 'Robotics', level: 80 },
      { name: 'Parallel & Distributed Computing', level: 75 },
      { name: 'Networking', level: 75 },
    ]
  },
  {
    category: 'Professional Skills',
    icon: Cloud,
    color: 'from-pink-600 to-purple-600',
    items: [
      { name: 'Leadership', level: 85 },
      { name: 'Strategy', level: 80 },
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Customer Service', level: 75 },
    ]
  }
]

export default function SkillsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground">
            Technical skills and professional competencies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-card rounded-lg border border-foreground/10 p-8 hover:border-blue-500/30 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-linear-to-br ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>

                {/* Skill Items */}
                <div className="space-y-5">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-500/10 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: (catIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                          className={`h-full bg-linear-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
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
          <Link href="/#projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Projects
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
