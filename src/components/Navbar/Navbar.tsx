"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll zamanı arxa fonu dəyişmək
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled ? "bg-black/90 shadow-md" : "bg-black/60"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">İlknur</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link href="#about" className="hover:text-violet-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-violet-400 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-violet-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-violet-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 px-6 py-6 space-y-4 text-center text-lg">
          <Link
            href="#about"
            className="block hover:text-violet-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="block hover:text-violet-400"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="block hover:text-violet-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block hover:text-violet-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
