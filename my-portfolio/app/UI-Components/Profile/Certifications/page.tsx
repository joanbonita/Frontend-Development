"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
}

export default function Certifications() {
  const defaultCertifications: Certification[] = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "CERT-123456",
      credentialUrl: "https://aws.amazon.com/certification",
      description: "Certification validating understanding of AWS cloud platforms, services, and best practices for cloud computing."
    },
    {
      id: 2,
      title: "React Advanced Developer Certificate",
      issuer: "Udemy",
      date: "2024",
      credentialId: "UC-REACT-2024",
      credentialUrl: "https://udemy.com",
      description: "Advanced React development including hooks, context API, performance optimization, and state management patterns."
    },
    {
      id: 3,
      title: "Arduino Programming Certified",
      issuer: "Arduino Official Certification",
      date: "2023",
      credentialId: "ARDUINO-2023",
      credentialUrl: "https://arduino.cc",
      description: "Proficiency in Arduino microcontroller programming, sensors, and IoT project development."
    },
    {
      id: 4,
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-DS-2024",
      description: "Data analysis, visualization, and machine learning using Python libraries like Pandas, NumPy, and Scikit-learn."
    }
  ];
  const [certifications, setCertifications] = useState<Certification[]>(defaultCertifications);

  useEffect(() => {
    fetch("/api/certifications")
      .then((response) => response.ok ? response.json() : [])
      .then((savedCertifications: Certification[]) => {
        setCertifications([...defaultCertifications, ...savedCertifications]);
      })
      .catch(() => setCertifications(defaultCertifications));
  }, []);

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
              <Award className="inline-block mr-4 text-[--prim-color]" size={48} />
              <span>My </span>
              <span className="text-[--prim-color]">Certifications</span>
            </h1>
            <p className="text-xl text-[--text-light]">
              Professional certifications and credentials
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-[--bg-color] border border-[--light-border] rounded-lg p-6 hover:border-[--prim-color] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-[--prim-color]/20">
                    <Award size={24} className="text-[--prim-color]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-ubuntusansmono text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[--prim-color] font-medium text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[--prim-color]/10 text-[--prim-color] text-xs rounded">
                      {cert.date}
                    </span>
                  </div>
                </div>

                <p className="text-[--text-light] text-sm mb-4">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <p className="text-xs text-[--text-light] mb-4">
                    <strong>ID:</strong> {cert.credentialId}
                  </p>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[--prim-color] hover:text-white transition-colors text-sm font-medium"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[--prim-color] mb-2">
                {certifications.length}+
              </div>
              <p className="text-[--text-light]">Active Certifications</p>
            </div>
            <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[--prim-color] mb-2">
                2024
              </div>
              <p className="text-[--text-light]">Latest Certifications</p>
            </div>
            <div className="bg-[--bg-color] border border-[--light-border] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[--prim-color] mb-2">
                100%
              </div>
              <p className="text-[--text-light]">Commitment to Learning</p>
            </div>
          </motion.div>

          {/* Note removed per user request */}
        </section>
      </main>
      <Footer />
    </>
  );
}
