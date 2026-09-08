"use client";

import { useState, useEffect } from "react";
// Link not used in this component
import { Github, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import { fetchGitHubRepos, GitHubRepo } from "@/app/utils/github";

const projectPresentation: Record<string, { displayName: string; description: string }> = {
  "Robotics-and-AI": {
    displayName: "Robotics & AI",
    description:
      "A centralized hub containing autonomous systems, embedded control algorithms, computer vision models, and intelligent robotics applications.",
  },
  "Hardware-Engineering": {
    displayName: "Hardware Engineering",
    description:
      "A collection of hardware design assets, microcontroller firmwares, IoT system integrations, and circuit schematics.",
  },
  "Data-Science": {
    displayName: "Data Science",
    description:
      "Data pipelines, predictive modeling, statistical exploratory analyses, and machine learning implementations.",
  },
  "Frontend-Development": {
    displayName: "Frontend Development",
    description:
      "A repository showcasing modern web interfaces, responsive landing pages, UI components, and state management implementations.",
  },
  "AI-engineering-agent": {
    displayName: "AI Engineering Agent",
    description:
      "An autonomous AI Engineering Agent optimized to automate software workflows and execute code generation tasks.",
  },
  "Bonsai-Pricing-page": {
    displayName: "Bonsai Pricing Page",
    description:
      "A highly responsive, pixel-perfect pricing landing page clone showcasing clean semantic HTML structure and advanced CSS layouts.",
  },
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_USERNAME = "joanbonita"; // Change to your GitHub username

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGitHubRepos(GITHUB_USERNAME, 6);
        setRepos(
          data.map((repo) => ({
            ...repo,
            description: projectPresentation[repo.name]?.description || repo.description,
          }))
        );
      } catch (err) {
        setError("Failed to load GitHub projects");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    // always load repos for the configured username
    loadRepos();
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 px-[8%] lg:px-[16%]">
        <div className="text-center text-[--text-light]">Loading GitHub projects...</div>
      </section>
    );
  }

  if (error || repos.length === 0) {
    return null; // Don't show section if no repos
  }

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

  return (
    <section className="py-20 px-[8%] lg:px-[16%] bg-[--body-color]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-ubuntusansmono mb-4 text-[--prim-color]">
          <Github className="inline mr-3" size={40} />
          Latest GitHub Projects
        </h2>
        <p className="text-[--text-light] mb-12 text-lg">
          My most recent and starred repositories
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              className="group bg-[--bg-color] rounded-lg overflow-hidden border border-[--light-border] hover:border-[--prim-color] transition-all duration-300 hover:shadow-lg hover:shadow-[--prim-color]/20"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold font-ubuntusansmono text-white group-hover:text-[--prim-color] transition-colors truncate">
                    {projectPresentation[repo.name]?.displayName || repo.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[--text-light] text-sm mb-4 grow line-clamp-3">
                  {repo.description}
                </p>

                {/* Topics/Tags */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 bg-[--prim-color]/20 text-[--prim-color] rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Language & Stats */}
                <div className="flex items-center gap-4 py-3 border-t border-[--light-border]">
                  {repo.language && (
                    <span className="text-xs text-[--text-light] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[--prim-color]"></span>
                      {repo.language}
                    </span>
                  )}

                  {repo.stars > 0 && (
                    <span className="text-xs text-[--text-light] flex items-center gap-1">
                      <Star size={14} />
                      {repo.stars}
                    </span>
                  )}

                  {repo.forks > 0 && (
                    <span className="text-xs text-[--text-light] flex items-center gap-1">
                      <GitFork size={14} />
                      {repo.forks}
                    </span>
                  )}
                </div>

                {/* Link */}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[--prim-color] text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm w-full justify-center"
                >
                  <Github size={16} />
                  View Repository
                </a>
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
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[--prim-color] text-white rounded-lg font-medium hover:opacity-90 transition duration-300 inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
