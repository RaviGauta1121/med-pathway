"use client";

import { useState } from "react";
import EmergencyForm from "@/components/emergency/EmergencyForm";
import VoiceActivation from "@/components/emergency/VoiceActivation";
import HospitalRecommendations from "@/components/emergency/HospitalRecommendations";
import AmbulanceTracking from "@/components/emergency/AmbulanceTracking";
import { AlertCircle, Ambulance, Phone, Clock, MapPin } from "lucide-react";

export default function EmergencyPage() {
  const [emergencySubmitted, setEmergencySubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);

  const handleEmergencySubmit = (data: any) => {
    const id = `EMG${Date.now()}`;
    setTrackingId(id);
    setEmergencySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Emergency Header Banner */}
      {/* <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl animate-pulse">
                <AlertCircle className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Emergency Assistance</h1>
                <p className="text-red-100 text-lg">
                  We're here to help you 24/7. Get immediate medical support.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-semibold">Call Now</p>
                <p className="text-xs text-red-100">+91-767-683-3165</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm font-semibold">24/7</p>
                <p className="text-xs text-red-100">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!emergencySubmitted ? (
          <>
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-red-500">
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Quick Response</h3>
                    <p className="text-sm text-gray-600">Average 5 min response time</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-orange-500">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <Ambulance className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Expert Care</h3>
                    <p className="text-sm text-gray-600">500+ medical professionals</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">GPS Tracking</h3>
                    <p className="text-sm text-gray-600">Real-time ambulance location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left: Emergency Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Emergency Request Form
                  </h2>
                </div>
                <EmergencyForm onSubmit={handleEmergencySubmit} />
              </div>

              {/* Right: Voice & Tips */}
              <div className="space-y-6">
                {/* Voice Activation */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-100">
                  <VoiceActivation onEmergencyDetected={handleEmergencySubmit} />
                </div>

                {/* Emergency Tips */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    Emergency Tips
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Stay Calm</p>
                        <p className="text-xs text-gray-600">Provide accurate information</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Enable Location</p>
                        <p className="text-xs text-gray-600">For faster response time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-purple-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Follow Instructions</p>
                        <p className="text-xs text-gray-600">Listen to dispatcher carefully</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Keep Contacts Ready</p>
                        <p className="text-xs text-gray-600">Have emergency numbers handy</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Success Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl p-8 mb-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-pulse">
                  <Ambulance className="h-16 w-16" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">
                    Emergency Request Received
                  </h2>
                  <p className="text-green-100 text-lg mb-4">
                    Help is on the way! Please stay calm and wait for assistance.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
                    <p className="text-sm text-green-100 mb-1">Your Tracking ID:</p>
                    <p className="text-3xl font-mono font-bold tracking-wider">
                      {trackingId}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking & Hospitals Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Ambulance Tracking */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Ambulance className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Live Ambulance Tracking
                  </h3>
                </div>
                <AmbulanceTracking trackingId={trackingId!} />
              </div>

              {/* Hospital Recommendations */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Nearby Hospitals
                  </h3>
                </div>
                <HospitalRecommendations />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
