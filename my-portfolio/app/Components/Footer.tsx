"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart, X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [siteSettings, setSiteSettings] = useState({ siteTitle: "Engineer Salma Pelesi", tagline: "inspired to inspire" });

  useEffect(() => {
    fetch("/api/settings")
      .then((response) => response.ok ? response.json() : null)
      .then((settings: { siteTitle?: string; tagline?: string } | null) => {
        if (settings) setSiteSettings((current) => ({ ...current, ...settings }));
      })
      .catch(() => undefined);
  }, []);

  return (
    <footer className="bg-[--bg-color]">
      {/* Main Footer */}
      <div className="px-[8%] lg:px-[16%] py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-ubuntusansmono text-[--prim-color] mb-4">
              {siteSettings.siteTitle}
            </h3>
            <p className="text-[--text-light] text-sm leading-relaxed">
              {siteSettings.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-ubuntusansmono mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[--text-light] hover:text-[--prim-color] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/UI-Components/Projects/Project"
                  className="text-[--text-light] hover:text-[--prim-color] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/UI-Components/About"
                  className="text-[--text-light] hover:text-[--prim-color] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setShowContactDetails(true)}
                  className="text-[--text-light] hover:text-[--prim-color] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold font-ubuntusansmono mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[--prim-color]/20 text-[--prim-color] hover:bg-[--prim-color] hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/engineer-salma-pelesi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[--prim-color]/20 text-[--prim-color] hover:bg-[--prim-color] hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-full bg-[--prim-color]/20 text-[--prim-color] hover:bg-[--prim-color] hover:text-white transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-[8%] lg:px-[16%] py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[--text-light] text-sm">
            © {currentYear} Engineer Salma. All rights reserved.
          </p>
          <p className="text-[--text-light] text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-[--prim-color]" /> by Salma
          </p>
        </div>
      </div>

      {showContactDetails && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          role="presentation"
          onClick={() => setShowContactDetails(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-details-title"
            className="w-full max-w-lg rounded-lg border border-[--light-border] bg-[--bg-color] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 id="contact-details-title" className="text-xl font-bold font-ubuntusansmono text-[--prim-color]">
                Contact Details
              </h2>
              <button
                type="button"
                aria-label="Close contact details"
                onClick={() => setShowContactDetails(false)}
                className="rounded-md p-1 text-[--text-light] transition-colors hover:text-[--prim-color]"
              >
                <X size={20} />
              </button>
            </div>

            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="border-b border-[--light-border]">
                  <th className="py-3 pr-4 font-medium text-[--text-light]">Email</th>
                  <td className="whitespace-nowrap py-3 text-sm">
                    <a className="hover:text-[--prim-color]" href="mailto:joanjudithpelesi@gmail.com">
                      joanjudithpelesi@gmail.com
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-[--light-border]">
                  <th className="py-3 pr-4 font-medium text-[--text-light]">Phone</th>
                  <td className="py-3">
                    <a className="hover:text-[--prim-color]" href="tel:+263783882118">
                      +263783882118
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-[--light-border]">
                  <th className="py-3 pr-4 font-medium text-[--text-light]">LinkedIn</th>
                  <td className="py-3">
                    <a className="hover:text-[--prim-color]" href="https://www.linkedin.com/in/engineer-salma-pelesi" target="_blank" rel="noopener noreferrer">
                      Engineer Salma Pelesi
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 font-medium text-[--text-light]">GitHub</th>
                  <td className="py-3">
                    <a className="hover:text-[--prim-color]" href="https://github.com/joanbonita" target="_blank" rel="noopener noreferrer">
                      joanbonita
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </footer>
  );
}
