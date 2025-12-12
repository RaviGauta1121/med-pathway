"use client";

import Link from "next/link";
import Image from "next/image";
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
  HeartPulse,
  Play,
  Quote,
  Award,
  Scissors,
  Bone,
  Microscope,
  Wind,
  Radiation,
  ArrowRight,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainServices = [
    {
      title: "Travel Consultations",
      description: "Latest travel health advice and preparation for safe journeys",
      icon: Plane,
      href: "/services/travel-consultations",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vaccinations",
      description: "Wide range of vaccines for travel and disease protection",
      icon: Syringe,
      href: "/services/vaccinations",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Medical Check-Ups",
      description: "Comprehensive health assessments before your travels",
      icon: ClipboardCheck,
      href: "/services/medical-checkups",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Emergency Medical Services",
      description: "24/7 emergency care available whenever you need it",
      icon: Ambulance,
      href: "/emergency",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Medical Tourism",
      description: "World-class medical care at affordable prices",
      icon: Globe,
      href: "/medical-tourism",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Health Solutions",
      description: "Personalized health plans for optimal wellness",
      icon: HeartPulse,
      href: "/services/health-solutions",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Online Consultation",
      description: "Connect with expert doctors via video call",
      icon: Video,
      href: "/consultation",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Health Information",
      description: "Comprehensive health resources and tips",
      icon: BookOpen,
      href: "/health-info",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      gradient: "from-orange-500 to-amber-500"
    },
  ];

  const specialties = [
    {
      title: "Cardiology",
      description: "Complex PTCA, TAVI studies, heart failure & ECMO support",
      icon: Heart,
      href: "/specialties/cardiology",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      gradient: "from-red-500 to-pink-500",
      services: [
        "Complex PTCA",
        "TAVI Studies",
        "Advanced IVUS, OCT, Rota",
        "Heart Failure & ECMO support",
        "Preventive Cardiology"
      ]
    },
    {
      title: "Neurosurgery",
      description: "Advanced brain and spine surgery with minimal invasive techniques",
      icon: Brain,
      href: "/specialties/neurosurgery",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-500 to-purple-500",
      services: [
        "Multimodal brain/spine injury care",
        "Minimal Invasive Spine Surgery",
        "Skull base surgery",
        "Brain/spine tumor management",
        "Neuro Navigation procedure"
      ]
    },
    {
      title: "Oncology",
      description: "Comprehensive cancer care including robotic surgeries",
      icon: Radiation,
      href: "/specialties/oncology",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      gradient: "from-pink-500 to-rose-500",
      services: [
        "Bone Marrow Transplant",
        "Daycare Chemotherapy",
        "Robotic GI Oncology Surgeries",
        "Gynecologic oncology",
        "HIPEC surgeries"
      ]
    },
    {
      title: "Robotic Surgery",
      description: "Da Vinci robotic surgery for precision procedures",
      icon: Scissors,
      href: "/specialties/robotic-surgery",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-indigo-500",
      services: [
        "Robotic Knee & Hip Replacement",
        "Robotic GI Surgeries",
        "Robotic Uro Surgeries",
        "Robotic Gynae Surgeries",
        "Robotic Cardiac Surgery"
      ]
    },
    {
      title: "Urology",
      description: "Precision uro surgery with advanced robotic techniques",
      icon: Activity,
      href: "/specialties/urology",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      gradient: "from-cyan-500 to-blue-500",
      services: [
        "Radical Prostatectomy",
        "Robotic Nephrectomy",
        "Robotic Pyeloplasty",
        "Robotic Adrenalectomy",
        "BMG Urethroplasty"
      ]
    },
    {
      title: "Gastrosciences",
      description: "Advanced endoscopic procedures and GI surgeries",
      icon: Microscope,
      href: "/specialties/gastrosciences",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500 to-green-500",
      services: [
        "ERCP - Diagnostic & Therapeutic",
        "Bariatric & Metabolic Surgery",
        "Complex Hernia Surgeries",
        "Endoscopic GI bleed management",
        "Third space Endoscopic procedures"
      ]
    },
    {
      title: "Orthopedics",
      description: "Robotic joint replacement and correction surgery",
      icon: Bone,
      href: "/specialties/orthopedics",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      gradient: "from-orange-500 to-amber-500",
      services: [
        "Fully Automated Robotic Knee Replacement",
        "Robotic Hip Replacement",
        "Robotic Correction Surgery",
        "Sports Medicine",
        "Trauma Management"
      ]
    },
    {
      title: "Pulmonology",
      description: "Sleep apnea interventions and bronchoscopy",
      icon: Wind,
      href: "/specialties/pulmonology",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600",
      gradient: "from-sky-500 to-blue-500",
      services: [
        "Sleep Apnea Interventions",
        "Interventional Bronchoscopy",
        "Pulmonary Rehab",
        "Critical Care",
        "Respiratory Support"
      ]
    },
    {
      title: "Gynecology",
      description: "Precision gynae surgery with robotic assistance",
      icon: HeartPulse,
      href: "/specialties/gynecology",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      gradient: "from-rose-500 to-pink-500",
      services: [
        "Robotic Myomectomy",
        "Robotic Hysterectomy",
        "Robotic Sacro colpopexy",
        "Endometriosis clearance",
        "Radical Hysterectomy"
      ]
    }
  ];

  const doctorVideos = [
    {
      id: 1,
      name: "DR. NITI RAIZADA",
      specialty: "PRINCIPAL DIRECTOR - MEDICAL ONCOLOGY & HEMATO - ONCOLOGY, FORTIS HOSPITAL, BANNERGHATTA ROAD. BENGALURU",
      videoSrc: "/images/doctor1.mp4",
      quote: "Dedicated to delivering compassionate and advanced cancer care for every patient."
    },
    {
      id: 2,
      name: "DR. SUDARSHAN G T",
      specialty: "ADDITIONAL DIRECTOR - CARDIO THORACIC VASCULAR SURGERY, FORTIS HOSPITAL, BANNERGHATTA ROAD, BENGALURU",
      videoSrc: "/images/doctor2.mp4",
      quote: "Committed to providing precision-driven heart and vascular surgery for safer, stronger recoveries."
    },
    {
      id: 3,
      name: "DR. MOHAN KESHAVAMURTHY",
      specialty: "PRINCIPAL DIRECTOR - RENAL SCIENCES, FORTIS HOSPITALS, BENGALURU",
      videoSrc: "/images/doctor3.mp4",
      quote: "Focused on delivering comprehensive kidney care to restore health and improve quality of life."
    }
  ];

  const stats = [
    { number: "500+", label: "Expert Doctors", icon: Users },
    { number: "50+", label: "Hospitals", icon: Activity },
    { number: "10K+", label: "Happy Patients", icon: Heart },
    { number: "24/7", label: "Support", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Animated Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            <Shield className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Trusted Healthcare Platform</span>
          </div>

          {/* Main Heading with Typewriter Effect */}
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Your Health, Our Priority
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Comprehensive multispecialty care under one roof with expert doctors, advanced treatments, and compassionate care
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 animate-pulse" />
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </div>

      {/* Main Services with Hover Animations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 animate-bounce-slow">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed to meet all your medical needs with cutting-edge technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-blue-200 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className={`${service.bgColor} p-5 rounded-2xl w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor} group-hover:animate-pulse`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 relative z-10">{service.description}</p>

                {/* Animated Arrow */}
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300 relative z-10">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties with Stagger Animation */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern - FIXED: Added closing div */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full mb-4 animate-pulse">
              <Stethoscope className="h-4 w-4" />
              <span className="text-sm font-semibold">Specialized Care</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert Medical Specialties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access world-class specialists for advanced medical treatments with robotic surgery and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Link
                key={specialty.title}
                href={specialty.href}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>

                <div className="relative p-8">
                  {/* Animated Icon */}
                  <div className={`${specialty.bgColor} p-5 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <specialty.icon className={`h-10 w-10 ${specialty.iconColor} group-hover:animate-pulse`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {specialty.description}
                  </p>

                  {/* Services List */}
                  <div className="space-y-2 mb-6">
                    {specialty.services.slice(0, 3).map((service, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 text-sm text-gray-600 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 flex-shrink-0 group-hover:animate-spin" style={{ animationDuration: '2s' }} />
                        <span className="line-clamp-1">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center text-blue-600 font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Explore Specialty</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Videos with Advanced Animations */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-blue-100 rounded-full -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-100 rounded-full -bottom-48 -right-48 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Stethoscope className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-semibold">Meet Our Experts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Doctors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our experienced specialists share their commitment to your healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctorVideos.map((doctor, index) => (
              <div
                key={doctor.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <video
                    key={doctor.videoSrc}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlayingVideo(doctor.id)}
                    onPause={() => setPlayingVideo(null)}
                  >
                    <source src={doctor.videoSrc} type="video/mp4" />
                  </video>

                  {playingVideo !== doctor.id && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center group-hover:bg-black/50 transition-all cursor-pointer"
                      onClick={(e) => {
                        const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                        if (video) {
                          video.play().catch(err => console.error("Play error:", err));
                        }
                      }}
                    >
                      <div className="relative">
                        {/* Pulsing Rings */}
                        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                        {/* Play Button */}
                        <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-8 transform group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                          <Play className="h-14 w-14 text-blue-600 fill-blue-600" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 group-hover:rotate-180 transition-transform duration-500" />
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {doctor.quote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-xs leading-relaxed">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/consultation"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Video className="h-6 w-6 group-hover:animate-pulse" />
              <span>Book a Consultation</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Award className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-semibold">Trusted Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Partners
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Building excellence together through innovation and collaboration
            </p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500">
              <Image
                src="/images/fortis.png"
                alt="Fortis Healthcare"
                width={250}
                height={90}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "15+", label: "Years Partnership", icon: TrendingUp },
              { number: "500+", label: "Expert Doctors", icon: Users },
              { number: "50+", label: "Hospital Locations", icon: Activity }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 group-hover:animate-bounce" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions with Hover Effects */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-lg animate-bounce-slow">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-gray-900">Special Offers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Healthcare Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our special packages designed for your wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: "Limited Time",
                badgeColor: "from-green-500 to-emerald-500",
                title: "First Consultation Free",
                description: "Get your first online consultation absolutely free with any specialist",
                icon: Video,
                link: "/consultation",
                linkText: "Claim Now"
              },
              {
                badge: "Always Available",
                badgeColor: "from-blue-500 to-cyan-500",
                title: "24/7 Emergency Support",
                description: "Round-the-clock emergency medical assistance whenever you need it",
                icon: Ambulance,
                link: "/emergency",
                linkText: "Get Help"
              },
              {
                badge: "New",
                badgeColor: "from-purple-500 to-pink-500",
                title: "Family Health Plans",
                description: "Special comprehensive packages designed for your entire family's health",
                icon: Users,
                link: "/services/health-solutions",
                linkText: "View Plans"
              }
            ].map((offer, index) => (
              <div 
                key={offer.title}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-blue-200 relative overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.badgeColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Badge */}
                <div className={`inline-block bg-gradient-to-r ${offer.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-lg`}>
                  {offer.badge}
                </div>

                {/* Icon */}
                <div className="bg-gray-50 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  <offer.icon className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 relative z-10">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{offer.description}</p>

                {/* CTA */}
                <Link 
                  href={offer.link} 
                  className="inline-flex items-center text-blue-600 font-bold hover:gap-3 transition-all duration-300 relative z-10"
                >
                  <span>{offer.linkText}</span>
                  <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Custom Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
}
