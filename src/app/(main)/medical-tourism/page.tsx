"use client";

import { Plane, Hotel, Briefcase, Heart, Star, MapPin } from "lucide-react";
import Link from "next/link";

export default function MedicalTourismPage() {
  const packages = [
    {
      id: 1,
      title: "Cardiac Care Package",
      hospital: "Apollo Hospital, Delhi",
      duration: "7-10 days",
      price: "₹2,50,000",
      includes: ["Surgery", "Hospital Stay", "Airport Transfer", "Accommodation"],
      rating: 4.9,
      image: "🏥",
    },
    {
      id: 2,
      title: "Orthopedic Surgery Package",
      hospital: "Fortis Hospital, Mumbai",
      duration: "5-7 days",
      price: "₹1,80,000",
      includes: ["Surgery", "Physiotherapy", "Hotel Stay", "Local Transport"],
      rating: 4.8,
      image: "🦴",
    },
    {
      id: 3,
      title: "Cosmetic Surgery Package",
      hospital: "Max Hospital, Bangalore",
      duration: "3-5 days",
      price: "₹1,20,000",
      includes: ["Procedure", "Follow-up", "Luxury Stay", "Visa Assistance"],
      rating: 4.7,
      image: "✨",
    },
  ];

  const destinations = [
    { city: "Delhi", hospitals: 45, specialists: 200 },
    { city: "Mumbai", hospitals: 38, specialists: 180 },
    { city: "Bangalore", hospitals: 32, specialists: 150 },
    { city: "Chennai", hospitals: 28, specialists: 140 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Medical Tourism in India</h1>
          <p className="text-xl mb-8">
            World-class healthcare at affordable prices with complete travel support
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Plane className="h-6 w-6" />
              <span>Travel Assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <Hotel className="h-6 w-6" />
              <span>Accommodation</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              <span>Visa Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Top Medical Destinations
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div key={dest.city} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dest.city}</h3>
                <p className="text-gray-600">{dest.hospitals} Hospitals</p>
                <p className="text-gray-600">{dest.specialists} Specialists</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 text-center">
                  <div className="text-6xl mb-3">{pkg.image}</div>
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">{pkg.hospital}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2">Duration: {pkg.duration}</p>
                    <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2">Package Includes:</p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <Heart className="h-3 w-3 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/medical-tourism/packages/${pkg.id}`}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
