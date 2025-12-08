"use client";

import { Phone, Mic } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmergencyButton() {
  const router = useRouter();

  const handleEmergency = () => {
    router.push("/emergency");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleEmergency}
        className="emergency-btn flex items-center space-x-2"
        aria-label="Emergency Assistance"
      >
        <Phone className="h-6 w-6" />
        <span className="hidden sm:inline">Emergency</span>
      </button>
    </div>
  );
}
