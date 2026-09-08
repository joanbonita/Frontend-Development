"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-start justify-center px-[8%] lg:px-[16%] pt-14 pb-10">
      <motion.div
        className="w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-10 mb-0">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 text-center lg:text-left flex-1 max-w-2xl">

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-medium tracking-widest uppercase"
              style={{ color: "rgba(0,229,255,0.75)" }}
            >
              Hardware Engineer · Frontend Developer . Data Science
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}
            >
              Hi, I&apos;m Salma Joan
              <br />
              Judith Pelesi
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[--text-light] leading-relaxed"
            >
              I&apos;m a Hardware Engineer with a passion for building things
              on both sides of the screen. I&apos;m self-taught in frontend development and
              currently pursuing a{" "}
              <span className="text-white font-medium">
                Master&apos;s in Data Science
              </span>{" "}
              — combining engineering precision, creative web development,
              and data-driven thinking to build innovative solutions.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4"
            >
              <Link
                href="/UI-Components/Projects/Project"
                className="px-5 py-3 border border-[--prim-color] text-[--prim-color] rounded-lg font-medium hover:bg-[--prim-color]/10 transition duration-300 whitespace-nowrap"
              >
                View My Projects
              </Link>

              <a
                href="https://github.com/joanbonita"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[--prim-color] text-[--prim-color] rounded-lg font-medium hover:bg-[--prim-color]/10 transition duration-300 whitespace-nowrap"
              >
                GitHub Profile
              </a>
            </motion.div>

            {/* SOCIALS SECTION REMOVED */}

          </div>

          {/* RIGHT SIDE — CHIP */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end w-full lg:w-auto self-start"
          >
            <div className="w-[240px] md:w-[260px]" style={{ maxHeight: "260px", overflow: "hidden" }}>
              <svg viewBox="0 0 260 260" width="100%" fill="none">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <clipPath id="chipPhotoClip">
                    <rect x="65" y="65" width="130" height="130" rx="12" />
                  </clipPath>
                </defs>

                <image
                  href="/api/assets/profile.jpg"
                  x="65"
                  y="65"
                  width="130"
                  height="130"
                  clipPath="url(#chipPhotoClip)"
                  preserveAspectRatio="xMidYMid slice"
                />

                <g
                  filter="url(#glow)"
                  stroke="#00e5ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                >
                  <rect x="50" y="50" width="160" height="160" rx="16" />
                  <rect x="65" y="65" width="130" height="130" rx="12" />

                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`top-${i}`} x1={70 + i * 18} y1="40" x2={70 + i * 18} y2="50" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`bottom-${i}`} x1={70 + i * 18} y1="210" x2={70 + i * 18} y2="220" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`left-${i}`} x1="40" y1={70 + i * 18} x2="50" y2={70 + i * 18} />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`right-${i}`} x1="210" y1={70 + i * 18} x2="220" y2={70 + i * 18} />
                  ))}
                </g>
              </svg>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;