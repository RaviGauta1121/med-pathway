"use client";

import { useState, useEffect } from "react";
import { MapPin, Loader } from "lucide-react";

interface LocationPickerProps {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
}

export default function LocationPicker({ onLocationSelect }: LocationPickerProps) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState("");

  const getCurrentLocation = () => {
    setLoading(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(loc);
        onLocationSelect(loc);
        setLoading(false);
      },
      (error) => {
        setError("Unable to retrieve location. Please enable location services.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-700">
        <MapPin className="inline h-4 w-4 mr-1" />
        Location *
      </label>
      <button
        type="button"
        onClick={getCurrentLocation}
        disabled={loading}
        className="w-full bg-medical-secondary text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader className="h-5 w-5 animate-spin" />
            Getting Location...
          </>
        ) : (
          <>
            <MapPin className="h-5 w-5" />
            Get Current Location
          </>
        )}
      </button>
      {location && (
        <p className="mt-2 text-sm text-green-600">
          ✓ Location captured: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
        </p>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
