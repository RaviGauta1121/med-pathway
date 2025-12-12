"use client";

import { useState } from "react";
import { MapPin, Loader, Check } from "lucide-react";

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
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={getCurrentLocation}
        disabled={loading || !!location}
        className={`w-full font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-[1.02] ${
          location
            ? "bg-green-500 text-white cursor-default"
            : loading
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
        }`}
      >
        {loading ? (
          <>
            <Loader className="h-5 w-5 animate-spin" />
            Getting Location...
          </>
        ) : location ? (
          <>
            <Check className="h-5 w-5" />
            Location Captured
          </>
        ) : (
          <>
            <MapPin className="h-5 w-5" />
            Get My Location
          </>
        )}
      </button>

      {location && (
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-3">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-900 mb-1">
                ✓ Location Successfully Captured
              </p>
              <p className="text-xs text-green-700 font-mono">
                {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
              </p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
          <p className="text-sm text-red-700 font-semibold">{error}</p>
        </div>
      )}
    </div>
  );
}
