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
            { label: "View Profile", href: "/UI-Components/Profile" },
            { label: "Skills", href: "/UI-Components/Profile/Skills" },
            { label: "Education", href: "/UI-Components/Profile/Education" },
            { label: "Experience", href: "/UI-Components/Profile/Experience" },
            { label: "Certifications", href: "/UI-Components/Profile/Certifications" }
        ]
    },
    { label: "Projects", href: "/UI-Components/Projects/Project" },
];

export default function Navbar() {
    // Navbar fixed/dark mode state removed (not used)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [siteTitle, setSiteTitle] = useState('Engineer Salma Pelesi');
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetch('/api/settings')
            .then((response) => response.ok ? response.json() : null)
            .then((settings: { siteTitle?: string } | null) => {
                if (settings?.siteTitle) setSiteTitle(settings.siteTitle)
            })
            .catch(() => undefined)
    }, []);

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
            <div className="sticky top-0 isolate w-full transition-all duration-500" style={{ zIndex: 100 }}>
                {openDropdown && (
                    <div
                        className="fixed inset-0 z-[105]"
                        aria-hidden="true"
                        onClick={() => setOpenDropdown(null)}
                        style={{ zIndex: 105 }}
                    />
                )}
                <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-5">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold font-ubuntusansmono text-[--prim-color]"
                    >
                        {siteTitle}
                    </Link>

                    <div className="flex-1" />

                    {/* Desktop Nav */}
                    <nav ref={navRef} className="hidden lg:flex space-x-6 relative items-center">
                        {navLinks.map((link) => {
                            const dropdownItems = link.dropdown?.slice(1) ?? [];

                            return link.dropdown ? (
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

                                    <div
                                        className={`absolute left-0 top-full mt-1 z-[110] w-64 transition-all duration-150 ${
                                            openDropdown === link.label ? 'pointer-events-auto opacity-100 visible translate-y-0' : 'pointer-events-none opacity-0 invisible -translate-y-1'
                                        }`}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            boxShadow: 'none',
                                            padding: '0',
                                            zIndex: 110,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="block whitespace-nowrap px-0 py-3 text-left text-[1.05rem] font-medium transition-all"
                                            style={{
                                                background: 'linear-gradient(90deg, #ffffff 0%, #b7b1ff 45%, #4fe2ff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                margin: '0',
                                                display: 'inline-block',
                                                width: 'fit-content',
                                                borderBottom: '1px solid rgba(162, 148, 255, 0.8)',
                                                paddingRight: '1.5rem',
                                            }}
                                        >
                                            View Profile
                                        </Link>
                                        {dropdownItems.map((item, index) => {
                                            const isSpacedItem = item.label === 'Education' || item.label === 'Certifications';

                                            return (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="block whitespace-nowrap px-0 text-left text-[0.95rem] transition-all"
                                                    style={{
                                                        background: 'linear-gradient(90deg, #ffffff 0%, #b7b1ff 45%, #4fe2ff 100%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text',
                                                        margin: '0',
                                                        paddingTop: isSpacedItem ? '0.7rem' : '0.25rem',
                                                        paddingBottom: isSpacedItem ? '0.5rem' : '0.25rem',
                                                    }}
                                                >
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4 ml-6">
                        <Link href="/UI-Components/Contact">
                            <button
                                className="btn nav-btn text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
                            >
                                Hire Me
                            </button>
                        </Link>
                        <Link href="/UI-Components/Admin">
                            <button
                                className="btn nav-btn text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition text-sm"
                            >
                                Manage
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
