"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Heart, User, ChevronDown } from "lucide-react";

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
    { name: "Emergency", href: "/emergency" },
    { name: "Medical Tourism", href: "/medical-tourism" },
    { name: "Consultation", href: "/consultation" },
    { name: "Health Info", href: "/health-info" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm shadow-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Heart className="h-8 w-8 text-blue-600 fill-blue-600 transition-transform group-hover:scale-110" />
              <div className="absolute -inset-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                Med Pathway
              </span>
              <span className="text-[10px] text-gray-500 -mt-1 hidden sm:block">
                Your Health Partner
              </span>
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
            {/* Emergency Button with Pulse */}
            <Link
              href="/emergency"
              className="relative flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105 group"
            >
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="font-semibold">Emergency</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </Link>

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

            {/* Mobile Emergency Button */}
            <Link
              href="/emergency"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md mt-3"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span>Emergency</span>
            </Link>

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
