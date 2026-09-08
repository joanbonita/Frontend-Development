"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section className="pt-0 pb-5 px-[8%] lg:px-[16%] bg-linear-to-r from-[--body-color] to-[--bg-color]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Left side: neural network SVG pointing to the resume card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <svg
            width="240"
            height="280"
            viewBox="0 0 240 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full h-auto"
          >
            {/* Neural connections – all paths end near the right edge (x ≈ 200–220) */}
            <path
              d="M20 50 Q 80 70, 60 120 T 110 160 T 80 210 T 140 240 T 200 250"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              opacity="0.7"
            />
            <path
              d="M40 30 Q 100 50, 90 110 T 140 150 T 110 200 T 170 220 T 210 230"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <path
              d="M10 90 Q 70 110, 50 170 T 120 190 T 90 240 T 160 260 T 220 260"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeDasharray="8 4"
              opacity="0.7"
            />
            {/* Nodes */}
            <circle cx="20" cy="50" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="60" cy="120" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="110" cy="160" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="80" cy="210" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="140" cy="240" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="200" cy="250" r="5" fill="#00e5ff" opacity="0.8" />

            <circle cx="40" cy="30" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="90" cy="110" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="140" cy="150" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="110" cy="200" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="170" cy="220" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="210" cy="230" r="5" fill="#00e5ff" opacity="0.8" />

            <circle cx="10" cy="90" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="50" cy="170" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="120" cy="190" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="90" cy="240" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="160" cy="260" r="5" fill="#00e5ff" opacity="0.8" />
            <circle cx="220" cy="260" r="5" fill="#00e5ff" opacity="0.8" />
          </svg>
        </motion.div>

        {/* Right side: resume card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-3/5"
        >
          <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={28} className="text-[--prim-color]" />
              <h2 className="text-3xl md:text-4xl font-bold font-ubuntusansmono">
                My <span className="text-[--prim-color]">Resume</span>
              </h2>
            </div>
            <p className="text-[--text-light] mb-6">
              Complete professional resume including education, experience, technical skills, and certifications.
            </p>
            <a
              href="/api/assets/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[--prim-color] text-white rounded-lg hover:opacity-90 transition-all font-medium w-full justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}