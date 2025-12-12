import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="MedPathway Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted travel clinic in Bengaluru, making medical journeys smooth and stress-free.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>Open 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-gray-400 hover:text-white transition">
                  Emergency
                </Link>
              </li>
              <li>
                <Link href="/medical-tourism" className="text-gray-400 hover:text-white transition">
                  Medical Tourism
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-gray-400 hover:text-white transition">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/health-info" className="text-gray-400 hover:text-white transition">
                  Health Info
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Travel Consultations</li>
              <li className="text-gray-400">Vaccinations</li>
              <li className="text-gray-400">Medical Check-Ups</li>
              <li className="text-gray-400">Emergency Medical Services</li>
              <li className="text-gray-400">Medical Tourism</li>
              <li className="text-gray-400">Health Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+917676833165" className="hover:text-white transition">
                  +91-767-683-3165
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:medpathway01@gmail.com" className="hover:text-white transition break-all">
                  medpathway01@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <p className="font-semibold text-white mb-1">Opening Hours</p>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedPathway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
