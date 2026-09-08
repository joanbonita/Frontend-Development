"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await import("../../JsonData/experience.json");
      } catch (error) {
        console.error("Error loading experience:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-10">
        <section className="px-[8%] lg:px-[16%] py-10">
          {/* About Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntusansmono mb-6">
              About <span className="text-[--prim-color]">Me</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-[--text-light] leading-relaxed mb-4">
                  Hi! I am Salma Joan Judith Pelesi, a Hardware Engineer transitioning into Frontend Development
                  and Data Science. I bring a unique perspective from hardware design, combining it with
                  modern web technologies and data-driven insights.
                </p>
                <p className="text-lg text-[--text-light] leading-relaxed mb-4">
                  My background spans IoT systems, embedded systems, and hardware prototyping, which
                  informs my approach to building robust, efficient web applications. I am passionate
                  about React, Next.js, and exploring how data science can solve real-world problems.
                </p>
                <p className="text-lg text-[--text-light] leading-relaxed">
                  I am on a continuous learning journey—building projects, contributing to open-source,
                  and exploring the intersection of hardware, frontend development, and data analysis.
                </p>
              </div>
              <div>
                <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8">
                  <h3 className="text-2xl font-bold font-ubuntusansmono mb-4 text-[--prim-color]">
                    Quick Facts
                  </h3>
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
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
