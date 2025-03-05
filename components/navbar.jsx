"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            SAAD<span className="text-black">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" onClick={closeMenu} />
            <NavLink href="/about" label="About" onClick={closeMenu} />
            <NavLink href="/education" label="Education" onClick={closeMenu} />
            <NavLink href="/contact" label="Contact" onClick={closeMenu} />
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4">
            <NavLink href="/" label="Home" onClick={closeMenu} mobile />
            <NavLink href="/about" label="About" onClick={closeMenu} mobile />
            <NavLink href="/education" label="Education" onClick={closeMenu} mobile />
            <NavLink href="/contact" label="Contact" onClick={closeMenu} mobile />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, onClick, mobile }) {
  return (
    <Link
      href={href}
      className={`font-medium transition-colors duration-200 hover:text-primary ${
        mobile ? "py-3 px-4 hover:bg-secondary-light" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
