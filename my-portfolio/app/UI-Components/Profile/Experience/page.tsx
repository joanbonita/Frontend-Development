"use client";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import experienceEntries from "@/app/JsonData/experience.json";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-[8%] py-20 lg:px-[16%]">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="mb-8 text-4xl font-bold font-ubuntusansmono">
            My <span className="text-[--prim-color]">Experience</span>
          </h1>
          <div className="space-y-6">
            {experienceEntries.map((entry) => (
              <article
                key={entry.id}
                className="rounded-lg border border-[--light-border] bg-[--bg-color] p-6 transition-all hover:border-[--prim-color]"
              >
                <h2 className="text-2xl font-bold font-ubuntusansmono text-[--prim-color]">
                  {entry.title}
                </h2>
                <p className="mt-1 text-lg font-semibold text-white">@ {entry.company}</p>
                <p className="mt-2 text-[--text-light]">{entry.duration}</p>
                <p className="mt-4 text-[--text-light]">{entry.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-[--prim-color]/20 px-3 py-1 text-sm text-[--prim-color]">
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
