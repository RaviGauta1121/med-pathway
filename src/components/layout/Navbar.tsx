"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Medical Tourism", href: "/medical-tourism" },
    { name: "Consultation", href: "/consultation" },
    { name: "Health Info", href: "/health-info" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo - Larger and Better Proportions */}
          <Link href="/" className="flex items-center -ml-2 group relative py-2">
            <div className="relative w-32 h-14 sm:w-40 sm:h-14 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Med Pathway Logo"
                fill
                className="object-contain drop-shadow-sm"
                priority
                sizes="(max-width: 640px) 128px, 160px"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/5 rounded-lg blur-md transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Login Button */}
            <Link
              href="/login"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with Slide Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 border-t border-gray-200 shadow-inner">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all transform ${
                  isActive(link.href)
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-white hover:shadow-sm"
                }`}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "slideInLeft 0.3s ease-out" : "none",
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Login Button */}
            <Link
              href="/login"
              className="flex items-center justify-center space-x-2 text-blue-600 border-2 border-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-blue-50 mt-2"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
