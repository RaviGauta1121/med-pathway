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
  Zap,
  Bone,
  Eye,
  Microscope,
  Pill,
  Wind,
  Radiation
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

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
    specialty:
      "PRINCIPAL DIRECTOR - MEDICAL ONCOLOGY & HEMATO - ONCOLOGY, FORTIS HOSPITAL, BANNERGHATTA ROAD. BENGALURU",
    videoSrc: "/images/doctor1.mp4",
    quote:
      "Dedicated to delivering compassionate and advanced cancer care for every patient."
  },
  {
    id: 2,
    name: "DR. SUDARSHAN G T",
    specialty:
      "ADDITIONAL DIRECTOR - CARDIO THORACIC VASCULAR SURGERY, FORTIS HOSPITAL, BANNERGHATTA ROAD, BENGALURU",
    videoSrc: "/images/doctor2.mp4",
    quote:
      "Committed to providing precision-driven heart and vascular surgery for safer, stronger recoveries."
  },
  {
    id: 3,
    name: "DR. MOHAN KESHAVAMURTHY",
    specialty:
      "PRINCIPAL DIRECTOR - RENAL SCIENCES, FORTIS HOSPITALS, BENGALURU",
    videoSrc: "/images/doctor3.mp4",
    quote:
      "Focused on delivering comprehensive kidney care to restore health and improve quality of life."
  }
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
            Comprehensive multispecialty care under one roof with expert doctors, advanced treatments, and compassionate care
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
              Access world-class specialists for advanced medical treatments with robotic surgery and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Link
                key={specialty.title}
                href={specialty.href}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative p-6">
                  <div className={`${specialty.bgColor} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <specialty.icon className={`h-8 w-8 ${specialty.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {specialty.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {specialty.services.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                        <span className="line-clamp-1">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Stethoscope className="h-4 w-4" />
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
            {doctorVideos.map((doctor) => (
              <div
                key={doctor.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
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
                    Your browser does not support the video tag.
                  </video>

                  {playingVideo !== doctor.id && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center group-hover:bg-black/40 transition-all cursor-pointer"
                      onClick={(e) => {
                        const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                        if (video) {
                          video.play().catch(err => console.error("Play error:", err));
                        }
                      }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 transform group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="h-12 w-12 text-blue-600 fill-blue-600" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Quote className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {doctor.quote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Video className="h-5 w-5" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-10 bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-2">
              <Award className="h-3 w-3" />
              <span className="text-xs font-semibold">Trusted Network</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Our Partners
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm">
              Our partners trust us for innovative solutions, reliable services, and long-term collaboration.
            </p>
          </div>

          <div className="flex items-center justify-center mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Image
                src="/images/fortis.png"
                alt="Fortis Healthcare"
                width={200}
                height={70}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-blue-100 text-sm">Years Partnership</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-blue-100 text-sm">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-blue-100 text-sm">Hospital Locations</div>
            </div>
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
