import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-medical-primary" />
              <span className="text-xl font-bold">Med Pathway</span>
            </div>
            <p className="text-gray-400">
              Your trusted healthcare platform for emergency assistance and medical services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">24/7 Emergency</li>
              <li className="text-gray-400">Online Consultation</li>
              <li className="text-gray-400">Ambulance Booking</li>
              <li className="text-gray-400">Medical Records</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@medpathway.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Med Pathway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
