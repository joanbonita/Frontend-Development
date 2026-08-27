"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitState("error");
    }
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
              Get in <span className="text-[--prim-color]">Touch</span>
            </h1>
            <p className="text-xl text-[--text-light]">
              Feel free to reach out to me for any inquiries or collaboration opportunities
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold font-ubuntusansmono mb-6 text-[--prim-color]">
                Contact Info
              </h2>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:joanjudithpelesi@gmail.com"
                  className="flex items-start gap-4 p-4 bg-[--bg-color] rounded-lg border border-[--light-border] hover:border-[--prim-color] transition-all group"
                >
                  <div className="p-3 rounded-full bg-[--prim-color]/20 group-hover:bg-[--prim-color] transition-all">
                    <Mail size={20} className="text-[--prim-color] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-[--text-light]">joanjudithpelesi@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+263783882118"
                  className="flex items-start gap-4 p-4 bg-[--bg-color] rounded-lg border border-[--light-border] hover:border-[--prim-color] transition-all group"
                >
                  <div className="p-3 rounded-full bg-[--prim-color]/20 group-hover:bg-[--prim-color] transition-all">
                    <Phone size={20} className="text-[--prim-color] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-[--text-light]">+263783882118</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/engineer-salma-pelesi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[--bg-color] rounded-lg border border-[--light-border] hover:border-[--prim-color] transition-all group"
                >
                  <div className="p-3 rounded-full bg-[--prim-color]/20 group-hover:bg-[--prim-color] transition-all">
                    <Linkedin size={20} className="text-[--prim-color] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-[--text-light]">Connect with me</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/joanbonita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[--bg-color] rounded-lg border border-[--light-border] hover:border-[--prim-color] transition-all group"
                >
                  <div className="p-3 rounded-full bg-[--prim-color]/20 group-hover:bg-[--prim-color] transition-all">
                    <Github size={20} className="text-[--prim-color] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-[--text-light]">View my code</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-bold font-ubuntusansmono mb-6 text-[--prim-color]">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[--bg-color] border border-[--light-border] rounded-lg focus:border-[--prim-color] focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-[--bg-color] border border-[--light-border] rounded-lg focus:border-[--prim-color] focus:outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[--bg-color] border border-[--light-border] rounded-lg focus:border-[--prim-color] focus:outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-[--bg-color] border border-[--light-border] rounded-lg focus:border-[--prim-color] focus:outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[--prim-color] text-white rounded-lg font-medium hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
                {submitState === "success" && (
                  <p className="text-green-400" role="status">Your message was sent successfully.</p>
                )}
                {submitState === "error" && (
                  <p className="text-red-400" role="alert">Your message could not be sent. Please try again.</p>
                )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
