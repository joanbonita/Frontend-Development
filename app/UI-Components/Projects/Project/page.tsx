"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import GitHubProjects from "@/app/Components/GitHubProjects";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  details: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await import("../../../JsonData/projects.json");
        setProjects(data.default);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading projects...</p>
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntusansmono mb-4">
              My <span className="text-[--prim-color]">Projects</span>
            </h1>
            <p className="text-xl text-[--text-light]">
              A collection of projects showcasing my skills and experience
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[--bg-color] rounded-lg overflow-hidden border border-[--light-border] hover:border-[--prim-color] transition-all duration-300 hover:shadow-lg hover:shadow-[--prim-color]/20"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 bg-linear-to-br from-[--prim-color] to-[--body-color] flex items-center justify-center overflow-hidden">
                  <div className="text-white text-center opacity-50 group-hover:opacity-75 transition-opacity">
                    <div className="text-5xl font-bold">{project.title[0]}</div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-ubuntusansmono mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[--text-light] text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-[--text-light] text-xs mb-4">
                    {project.details}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-[--prim-color]/20 text-[--prim-color] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-[--light-border]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[--prim-color] hover:text-white transition-colors flex-1"
                    >
                      <Github size={18} />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[--prim-color] hover:text-white transition-colors flex-1"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 pt-20 border-t border-[--light-border]"
          >
            <GitHubProjects />
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
