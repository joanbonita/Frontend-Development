"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--bg-color] border-t border-[--light-border]">
      {/* Main Footer */}
      <div className="px-[8%] lg:px-[16%] py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-ubuntusansmono text-[--prim-color] mb-4">
              Engineer Salma Pelesi
            </h3>
            <p className="text-[--text-light] text-sm leading-relaxed">
              inspired to inspire
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
                <Link
                  href="/UI-Components/Contact"
                  className="text-[--text-light] hover:text-[--prim-color] transition-colors"
                >
                  Contact
                </Link>
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
                href="https://linkedin.com/in/yourusername"
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
      <div className="border-t border-[--light-border] px-[8%] lg:px-[16%] py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[--text-light] text-sm">
            © {currentYear} Engineer Salma. All rights reserved.
          </p>
          <p className="text-[--text-light] text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-[--prim-color]" /> by Salma
          </p>
        </div>
      </div>
    </footer>
  );
}
