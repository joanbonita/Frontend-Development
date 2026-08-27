"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await import("../JsonData/projects.json");
        setProjects(data.default);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  if (isLoading) {
    return (
      <section className="py-20 px-[8%] lg:px-[16%]">
        <div className="text-center">Loading projects...</div>
      </section>
    );
  }

  return (
    <section className="py-20 px-[8%] lg:px-[16%]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-ubuntusansmono mb-4 text-[--prim-color]">
          Featured Projects
        </h2>
        <p className="text-[--text-light] mb-12 text-lg">
          Here are some of my recent work and personal projects
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-[--bg-color] rounded-lg overflow-hidden border border-[--light-border] hover:border-[--prim-color] transition-all duration-300 hover:shadow-lg hover:shadow-[--prim-color]/20"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 bg-linear-to-br from-[--prim-color] to-[--body-color] flex items-center justify-center overflow-hidden">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold opacity-50">{project.title[0]}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-ubuntusansmono mb-2">
                  {project.title}
                </h3>
                <p className="text-[--text-light] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
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
                    className="flex items-center gap-2 text-[--prim-color] hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[--prim-color] hover:text-white transition-colors ml-auto"
                  >
                    <span className="text-sm">Demo</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/UI-Components/Projects/Project"
            className="px-8 py-3 bg-[--prim-color] text-white rounded-lg font-medium hover:opacity-90 transition duration-300 inline-block"
          >
            View All Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
