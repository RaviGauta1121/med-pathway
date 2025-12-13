"use client";

import { useState } from "react";
import { Search, Filter, Star, Video, X, Award, Briefcase, GraduationCap, MapPin, Check, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ConsultationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Vivek Jawali",
      specialty: "Cardiothoracic Surgery",
      experience: "30+ years",
      rating: 4.9,
      consultationFee: "₹1500",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS, MCh (CTVS)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Cardiac Surgery", "Minimally Invasive Heart Surgery", "Valve Repair", "CABG"],
      about: "Dr. Vivek Jawali is a renowned Cardiothoracic and Vascular Surgeon with over 30 years of experience. He has performed more than 15,000 open heart surgeries and is known for his expertise in minimally invasive cardiac procedures.",
      achievements: [
        "Performed over 15,000 open heart surgeries",
        "Pioneer in minimally invasive cardiac surgery in India",
        "Recipient of multiple national awards in cardiac surgery"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MS (General Surgery) - Bangalore Medical College",
        "MCh (CTVS) - PGIMER, Chandigarh"
      ]
    },
    {
      id: 2,
      name: "Dr. Mohan Keshavmurthy",
      specialty: "Cardiology",
      experience: "25+ years",
      rating: 4.8,
      consultationFee: "₹1000",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MD, DM (Cardiology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Interventional Cardiology", "Angioplasty", "Heart Failure Management", "Pacemaker Implantation"],
      about: "Dr. Mohan Keshavmurthy is a highly experienced interventional cardiologist specializing in complex coronary interventions. He has expertise in managing acute cardiac emergencies and chronic heart conditions.",
      achievements: [
        "Over 5000 angioplasty procedures performed",
        "Expertise in complex coronary interventions",
        "Published multiple research papers in cardiology"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MD (Internal Medicine) - Bangalore Medical College",
        "DM (Cardiology) - PGIMER, Chandigarh"
      ]
    },
    {
      id: 3,
      name: "Dr. Vivek Belathur",
      specialty: "Cardiology",
      experience: "20+ years",
      rating: 4.8,
      consultationFee: "₹900",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MD, DM (Cardiology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Interventional Cardiology", "Primary Angioplasty", "Complex PCI", "Peripheral Vascular Interventions"],
      about: "Dr. Vivek Belathur is an interventional cardiologist with extensive experience in treating complex cardiac cases. He specializes in emergency cardiac procedures and advanced interventional techniques.",
      achievements: [
        "Expertise in primary angioplasty for acute heart attacks",
        "Skilled in complex coronary interventions",
        "Regular speaker at national cardiology conferences"
      ],
      education: [
        "MBBS - Kasturba Medical College",
        "MD (Internal Medicine) - Kasturba Medical College",
        "DM (Cardiology) - SCTIMST, Kerala"
      ]
    },
    {
      id: 4,
      name: "Dr. Manisha Singh",
      specialty: "Obstetrics & Gynecology",
      experience: "15+ years",
      rating: 4.9,
      consultationFee: "₹800",
      available: true,
      image: "👩‍⚕️",
      qualifications: "MS (OBG), DNB",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["High-Risk Pregnancy", "Laparoscopic Surgery", "Gynec Oncology", "Infertility Treatment"],
      about: "Dr. Manisha Singh is a skilled obstetrician and gynecologist with expertise in managing high-risk pregnancies and performing advanced laparoscopic procedures. She provides comprehensive women's healthcare services.",
      achievements: [
        "Successfully managed over 3000 deliveries",
        "Expert in minimally invasive gynecological procedures",
        "Special interest in adolescent gynecology"
      ],
      education: [
        "MBBS - Maulana Azad Medical College, Delhi",
        "MS (OBG) - AIIMS, New Delhi",
        "DNB (OBG) - National Board of Examinations"
      ]
    },
    {
      id: 5,
      name: "Dr. Sheela Chakravarthy",
      specialty: "Obstetrics & Gynecology",
      experience: "30+ years",
      rating: 4.9,
      consultationFee: "₹1000",
      available: true,
      image: "👩‍⚕️",
      qualifications: "MD, DGO",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Infertility Treatment", "Gynec Oncology", "Menopause Management", "High-Risk Pregnancy"],
      about: "Dr. Sheela Chakravarthy is a senior obstetrician and gynecologist with three decades of experience. She specializes in infertility management and gynecological cancer treatment.",
      achievements: [
        "Over 30 years of clinical experience",
        "Pioneer in infertility treatment in Bangalore",
        "Trained in gynec oncology from leading institutes"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MD (OBG) - Bangalore Medical College",
        "DGO - Bangalore Medical College"
      ]
    },
    {
      id: 6,
      name: "Dr. Vivek Anand Padegal",
      specialty: "Orthopedic Surgery",
      experience: "20+ years",
      rating: 4.8,
      consultationFee: "₹900",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (Ortho), DNB",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Joint Replacement", "Sports Medicine", "Arthroscopy", "Trauma Surgery"],
      about: "Dr. Vivek Anand Padegal is an experienced orthopedic surgeon specializing in joint replacement and sports injuries. He uses advanced techniques for faster recovery and better outcomes.",
      achievements: [
        "Over 2000 joint replacement surgeries",
        "Fellowship in sports medicine",
        "Expert in minimally invasive orthopedic procedures"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MS (Orthopedics) - Bangalore Medical College",
        "DNB (Orthopedics) - National Board"
      ]
    },
    {
      id: 7,
      name: "Dr. Narayan Hulse",
      specialty: "Orthopedic Surgery",
      experience: "25+ years",
      rating: 4.8,
      consultationFee: "₹1000",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (Ortho)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Spine Surgery", "Joint Replacement", "Arthroscopy", "Trauma Management"],
      about: "Dr. Narayan Hulse is a senior orthopedic surgeon with expertise in spine surgery and joint replacement. He has successfully treated numerous complex orthopedic cases.",
      achievements: [
        "25+ years in orthopedic surgery",
        "Specialized training in spine surgery",
        "Expertise in revision joint replacements"
      ],
      education: [
        "MBBS - Mysore Medical College",
        "MS (Orthopedics) - Mysore Medical College",
        "Fellowship in Spine Surgery"
      ]
    },
    {
      id: 8,
      name: "Dr. Rajpal Singh",
      specialty: "Orthopedic Surgery",
      experience: "18+ years",
      rating: 4.7,
      consultationFee: "₹850",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (Ortho), Fellowship",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Joint Replacement", "Arthroscopy", "Sports Injuries", "Fracture Management"],
      about: "Dr. Rajpal Singh is an orthopedic surgeon with special interest in joint replacement and arthroscopic procedures. He focuses on personalized treatment plans for each patient.",
      achievements: [
        "Fellowship in joint replacement surgery",
        "Expert in minimally invasive techniques",
        "Active member of orthopedic associations"
      ],
      education: [
        "MBBS - Armed Forces Medical College",
        "MS (Orthopedics) - Armed Forces Medical College",
        "Fellowship in Joint Replacement - Australia"
      ]
    },
    {
      id: 9,
      name: "Dr. Vivek (Ophthalmology)",
      specialty: "Ophthalmology",
      experience: "15+ years",
      rating: 4.8,
      consultationFee: "₹700",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (Ophth), DNB",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Cataract Surgery", "Retina Surgery", "Diabetic Retinopathy", "LASIK"],
      about: "Dr. Vivek is an ophthalmologist specializing in cataract and retina surgeries. He uses latest technology for precise and effective eye treatments.",
      achievements: [
        "Performed over 5000 cataract surgeries",
        "Expertise in diabetic eye disease management",
        "Trained in advanced vitreoretinal surgery"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MS (Ophthalmology) - Bangalore Medical College",
        "DNB (Ophthalmology) - National Board"
      ]
    },
    {
      id: 10,
      name: "Dr. Srinivas (Ophthalmology)",
      specialty: "Ophthalmology",
      experience: "20+ years",
      rating: 4.8,
      consultationFee: "₹750",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (Ophth)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Cornea Transplant", "Refractive Surgery", "Cataract Surgery", "Glaucoma Management"],
      about: "Dr. Srinivas is a senior ophthalmologist with expertise in cornea and refractive surgery. He has helped thousands of patients regain their vision through advanced surgical techniques.",
      achievements: [
        "20+ years of experience in ophthalmology",
        "Specialist in cornea transplantation",
        "Pioneer in bladeless LASIK surgery"
      ],
      education: [
        "MBBS - Mysore Medical College",
        "MS (Ophthalmology) - Mysore Medical College",
        "Fellowship in Cornea - USA"
      ]
    },
    {
      id: 11,
      name: "Dr. Manish Joshi",
      specialty: "Neurosurgery",
      experience: "20+ years",
      rating: 4.9,
      consultationFee: "₹1200",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MCh (Neurosurgery)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Brain Surgery", "Spine Surgery", "Neuro-oncology", "Skull Base Surgery"],
      about: "Dr. Manish Joshi is a highly skilled neurosurgeon with expertise in complex brain and spine surgeries. He uses advanced techniques for treating neurological disorders.",
      achievements: [
        "Over 3000 neurosurgical procedures",
        "Expert in minimally invasive spine surgery",
        "Published research in leading neurosurgery journals"
      ],
      education: [
        "MBBS - Grant Medical College, Mumbai",
        "MS (General Surgery) - Grant Medical College",
        "MCh (Neurosurgery) - NIMHANS, Bangalore"
      ]
    },
    {
      id: 12,
      name: "Dr. Aashish Parekh",
      specialty: "Neurosurgery",
      experience: "15+ years",
      rating: 4.8,
      consultationFee: "₹1000",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MCh (Neurosurgery)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Minimally Invasive Spine Surgery", "Brain Tumor Surgery", "Endoscopic Neurosurgery", "Pediatric Neurosurgery"],
      about: "Dr. Aashish Parekh specializes in minimally invasive neurosurgical procedures. He focuses on treating complex brain and spine conditions with minimal scarring and faster recovery.",
      achievements: [
        "Fellowship in minimally invasive spine surgery",
        "Expert in endoscopic brain surgery",
        "Active researcher in neurosurgical innovations"
      ],
      education: [
        "MBBS - BJ Medical College, Pune",
        "MS (General Surgery) - BJ Medical College",
        "MCh (Neurosurgery) - NIMHANS, Bangalore"
      ]
    },
    {
      id: 13,
      name: "Dr. Shivanand S Patil",
      specialty: "Urology",
      experience: "18+ years",
      rating: 4.8,
      consultationFee: "₹900",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MCh (Urology), DNB",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Laparoscopic Urology", "Kidney Stone Treatment", "Prostate Surgery", "Uro-oncology"],
      about: "Dr. Shivanand S Patil is a urologist specializing in minimally invasive urological procedures. He has expertise in treating kidney stones, prostate problems, and urological cancers.",
      achievements: [
        "Expert in laser kidney stone surgery",
        "Performed over 2000 laparoscopic procedures",
        "Fellowship in uro-oncology"
      ],
      education: [
        "MBBS - KIMS, Hubli",
        "MS (General Surgery) - KIMS, Hubli",
        "MCh (Urology) - JIPMER, Puducherry"
      ]
    },
    {
      id: 14,
      name: "Dr. Srinivasa P Munigoti",
      specialty: "Urology",
      experience: "20+ years",
      rating: 4.7,
      consultationFee: "₹850",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MCh (Urology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Endourology", "Prostate Surgery", "Male Infertility", "Reconstructive Urology"],
      about: "Dr. Srinivasa P Munigoti is an experienced urologist with expertise in endourology and prostate treatments. He provides comprehensive care for urological disorders.",
      achievements: [
        "20+ years in urology practice",
        "Expert in TURP procedures",
        "Specialized in male infertility treatment"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MS (General Surgery) - Bangalore Medical College",
        "MCh (Urology) - Kasturba Medical College"
      ]
    },
    {
      id: 15,
      name: "Dr. Priyadarshan K",
      specialty: "Gastroenterology",
      experience: "15+ years",
      rating: 4.8,
      consultationFee: "₹900",
      available: true,
      image: "👨‍⚕️",
      qualifications: "DM (Gastro)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Therapeutic Endoscopy", "Liver Diseases", "IBD Management", "Pancreatic Disorders"],
      about: "Dr. Priyadarshan K is a gastroenterologist specializing in advanced endoscopic procedures and liver diseases. He provides comprehensive digestive health care.",
      achievements: [
        "Expert in ERCP procedures",
        "Specialized in liver disease management",
        "Published research in gastroenterology"
      ],
      education: [
        "MBBS - Kasturba Medical College",
        "MD (Internal Medicine) - Kasturba Medical College",
        "DM (Gastroenterology) - CMC, Vellore"
      ]
    },
    {
      id: 16,
      name: "Dr. Harish",
      specialty: "Gastroenterology",
      experience: "18+ years",
      rating: 4.8,
      consultationFee: "₹950",
      available: true,
      image: "👨‍⚕️",
      qualifications: "DM (Gastro)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["IBD Treatment", "Therapeutic Endoscopy", "Hepatology", "Pancreatic Diseases"],
      about: "Dr. Harish is a gastroenterologist with expertise in inflammatory bowel disease and therapeutic endoscopy. He uses advanced techniques for diagnosis and treatment of digestive disorders.",
      achievements: [
        "Expert in managing complex IBD cases",
        "Skilled in advanced endoscopic procedures",
        "Regular faculty at gastroenterology workshops"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MD (Internal Medicine) - Bangalore Medical College",
        "DM (Gastroenterology) - PGIMER, Chandigarh"
      ]
    },
    {
      id: 17,
      name: "Dr. Shashidhar",
      specialty: "Nephrology",
      experience: "20+ years",
      rating: 4.8,
      consultationFee: "₹900",
      available: true,
      image: "👨‍⚕️",
      qualifications: "DM (Nephrology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Kidney Transplant", "Dialysis", "Chronic Kidney Disease", "Hypertension Management"],
      about: "Dr. Shashidhar is a nephrologist with extensive experience in kidney transplantation and dialysis. He provides comprehensive care for kidney diseases and related disorders.",
      achievements: [
        "Over 500 kidney transplants performed",
        "Expert in managing complex kidney disorders",
        "Pioneer in ABO incompatible transplants"
      ],
      education: [
        "MBBS - Mysore Medical College",
        "MD (Internal Medicine) - Mysore Medical College",
        "DM (Nephrology) - PGIMER, Chandigarh"
      ]
    },
    {
      id: 18,
      name: "Dr. V Sreekanth Reddy",
      specialty: "Nephrology",
      experience: "15+ years",
      rating: 4.7,
      consultationFee: "₹850",
      available: true,
      image: "👨‍⚕️",
      qualifications: "DM (Nephrology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Chronic Kidney Disease", "Dialysis", "Kidney Transplant", "Glomerular Diseases"],
      about: "Dr. V Sreekanth Reddy is a nephrologist specializing in chronic kidney disease management and dialysis. He focuses on preventing kidney disease progression and improving patient quality of life.",
      achievements: [
        "Expert in CKD management",
        "Skilled in all forms of dialysis",
        "Active in kidney disease awareness programs"
      ],
      education: [
        "MBBS - Osmania Medical College",
        "MD (Internal Medicine) - Osmania Medical College",
        "DM (Nephrology) - NIMS, Hyderabad"
      ]
    },
    {
      id: 19,
      name: "Dr. Chandran Gnanamuthu",
      specialty: "General Surgery",
      experience: "25+ years",
      rating: 4.8,
      consultationFee: "₹800",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (General Surgery)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Laparoscopic Surgery", "GI Surgery", "Hernia Repair", "Thyroid Surgery"],
      about: "Dr. Chandran Gnanamuthu is a senior general surgeon with expertise in laparoscopic and gastrointestinal surgeries. He has successfully performed thousands of surgical procedures.",
      achievements: [
        "25+ years of surgical experience",
        "Expert in minimally invasive surgery",
        "Pioneer in laparoscopic hernia repair"
      ],
      education: [
        "MBBS - Madras Medical College",
        "MS (General Surgery) - Madras Medical College",
        "Fellowship in Laparoscopic Surgery"
      ]
    },
    {
      id: 20,
      name: "Dr. Suresh Babu M C",
      specialty: "General Surgery",
      experience: "20+ years",
      rating: 4.7,
      consultationFee: "₹750",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MS (General Surgery)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["GI Surgery", "Hernia Surgery", "Trauma Surgery", "Breast Surgery"],
      about: "Dr. Suresh Babu M C is a general surgeon with comprehensive expertise in various surgical procedures. He focuses on patient safety and optimal surgical outcomes.",
      achievements: [
        "20+ years in general surgery",
        "Expert in emergency trauma surgery",
        "Skilled in breast cancer surgery"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MS (General Surgery) - Bangalore Medical College",
        "Fellowship in GI Surgery"
      ]
    },
    {
      id: 21,
      name: "Dr. Nagabhushan",
      specialty: "Pulmonology",
      experience: "15+ years",
      rating: 4.8,
      consultationFee: "₹800",
      available: true,
      image: "👨‍⚕️",
      qualifications: "DM (Pulmonology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Asthma Management", "COPD Treatment", "Sleep Disorders", "Interventional Pulmonology"],
      about: "Dr. Nagabhushan is a pulmonologist specializing in respiratory disorders and sleep medicine. He uses advanced diagnostic and therapeutic techniques for lung diseases.",
      achievements: [
        "Expert in bronchoscopy procedures",
        "Specialized in sleep apnea treatment",
        "Active in asthma awareness programs"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MD (Internal Medicine) - Bangalore Medical College",
        "DM (Pulmonology) - PGIMER, Chandigarh"
      ]
    },
    {
      id: 22,
      name: "Dr. Madhusudan",
      specialty: "Oncology",
      experience: "18+ years",
      rating: 4.9,
      consultationFee: "₹1000",
      available: true,
      image: "👨‍⚕️",
      qualifications: "DM (Oncology)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Medical Oncology", "Chemotherapy", "Targeted Therapy", "Immunotherapy"],
      about: "Dr. Madhusudan is a medical oncologist with expertise in treating various types of cancers. He provides personalized cancer treatment plans using latest therapies.",
      achievements: [
        "18+ years in medical oncology",
        "Expert in targeted cancer therapies",
        "Published research in oncology journals"
      ],
      education: [
        "MBBS - Mysore Medical College",
        "MD (Internal Medicine) - Mysore Medical College",
        "DM (Medical Oncology) - TMC, Mumbai"
      ]
    },
    {
      id: 23,
      name: "Dr. Sreedhara Murthy",
      specialty: "Pediatrics",
      experience: "20+ years",
      rating: 4.8,
      consultationFee: "₹700",
      available: true,
      image: "👨‍⚕️",
      qualifications: "MD (Pediatrics)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["Neonatology", "Child Development", "Pediatric Infections", "Vaccination"],
      about: "Dr. Sreedhara Murthy is a pediatrician with expertise in newborn care and child development. He provides comprehensive healthcare for children from birth to adolescence.",
      achievements: [
        "20+ years in pediatric practice",
        "Expert in neonatal intensive care",
        "Active in child nutrition programs"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MD (Pediatrics) - Bangalore Medical College",
        "Fellowship in Neonatology"
      ]
    },
    {
      id: 24,
      name: "Dr. Anu Sridhar",
      specialty: "Pediatrics",
      experience: "12+ years",
      rating: 4.7,
      consultationFee: "₹650",
      available: true,
      image: "👩‍⚕️",
      qualifications: "MD (Pediatrics)",
      hospital: "Fortis Hospitals, Bangalore",
      expertise: ["General Pediatrics", "Vaccination", "Growth Monitoring", "Preventive Care"],
      about: "Dr. Anu Sridhar is a pediatrician dedicated to providing quality healthcare for children. She focuses on preventive care and healthy child development.",
      achievements: [
        "12+ years in pediatric care",
        "Expert in childhood vaccination",
        "Active in school health programs"
      ],
      education: [
        "MBBS - Bangalore Medical College",
        "MD (Pediatrics) - St. John's Medical College",
        "Certificate in Child Development"
      ]
    }
  ];

  const specialties = [
    "All",
    "Cardiology",
    "Cardiothoracic Surgery",
    "Obstetrics & Gynecology",
    "Orthopedic Surgery",
    "Ophthalmology",
    "Neurosurgery",
    "Urology",
    "Gastroenterology",
    "Nephrology",
    "General Surgery",
    "Pulmonology",
    "Oncology",
    "Pediatrics"
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty =
      specialty === "all" || doctor.specialty.toLowerCase() === specialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Medical Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with India's leading specialists from Fortis Hospitals for personalized care
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">{filteredDoctors.length} doctors available</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">Online consultations</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by doctor name, specialty, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all appearance-none cursor-pointer bg-white"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec.toLowerCase()}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-6xl bg-white rounded-full p-3 shadow-sm">
                    {doctor.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 truncate">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full inline-block">
                      {doctor.qualifications}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-900">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="bg-yellow-50 p-2 rounded-lg">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="font-semibold text-gray-900">{doctor.rating}/5.0</p>
                    </div>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Key Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.slice(0, 2).map((exp, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-full font-medium border border-blue-100"
                      >
                        {exp}
                      </span>
                    ))}
                    {doctor.expertise.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
                        +{doctor.expertise.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Profile Button */}
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="w-full mb-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm font-semibold py-3 px-4 flex items-center justify-center gap-2 rounded-lg transition-all duration-300 border-2 border-blue-100 hover:border-blue-200"
                >
                  <span>View Complete Profile</span>
                </button>

                {/* Consultation Fee */}
                <div className="flex items-center justify-between mb-3 pt-3 border-t-2 border-dashed border-gray-200">
                  <span className="text-sm text-gray-600 font-medium">Consultation Fee</span>
                  <span className="text-2xl font-bold text-green-600">
                    {doctor.consultationFee}
                  </span>
                </div>

                {/* Book Button */}
                {doctor.available ? (
                  <Link
                    href={`/consultation/booking/${doctor.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <Video className="h-5 w-5" />
                    <span>Book Consultation</span>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-200 text-gray-500 py-3.5 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Currently Unavailable
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSpecialty("all");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-start gap-6">
                <div className="text-8xl bg-white rounded-full p-4 shadow-lg">
                  {selectedDoctor.image}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{selectedDoctor.name}</h2>
                  <p className="text-blue-100 text-lg font-semibold mb-2">
                    {selectedDoctor.specialty}
                  </p>
                  <p className="text-sm bg-white/20 px-3 py-1 rounded-full inline-block">
                    {selectedDoctor.qualifications}
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span>{selectedDoctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                      <span>{selectedDoctor.rating}/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6 space-y-6">
              {/* About Section */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-5 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    About Doctor
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedDoctor.about}</p>
              </div>

              {/* Expertise Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-10 bg-green-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Areas of Expertise
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedDoctor.expertise.map((exp: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border border-green-100"
                    >
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-10 bg-amber-600 rounded-full"></div>
                  <Award className="h-5 w-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Key Achievements
                  </h3>
                </div>
                <div className="space-y-3">
                  {selectedDoctor.achievements.map((achievement: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-amber-50 p-3 rounded-lg border border-amber-100"
                    >
                      <span className="text-amber-600 text-xl font-bold flex-shrink-0">★</span>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-10 bg-purple-600 rounded-full"></div>
                  <GraduationCap className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Education & Qualifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {selectedDoctor.education.map((edu: string, idx: number) => (
                    <div
                      key={idx}
                      className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-600"
                    >
                      <p className="text-gray-700 font-medium">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hospital Section */}
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
                      Practicing At
                    </p>
                    <p className="text-lg font-bold text-gray-900">{selectedDoctor.hospital}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                {/* <div>
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                  <p className="text-3xl font-bold text-green-600">
                    {selectedDoctor.consultationFee}
                  </p>
                </div> */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    Close
                  </button>
                  <Link
                    href={`/consultation/booking/${selectedDoctor.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg"
                  >
                    <Video className="h-5 w-5" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
