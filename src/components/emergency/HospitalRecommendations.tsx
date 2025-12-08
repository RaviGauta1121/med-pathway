"use client";

import { Hospital, MapPin, Phone, Star } from "lucide-react";

export default function HospitalRecommendations() {
  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      distance: "2.3 km",
      rating: 4.8,
      specialty: "Emergency Care",
      phone: "+91 98765 43210",
      available: true,
    },
    {
      id: 2,
      name: "Apollo Medical Center",
      distance: "3.1 km",
      rating: 4.9,
      specialty: "Trauma Care",
      phone: "+91 98765 43211",
      available: true,
    },
    {
      id: 3,
      name: "Metro Heart Institute",
      distance: "4.5 km",
      rating: 4.7,
      specialty: "Cardiac Care",
      phone: "+91 98765 43212",
      available: false,
    },
  ];

  return (
    <div className="medical-card">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Nearby Hospitals
      </h2>
      <div className="space-y-4">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className={`border-2 rounded-lg p-4 ${
              hospital.available ? "border-green-200 bg-green-50" : "border-gray-200"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start gap-3">
                <Hospital className="h-6 w-6 text-medical-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {hospital.name}
                  </h3>
                  <p className="text-sm text-gray-600">{hospital.specialty}</p>
                </div>
              </div>
              {hospital.available && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Available
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{hospital.distance}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{hospital.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a href={`tel:${hospital.phone}`} className="text-medical-primary">
                  Call
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
