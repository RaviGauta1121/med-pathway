"use client";

import Link from "next/link";
import { 
  Ambulance, 
  Plane, 
  Video, 
  BookOpen, 
  Phone,
  Activity,
  Brain,
  Heart,
  Sparkles,
  Star,
  Shield,
  Syringe,
  Stethoscope,
  ClipboardCheck,
  Globe,
  HeartPulse
} from "lucide-react";

export default function HomePage() {
  const mainServices = [
    {
      title: "Travel Consultations",
      description: "Latest travel health advice and preparation for safe journeys",
      icon: Plane,
      href: "/services/travel-consultations",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Vaccinations",
      description: "Wide range of vaccines for travel and disease protection",
      icon: Syringe,
      href: "/services/vaccinations",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Medical Check-Ups",
      description: "Comprehensive health assessments before your travels",
      icon: ClipboardCheck,
      href: "/services/medical-checkups",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Emergency Medical Services",
      description: "24/7 emergency care available whenever you need it",
      icon: Ambulance,
      href: "/emergency",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      title: "Medical Tourism",
      description: "World-class medical care at affordable prices",
      icon: Globe,
      href: "/medical-tourism",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      title: "Health Solutions",
      description: "Personalized health plans for optimal wellness",
      icon: HeartPulse,
      href: "/services/health-solutions",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      title: "Online Consultation",
      description: "Connect with expert doctors via video call",
      icon: Video,
      href: "/consultation",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Health Information",
      description: "Comprehensive health resources and tips",
      icon: BookOpen,
      href: "/health-info",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const specialties = [
    {
      title: "Urology",
      description: "Expert care for urinary tract and male reproductive health",
      icon: Activity,
      href: "/specialties/urology",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Neurology",
      description: "Advanced treatment for brain and nervous system disorders",
      icon: Brain,
      href: "/specialties/neurology",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Oncology",
      description: "Comprehensive cancer care and treatment",
      icon: Heart,
      href: "/specialties/oncology",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const stats = [
    { number: "500+", label: "Expert Doctors" },
    { number: "50+", label: "Hospitals" },
    { number: "10K+", label: "Happy Patients" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted Healthcare Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Emergency assistance, medical tourism, and expert consultations - all in one platform
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <select className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors">
              <option>Doctors</option>
              <option>Hospitals</option>
              <option>Consultation</option>
              <option>Specialties</option>
            </select>
            <input
              type="text"
              placeholder="Search for doctors, hospitals, or services..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
            />
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${service.bgColor} p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Specialized Care</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert Medical Specialties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access world-class specialists for advanced medical treatments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Link
                key={specialty.title}
                href={specialty.href}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`${specialty.bgColor} p-5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <specialty.icon className={`h-10 w-10 ${specialty.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {specialty.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>Expert Specialists</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>Advanced Technology</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>24/7 Care Available</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our exclusive healthcare packages and benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit mb-6">
                Limited Time
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">First Consultation Free</h3>
              <p className="text-gray-600 mb-6">Get your first online consultation absolutely free with any specialist</p>
              <Link href="/consultation" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                Claim Now <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit mb-6">
                Always Available
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">24/7 Emergency Support</h3>
              <p className="text-gray-600 mb-6">Round-the-clock emergency medical assistance whenever you need it</p>
              <Link href="/emergency" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                Get Help <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit mb-6">
                New
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Family Health Plans</h3>
              <p className="text-gray-600 mb-6">Special comprehensive packages designed for your entire family's health</p>
              <Link href="/services/health-solutions" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                View Plans <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
