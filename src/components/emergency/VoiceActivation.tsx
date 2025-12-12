"use client";

import { useState, useEffect } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";

interface VoiceActivationProps {
  onEmergencyDetected: (data: any) => void;
}

export default function VoiceActivation({
  onEmergencyDetected,
}: VoiceActivationProps) {
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

    if (keywords.some((keyword) => lowerText.includes(keyword))) {
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
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Voice-Activated Emergency
        </h2>
        <p className="text-sm text-gray-600">
          Click the microphone and speak clearly
        </p>
      </div>

      {/* Voice Button */}
      <div className="flex flex-col items-center">
        <div className="relative">
          {isListening && (
            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></div>
          )}
          <button
            onClick={toggleListening}
            className={`relative p-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl ${
              isListening
                ? "bg-gradient-to-br from-red-500 to-red-600"
                : "bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
            }`}
          >
            {isListening ? (
              <Mic className="h-12 w-12 text-white animate-pulse" />
            ) : (
              <MicOff className="h-12 w-12 text-white" />
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-bold text-gray-900 mb-1">
            {isListening ? "🔴 Listening..." : "Click to start voice command"}
          </p>
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <Volume2 className="h-4 w-4" />
            Say "emergency", "help", or describe your situation
          </p>
        </div>
      </div>

      {/* Transcript Display */}
      {transcript && (
        <div className="bg-white rounded-xl p-4 border-2 border-blue-200 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="h-5 w-5 text-blue-600" />
            <p className="text-sm font-bold text-gray-900">Transcript:</p>
          </div>
          <p className="text-gray-800 leading-relaxed">{transcript}</p>
        </div>
      )}
    </div>
  );
}
