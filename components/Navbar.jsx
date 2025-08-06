"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <div className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                n|u
              </div>
              <div className="hidden sm:flex flex-col text-white/90 text-xs whitespace-nowrap">
                <span className="font-medium">Student Chapter</span>
                <span>VIT Bhopal</span>
              </div>
              <div className="flex sm:hidden flex-col text-white/90 text-[10px] leading-tight whitespace-nowrap">
                <span className="font-medium">Student Chapter</span>
                <span>VIT Bhopal</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-white/80 transition-colors duration-300 ml-4"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
