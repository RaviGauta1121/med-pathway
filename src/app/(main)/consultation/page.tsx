"use client";

import { useState } from "react";
import { Search, Filter, Star, Video, Calendar } from "lucide-react";
import Link from "next/link";

export default function ConsultationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("all");

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      consultationFee: "₹500",
      available: true,
      image: "👨‍⚕️",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: 4.8,
      consultationFee: "₹400",
      available: true,
      image: "👩‍⚕️",
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialty: "Orthopedic",
      experience: "12 years",
      rating: 4.7,
      consultationFee: "₹600",
      available: false,
      image: "👨‍⚕️",
    },
    {
      id: 4,
      name: "Dr. Sneha Reddy",
      specialty: "Pediatrician",
      experience: "8 years",
      rating: 4.9,
      consultationFee: "₹350",
      available: true,
      image: "👩‍⚕️",
    },
  ];

  const specialties = ["All", "Cardiologist", "Dermatologist", "Orthopedic", "Pediatrician", "General Physician"];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Online Consultation
          </h1>
          <p className="text-lg text-gray-600">
            Connect with expert doctors from the comfort of your home
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
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
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{doctor.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">{doctor.rating}</span>
                <span className="text-gray-600">(120+ reviews)</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Consultation Fee:</span>
                <span className="text-xl font-bold text-gray-900">{doctor.consultationFee}</span>
              </div>

              {doctor.available ? (
                <Link
                  href={`/consultation/booking/${doctor.id}`}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <Video className="h-5 w-5" />
                  Book Consultation
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold cursor-not-allowed"
                >
                  Not Available
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
