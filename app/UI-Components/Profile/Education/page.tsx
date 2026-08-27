"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const educationEntries = [
    {
        school: 'University of Zimbabwe',
        degree: 'Bachelor of Science Honours in Hardware Engineering',
        period: 'Aug 2020 - Jun 2024',
        grade: 'Grade: 2.1 (Merit)',
        description: 
                'Comprehensive study of hardware engineering with focus on robotics, AI and electrical engineering',
        highlights: [
                'Robotics',
                'Embedded Systems',
                'Microprocessors & Microcontrollers',
                'Digital Electronics & Logic Design',
                'Artificial Intelligence and Machine Learning',
        ],   
    },
    {
        school: 'University of Zimbabwe',
        degree: 'Diploma in Applied Information Technology - Hardware Engineering',
        period:  'Jan 2017 - 2019',
        grade: 'Grade: Distinction',
        description:
            'Advanced diploma program with hands-on hardware engineering training. Practical coursework in design, troubleshooting, and system integration.',
        highlights: [
            'AutoCAD', 
            'Schematic Editing', 
            'Hardware Troubleshooting', 
            'System Configuration', 
            'Technical Support'
        ],       
    },
    {
        school: 'University of Zimbabwe',
        degree: 'Certificate in Applied Information & Technology — Hardware Engineering',
        period: 'Jun 2017 – Aug 2018',
        grade: 'Grade: Pass',
        description: 'Foundation-level training in applied information technology and hardware engineering principles with laboratory projects.',
        highlights: [
            'Hardware Systems',
            'IT Infrastructure',
            'Technical Fundamentals',
            'Lab Work',
        ],    
    },
]

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[--prim-color] hover:opacity-90 mb-6">
          ← Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-3">
          <span className="w-8 h-8 text-[--prim-color] inline-block" />
          Education
        </h1>
        <p className="text-lg text-[--text-light]">My academic background</p>

        {/* Education Entries */}
        <div className="space-y-8 mt-8">
          {educationEntries.map((edu) => (
            <motion.div
              key={edu.degree}
              className="bg-[--bg-color] rounded-lg border border-[--light-border] p-8 hover:border-[--prim-color] transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{edu.degree}</h2>
                  <p className="text-lg text-[--prim-color] font-medium">{edu.school}</p>
                </div>
                <div className="text-right">
                  <p className="flex items-center gap-2 text-[--text-light] mb-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </p>
                  <p className="text-sm font-semibold text-[--prim-color]">{edu.grade}</p>
                </div>
              </div>

              <p className="text-[--text-light] mb-4">{edu.description}</p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-[--prim-color]/20 text-[--prim-color] rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-[--light-border] flex flex-wrap gap-4 justify-center"
        >
          <Link href="/UI-Components/About" className="px-6 py-2 bg-[--prim-color] text-white rounded-lg hover:opacity-90 transition-colors">
            View About
          </Link>
          <Link href="/UI-Components/Profile" className="px-6 py-2 border border-[--prim-color] text-[--prim-color] rounded-lg hover:bg-[--prim-color]/10 transition-colors">
            View Profile
          </Link>
          <Link href="/UI-Components/Projects/Project" className="px-6 py-2 border border-[--light-border] rounded-lg hover:bg-[--bg-color] transition-colors">
            View Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

       
