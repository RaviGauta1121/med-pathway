"use client";

import { useState } from "react";
import { Phone, User, MapPin, AlertTriangle, FileText } from "lucide-react";
import LocationPicker from "./LocationPicker";

interface EmergencyFormProps {
  onSubmit: (data: any) => void;
}

export default function EmergencyForm({ onSubmit }: EmergencyFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emergencyType: "",
    description: "",
    location: { lat: 0, lng: 0 },
  });

  const emergencyTypes = [
    "Heart Attack",
    "Stroke",
    "Accident",
    "Severe Bleeding",
    "Breathing Difficulty",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
          <User className="h-4 w-4 text-red-600" />
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
          <Phone className="h-4 w-4 text-red-600" />
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+91 XXXXXXXXXX"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
        />
      </div>

      {/* Emergency Type */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          Emergency Type <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={formData.emergencyType}
          onChange={(e) =>
            setFormData({ ...formData, emergencyType: e.target.value })
          }
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all appearance-none bg-white cursor-pointer"
        >
          <option value="">Select emergency type</option>
          {emergencyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
          <FileText className="h-4 w-4 text-red-600" />
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Describe the emergency situation..."
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all resize-none"
        />
      </div>

      {/* Location */}
      <div>
        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
          <MapPin className="h-4 w-4 text-red-600" />
          Location <span className="text-red-500">*</span>
        </label>
        <LocationPicker
          onLocationSelect={(location) =>
            setFormData({ ...formData, location })
          }
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
      >
        <AlertTriangle className="h-6 w-6" />
        Request Emergency Assistance
      </button>
    </form>
  );
}
