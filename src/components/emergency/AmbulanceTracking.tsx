"use client";

import { useState, useEffect } from "react";
import { Ambulance, Navigation, Clock } from "lucide-react";

interface AmbulanceTrackingProps {
  trackingId: string;
}

export default function AmbulanceTracking({ trackingId }: AmbulanceTrackingProps) {
  const [status, setStatus] = useState("Dispatched");
  const [eta, setEta] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 1));
      if (eta <= 3) setStatus("Arriving Soon");
      if (eta === 1) setStatus("Arrived");
    }, 5000);

    return () => clearInterval(interval);
  }, [eta]);

  return (
    <div className="medical-card">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Ambulance Tracking
      </h2>
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <Ambulance className="h-12 w-12 text-medical-primary animate-pulse" />
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="text-xl font-bold text-gray-900">{status}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-600" />
            <div>
              <p className="text-xs text-gray-600">ETA</p>
              <p className="font-semibold text-gray-900">{eta} minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-gray-600" />
            <div>
              <p className="text-xs text-gray-600">Tracking ID</p>
              <p className="font-semibold text-gray-900 font-mono text-sm">
                {trackingId}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4 text-center">
        The ambulance crew will call you shortly
      </p>
    </div>
  );
}
