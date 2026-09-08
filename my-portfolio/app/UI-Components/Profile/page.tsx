"use client";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Code2, Cpu, Server, Brain } from "lucide-react";
import experienceEntries from "@/app/JsonData/experience.json";

const skillCategories = [
  {
    category: 'AI & Cloud',
    icon: Brain,
    items: [
      { name: 'Generative AI', level: 90 },
      { name: 'Artificial Intelligence', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Data & Analytics', level: 80 },
    ]
  },
  {
    category: 'Programming',
    icon: Code2,
    items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 80 },
    ]
  },
  {
    category: 'Hardware & Embedded',
    icon: Cpu,
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
    items: [
      { name: 'Control Systems Design', level: 80 },
      { name: 'Robotics', level: 80 },
      { name: 'Networking', level: 75 },
    ]
  }
];

const educationEntries = [
  {
    school: 'University of Zimbabwe',
    degree: 'Bachelor of Science Honours in Hardware Engineering',
    period: 'Aug 2020 - Jun 2024',
    grade: 'Grade: 2.1 (Merit)',
    description: 'Comprehensive study of hardware engineering with focus on robotics, AI and electrical engineering',
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
    period: 'Jan 2017 - 2019',
    grade: 'Grade: Distinction',
    description: 'Advanced diploma program with hands-on hardware engineering training.',
    highlights: ['AutoCAD', 'Schematic Editing', 'Hardware Troubleshooting', 'System Configuration', 'Technical Support']
  },
  {
    school: 'University of Zimbabwe',
    degree: 'Certificate in Applied Information & Technology — Hardware Engineering',
    period: 'Jun 2017 – Aug 2018',
    grade: 'Grade: Pass',
    description: 'Foundation-level training in applied information technology and hardware engineering principles with laboratory projects.',
    highlights: ['Hardware Systems', 'IT Infrastructure', 'Technical Fundamentals', 'Lab Work']
  },
];

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-10 relative">
        {/* Content Section */}
        <section className="px-[8%] lg:px-[16%] py-12">
          <>
          {/* Education Tab */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-4xl font-bold font-ubuntusansmono mb-8">
                My <span className="text-[--prim-color]">Education</span>
              </h2>
              <div className="space-y-6">
                {educationEntries.map((edu, index) => (
                  <div key={index} className="bg-[--bg-color] border border-[--light-border] rounded-lg p-6 hover:border-[--prim-color] transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold font-ubuntusansmono text-[--prim-color] mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-white mb-1">{edu.school}</p>
                        <p className="text-[--text-light]">{edu.period}</p>
                      </div>
                      <span className="px-4 py-2 bg-[--prim-color]/20 text-[--prim-color] rounded-lg font-medium">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-[--text-light] mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span key={highlight} className="px-3 py-1 bg-[--prim-color]/20 text-[--prim-color] text-sm rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          {/* Experience Tab */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-4xl font-bold font-ubuntusansmono mb-8">
                My <span className="text-[--prim-color]">Experience</span>
              </h2>
              <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8">
                <ul className="mb-8 space-y-6">
                  {experienceEntries.map((entry) => (
                    <li key={entry.id}>
                      <span className="font-bold text-white">{entry.title}</span>{" "}
                      <span className="text-[--prim-color]">@ {entry.company}</span>
                      <div className="text-[--text-light]">{entry.duration}</div>
                      <div className="text-sm text-[--text-light]">{entry.description}</div>
                    </li>
                  ))}
                </ul>
                {/* Qualifications added below experience */}
                <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8 mt-8">
                  <h3 className="text-2xl font-bold font-ubuntusansmono mb-4 text-[--prim-color]">Qualifications</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-[--text-light]">Background:</span>
                      <span className="font-bold">Hardware Engineering</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[--text-light]">Current Focus:</span>
                      <span className="font-bold">Frontend Dev & Data Science</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[--text-light]">Specialization:</span>
                      <span className="font-bold">Hardware Engineering and Data Science</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[--text-light]">Tech Stack:</span>
                      <span className="font-bold">React, Node.js, Python, C, C++</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          {/* Certifications Tab */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-4xl font-bold font-ubuntusansmono mb-8">
                My <span className="text-[--prim-color]">Certifications</span>
              </h2>
              <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8">
                <p className="text-[--text-light]">Professional certifications and credentials will be displayed here.</p>
              </div>
            </motion.div>
          </>
        </section>
      </main>
      <Footer />
    </>
  );
}
