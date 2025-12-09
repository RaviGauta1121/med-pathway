"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, User, MessageSquare, Mic, MicOff, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isListening, setIsListening] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [recognition, setRecognition] = useState(null);
  const [browserSupport, setBrowserSupport] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          if (activeField) {
            setFormData((prev) => ({
              ...prev,
              [activeField]: prev[activeField] + " " + transcript,
            }));
          }
          setIsListening(false);
        };

        recognitionInstance.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognitionInstance.onend = () => {
          setIsListening(false);
        };

        setRecognition(recognitionInstance);
      } else {
        setBrowserSupport(false);
      }
    }
  }, [activeField]);

  const handleVoiceInput = (fieldName) => {
    if (!recognition) return;

    if (isListening && activeField === fieldName) {
      recognition.stop();
      setIsListening(false);
      setActiveField(null);
    } else {
      setActiveField(fieldName);
      setIsListening(true);
      recognition.start();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us anytime. We're here to help you 24/7.
          </p>
          {browserSupport && (
            <p className="text-sm text-blue-600 mt-2 flex items-center justify-center gap-2">
              <Mic className="h-4 w-4" />
              Voice input enabled - Click the microphone icon to speak
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're available 24 hours a day, 7 days a week. Feel free to reach out to us anytime!
              </p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Address</h3>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:medpathway01@gmail.com" className="text-blue-600 hover:underline">
                    medpathway01@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                  <a href="tel:+917676833165" className="text-blue-600 hover:underline">
                    +91-767-683-3165
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="p-6 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                <p className="text-blue-50">Open 24 hours a day, 7 days a week</p>
                <p className="text-sm text-blue-100 mt-2">Always here when you need us</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                  <User className="h-4 w-4 text-gray-600" />
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                  {browserSupport && (
                    <button
                      type="button"
                      onClick={() => handleVoiceInput("name")}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                        isListening && activeField === "name"
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      title="Voice input"
                    >
                      {isListening && activeField === "name" ? (
                        <MicOff className="h-5 w-5 animate-pulse" />
                      ) : (
                        <Mic className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                  <Mail className="h-4 w-4 text-gray-600" />
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                  {browserSupport && (
                    <button
                      type="button"
                      onClick={() => handleVoiceInput("email")}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                        isListening && activeField === "email"
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      title="Voice input"
                    >
                      {isListening && activeField === "email" ? (
                        <MicOff className="h-5 w-5 animate-pulse" />
                      ) : (
                        <Mic className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="+91-XXX-XXX-XXXX"
                  />
                  {browserSupport && (
                    <button
                      type="button"
                      onClick={() => handleVoiceInput("phone")}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                        isListening && activeField === "phone"
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      title="Voice input"
                    >
                      {isListening && activeField === "phone" ? (
                        <MicOff className="h-5 w-5 animate-pulse" />
                      ) : (
                        <Mic className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-2">
                  <MessageSquare className="h-4 w-4 text-gray-600" />
                  Your Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                  {browserSupport && (
                    <button
                      type="button"
                      onClick={() => handleVoiceInput("message")}
                      className={`absolute right-3 top-3 p-2 rounded-lg transition-colors ${
                        isListening && activeField === "message"
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      title="Voice input"
                    >
                      {isListening && activeField === "message" ? (
                        <MicOff className="h-5 w-5 animate-pulse" />
                      ) : (
                        <Mic className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-500 text-green-800 px-4 py-3 rounded-lg text-center">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 border-2 border-red-500 text-red-800 px-4 py-3 rounded-lg text-center">
                  ✗ Failed to send message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
