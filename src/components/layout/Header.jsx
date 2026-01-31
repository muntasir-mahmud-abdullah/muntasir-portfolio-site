"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MagneticButton from "components/ui/MagneticButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
      <nav className="container mx-auto px-4 max-w-5xl">
        <div className={`
            flex items-center justify-between px-6 py-3 rounded-full 
            border border-white/5
            ${scrolled ? "bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/5" : "bg-transparent"}
            transition-all duration-300
        `}>
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold font-heading text-white tracking-tight"
          >
            MM<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              >
                  <MagneticButton className="px-4 py-2 text-sm text-base-content/80 hover:text-white transition-colors relative group">
                      {item.name}
                      <span className="absolute inset-x-2 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </MagneticButton>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-base-200/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-base-content/80 hover:bg-white/5 hover:text-primary rounded-lg transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
