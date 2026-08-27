"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Code2, Cpu, Server, Brain, GraduationCap, Award, Briefcase } from "lucide-react";

const tabs = [
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award }
];

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
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-10 relative">
        {/* Sticky Tab Navigation */}
        <div
          className="sticky top-20 border-b border-[--light-border] z-30 pointer-events-auto"
          style={{ backgroundColor: "var(--body-color)" }}
        >
          <div className="px-[8%] lg:px-[16%] pointer-events-auto">
            <div className="flex flex-wrap gap-2 py-4 pointer-events-auto">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[--prim-color] text-white"
                        : "bg-white text-[--prim-color] hover:bg-[--prim-color] hover:text-white border border-[--light-border]"
                    }`}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActiveTab(tab.id);
                    }}
                    // ensure pointer events not blocked by surrounding layout
                    style={{ pointerEvents: 'auto' }}
                    >
                    <IconComponent size={18} />
                    <span
                      style={{
                        background: 'linear-gradient(90deg, var(--prim-color), #ffffff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="px-[8%] lg:px-[16%] py-12">
          {/* Skills Tab */}
          {activeTab === "skills" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-4xl font-bold font-ubuntusansmono mb-8">
                My <span className="text-[--prim-color]">Skills</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.category} className="bg-[--bg-color] border border-[--light-border] rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <IconComponent size={28} className="text-[--prim-color]" />
                        <h3 className="text-xl font-bold font-ubuntusansmono">{category.category}</h3>
                      </div>
                      <div className="space-y-4">
                        {category.items.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-[--prim-color] text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-[--light-border] rounded-full h-2">
                              <div
                                className="bg-[--prim-color] h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
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
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-4xl font-bold font-ubuntusansmono mb-8">
                My <span className="text-[--prim-color]">Experience</span>
              </h2>
              <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8">
                <ul className="space-y-4 mb-8">
                  <li>
                    <span className="font-bold text-white">Hardware Engineer Intern</span> <span className="text-[--prim-color]">@ ZimTech Solutions</span>
                    <div className="text-[--text-light]">Jan 2024 - Present</div>
                    <div className="text-[--text-light] text-sm">Worked on embedded systems, PCB design, and robotics integration.</div>
                  </li>
                  <li>
                    <span className="font-bold text-white">Junior Data Scientist</span> <span className="text-[--prim-color]">@ DataInsight Africa</span>
                    <div className="text-[--text-light]">Jun 2023 - Dec 2023</div>
                    <div className="text-[--text-light] text-sm">Built machine learning models for hardware sensor data analysis.</div>
                  </li>
                  <li>
                    <span className="font-bold text-white">IT Support Technician</span> <span className="text-[--prim-color]">@ University of Zimbabwe</span>
                    <div className="text-[--text-light]">Jan 2021 - May 2023</div>
                    <div className="text-[--text-light] text-sm">Maintained lab hardware, supported students, and managed network infrastructure.</div>
                  </li>
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
          )}

          {/* Certifications Tab */}
          {activeTab === "certifications" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-4xl font-bold font-ubuntusansmono mb-8">
                My <span className="text-[--prim-color]">Certifications</span>
              </h2>
              <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8">
                <p className="text-[--text-light]">Professional certifications and credentials will be displayed here.</p>
              </div>
            </motion.div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
