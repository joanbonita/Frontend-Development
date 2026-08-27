"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type NavLink = {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/UI-Components/About" },
    { 
        label: "Profile", 
        href: "/UI-Components/Profile",
        dropdown: [
            { label: "Skills", href: "/UI-Components/Profile/Skills" },
            { label: "Education", href: "/UI-Components/Profile/Education" },
                { label: "Experience", href: "/UI-Components/Profile/Experience" },
            { label: "Certifications", href: "/UI-Components/Profile/Certifications" }
        ]
    },
    { label: "Projects", href: "/UI-Components/Projects/Project" },
    { label: "Contact", href: "/UI-Components/Contact" },
];

export default function Navbar() {
    // Navbar fixed/dark mode state removed (not used)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleDocClick(e: MouseEvent) {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener('click', handleDocClick);
        return () => document.removeEventListener('click', handleDocClick);
    }, []);

    return (
        <>
            <div className="relative z-50 w-full transition-all duration-500">
                <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-5">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold font-ubuntusansmono text-[--prim-color]"
                    >
                        Engineer
                        <span className="text-white"> Salma Pelesi</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav ref={navRef} className="hidden lg:flex space-x-6 relative">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.label} className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                                        className="flex items-center gap-1"
                                        aria-haspopup="menu"
                                        aria-expanded={openDropdown === link.label}
                                    >
                                        {link.label}
                                        <ChevronDown size={16} />
                                    </button>

                                    {/* Dropdown: visible when openDropdown matches */}
                                    <div
                                    
                                        className={`absolute left-0 top-full mt-2 transition-all duration-150 bg-[--body-color] shadow-none border-none rounded-lg w-52 z-50 py-1 ${
                                            openDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                                        }`}
                                    >
                                        <Link href={link.href} className="block whitespace-nowrap px-4 py-2 text-sm font-medium bg-transparent text-[--prim-color] hover:bg-[--prim-color] hover:text-white transition-all">
                                            <span style={{ background: 'linear-gradient(90deg, var(--prim-color), #ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                                View Profile
                                            </span>
                                        </Link>
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="block whitespace-nowrap px-4 py-2 rounded-md bg-transparent hover:bg-[--prim-color] hover:text-white transition-all text-sm"
                                            >
                                                <span style={{ background: 'linear-gradient(90deg, var(--prim-color), #ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                                    {item.label}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <Link href="/UI-Components/Admin">
                            <button
                                className="btn nav-btn text-white font-medium px-4 py-2 rounded-md
                hover:opacity-90 transition text-sm"
                            >
                                Manage
                            </button>
                        </Link>
                        <Link href="/UI-Components/Contact">
                            <button
                                className="btn nav-btn text-white font-medium px-4 py-2 rounded-md
                hover:opacity-90 transition"
                            >
                                Hire Me
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Nav */}
                    <nav className="flex lg:hidden flex-wrap items-center gap-x-4 gap-y-2 px-[8%] pb-4 text-sm">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                </div>
            </div>
        </>
    );
}
