"use client";

import { useState } from "react";
import EmergencyForm from "@/components/emergency/EmergencyForm";
import VoiceActivation from "@/components/emergency/VoiceActivation";
import HospitalRecommendations from "@/components/emergency/HospitalRecommendations";
import AmbulanceTracking from "@/components/emergency/AmbulanceTracking";
import { AlertCircle, Ambulance } from "lucide-react";

export default function EmergencyPage() {
  const [emergencySubmitted, setEmergencySubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);

  const handleEmergencySubmit = (data: any) => {
    const id = `EMG${Date.now()}`;
    setTrackingId(id);
    setEmergencySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-16 w-16 text-emergency-critical animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Emergency Assistance
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help you 24/7. Get immediate medical support.
          </p>
        </div>

        {!emergencySubmitted ? (
          <div className="grid md:grid-cols-2 gap-8">
            <EmergencyForm onSubmit={handleEmergencySubmit} />
            <VoiceActivation onEmergencyDetected={handleEmergencySubmit} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <Ambulance className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-green-900 mb-2">
                Emergency Request Received
              </h2>
              <p className="text-green-700">
                Tracking ID: <span className="font-mono font-bold">{trackingId}</span>
              </p>
            </div>
            <HospitalRecommendations />
            <AmbulanceTracking trackingId={trackingId!} />
          </div>
        )}
      </div>
    </div>
  );
}
