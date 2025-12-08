"use client";

import { useState } from "react";
import { Phone, User, MapPin } from "lucide-react";
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
    <div className="medical-card">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Emergency Request Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <User className="inline h-4 w-4 mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="medical-input"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            <Phone className="inline h-4 w-4 mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="medical-input"
            placeholder="+91 XXXXXXXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Emergency Type *
          </label>
          <select
            required
            value={formData.emergencyType}
            onChange={(e) => setFormData({ ...formData, emergencyType: e.target.value })}
            className="medical-input"
          >
            <option value="">Select emergency type</option>
            {emergencyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="medical-input"
            rows={3}
            placeholder="Describe the emergency situation..."
          />
        </div>

        <LocationPicker
          onLocationSelect={(location) => setFormData({ ...formData, location })}
        />

        <button
          type="submit"
          className="w-full bg-emergency-critical text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Submit Emergency Request
        </button>
      </form>
    </div>
  );
}
