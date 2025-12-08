"use client";

import { useState, useEffect, useCallback } from "react";

interface VoiceRecognitionState {
  transcript: string;
  isListening: boolean;
  error: string | null;
  supported: boolean;
}

export function useVoiceRecognition() {
  const [state, setState] = useState<VoiceRecognitionState>({
    transcript: "",
    isListening: false,
    error: null,
    supported: false,
  });

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
          setState((prev) => ({ ...prev, transcript: finalTranscript }));
        }
      };

      recognitionInstance.onerror = (event: any) => {
        setState((prev) => ({
          ...prev,
          error: event.error,
          isListening: false,
        }));
      };

      recognitionInstance.onend = () => {
        setState((prev) => ({ ...prev, isListening: false }));
      };

      setRecognition(recognitionInstance);
      setState((prev) => ({ ...prev, supported: true }));
    }
  }, []);

  const startListening = useCallback(() => {
    if (recognition) {
      recognition.start();
      setState((prev) => ({ ...prev, isListening: true, error: null, transcript: "" }));
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setState((prev) => ({ ...prev, isListening: false }));
    }
  }, [recognition]);

  const resetTranscript = useCallback(() => {
    setState((prev) => ({ ...prev, transcript: "" }));
  }, []);

  return {
    ...state,
    startListening,
    stopListening,
    resetTranscript,
  };
}
