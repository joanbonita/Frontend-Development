"use client";

import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Qualification {
  id: number;
  degree: string;
  institution: string;
  field: string;
  year: string;
  gpa?: string;
  description: string;
}

export default function Qualifications() {
  const qualifications: Qualification[] = [
    {
      id: 1,
      degree: "Bachelor of Science",
      institution: "Your University Name",
      field: "Electrical Engineering / Computer Science",
      year: "2020",
      gpa: "3.8/4.0",
      description: "Specialized in embedded systems and IoT. Completed capstone project on smart home automation system."
    },
    {
      id: 2,
      degree: "Diploma",
      institution: "Technical Institute Name",
      field: "Electronics & Telecommunications",
      year: "2018",
      description: "Foundation in circuit design, signal processing, and basic networking."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-10">
        <section className="px-[8%] lg:px-[16%] py-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntusansmono mb-4">
              <GraduationCap className="inline-block mr-4 text-[--prim-color]" size={48} />
              <span>My </span>
              <span className="text-[--prim-color]">Qualifications</span>
            </h1>
            <p className="text-xl text-[--text-light]">
              Educational background and academic achievements
            </p>
          </motion.div>

          {/* Qualifications Grid */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {qualifications.map((qual) => (
              <motion.div
                key={qual.id}
                variants={itemVariants}
                className="bg-[--bg-color] border border-[--light-border] rounded-lg p-8 hover:border-[--prim-color] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-ubuntusansmono text-[--prim-color] mb-2">
                      {qual.degree}
                    </h3>
                    <p className="text-lg font-semibold text-white mb-1">
                      {qual.institution}
                    </p>
                    <p className="text-[--text-light] mb-2">
                      {qual.field}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-4 py-2 bg-[--prim-color]/20 text-[--prim-color] rounded-lg font-medium">
                      {qual.year}
                    </span>
                    {qual.gpa && (
                      <p className="text-[--text-light] mt-2">GPA: {qual.gpa}</p>
                    )}
                  </div>
                </div>
                <p className="text-[--text-light] leading-relaxed">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Note removed per user request */}
        </section>
      </main>
      <Footer />
    </>
  );
}
