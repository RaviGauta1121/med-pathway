"use client";

import { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";

interface VoiceActivationProps {
  onEmergencyDetected: (data: any) => void;
}

export default function VoiceActivation({ onEmergencyDetected }: VoiceActivationProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onresult = (event: any) => {
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          }
        }
        if (finalTranscript) {
          setTranscript(finalTranscript);
          detectEmergencyKeywords(finalTranscript);
        }
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const detectEmergencyKeywords = (text: string) => {
    const keywords = ["help", "emergency", "ambulance", "heart attack", "accident"];
    const lowerText = text.toLowerCase();
    
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      onEmergencyDetected({
        name: "Voice User",
        phone: "",
        emergencyType: "Voice Detected Emergency",
        description: text,
        location: { lat: 0, lng: 0 },
      });
    }
  };

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
      setTranscript("");
    }
  };

  return (
    <div className="medical-card">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Voice-Activated Emergency
      </h2>
      <div className="text-center">
        <button
          onClick={toggleListening}
          className={`mx-auto mb-6 w-32 h-32 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? "bg-red-500 hover:bg-red-600 animate-pulse"
              : "bg-medical-primary hover:bg-blue-700"
          }`}
        >
          {isListening ? (
            <MicOff className="h-16 w-16 text-white" />
          ) : (
            <Mic className="h-16 w-16 text-white" />
          )}
        </button>
        <p className="text-lg font-semibold mb-4 text-gray-900">
          {isListening ? "Listening..." : "Click to start voice command"}
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Say "emergency", "help", or describe your situation
        </p>
        {transcript && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-900">Transcript:</p>
            <p className="text-gray-700 mt-2">{transcript}</p>
          </div>
        )}
      </div>
    </div>
  );
}
