"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, Phone, Mail, MapPin } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm MedPathway Assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // MedPathway Knowledge Base
  const getResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    // Greetings
    if (msg.match(/^(hi|hello|hey|good morning|good evening)/)) {
      return "Hello! Welcome to MedPathway. How can I assist you with your healthcare needs today?";
    }

    // Services
    if (msg.includes("service") || msg.includes("what do you offer")) {
      return `We offer comprehensive healthcare services:

• Travel Consultations - Expert advice for safe travel
• Vaccinations - Wide range of travel vaccines
• Medical Check-Ups - Pre-travel health assessments
• Emergency Medical Services - 24/7 urgent care
• Medical Tourism - Affordable world-class treatments
• Health Solutions - Personalized wellness plans
• Online Consultations - Video calls with specialists
• Health Information - Resources and tips

Which service interests you?`;
    }

    // Travel Consultations
    if (msg.includes("travel consultation") || msg.includes("travel advice")) {
      return "Our travel consultations provide the latest health advice to keep you safe during your travels. We assess your destination, itinerary, and health needs to give personalized recommendations. Would you like to book a consultation?";
    }

    // Vaccinations
    if (msg.includes("vaccine") || msg.includes("vaccination") || msg.includes("immunization")) {
      return "We offer a comprehensive range of vaccinations for travel and disease protection, including:\n\n• Typhoid\n• Hepatitis A & B\n• Yellow Fever\n• COVID-19\n• Influenza\n• And many more\n\nOur team will recommend vaccines based on your travel destination. Contact us to schedule your vaccination appointment!";
    }

    // Medical Tourism
    if (msg.includes("medical tourism") || msg.includes("treatment abroad")) {
      return "MedPathway offers medical tourism services providing world-class medical care at affordable prices. We guide you through:\n\n• Treatment selection\n• Hospital coordination\n• Travel arrangements\n• Accommodation\n• Post-treatment care\n\nWe partner with top hospitals across India. What type of treatment are you interested in?";
    }

    // Emergency Services
    if (msg.includes("emergency") || msg.includes("urgent")) {
      return "🚨 We provide 24/7 emergency medical services!\n\nOur experienced team is available round-the-clock to help you during medical emergencies.\n\n📞 Emergency Contact: +91-767-683-3165\n\nFor immediate assistance, please call us directly.";
    }

    // Online Consultation
    if (msg.includes("consultation") || msg.includes("doctor") || msg.includes("appointment")) {
      return "We offer online video consultations with expert doctors across various specialties:\n\n• Cardiology\n• Dermatology\n• Orthopedics\n• Pediatrics\n• General Medicine\n• And more\n\nConsultations are available 24/7. Would you like to book an appointment?";
    }

    // Location
    if (msg.includes("location") || msg.includes("address") || msg.includes("where")) {
      return "📍 We're located in Bengaluru, India\n\nWe serve patients across India and internationally through our medical tourism program.\n\nVisit our Contact page for more details!";
    }

    // Contact Information
    if (msg.includes("contact") || msg.includes("phone") || msg.includes("email") || msg.includes("reach")) {
      return `📞 Contact Information:

• Phone: +91-767-683-3165
• Email: medpathway01@gmail.com
• Location: Bengaluru, India

⏰ Opening Hours: 24/7
We're always here when you need us!`;
    }

    // Hours
    if (msg.includes("hours") || msg.includes("open") || msg.includes("timing")) {
      return "We're open 24 hours a day, 7 days a week! Feel free to reach out to us anytime for assistance.";
    }

    // Pricing
    if (msg.includes("price") || msg.includes("cost") || msg.includes("fee")) {
      return "Our pricing varies based on the service you need:\n\n• Consultations: Starting from ₹350\n• Vaccinations: Depends on vaccine type\n• Medical Tourism: Custom packages available\n• Check-ups: Competitive rates\n\nContact us for detailed pricing information for your specific needs!";
    }

    // Booking
    if (msg.includes("book") || msg.includes("appointment") || msg.includes("schedule")) {
      return "Great! To book an appointment:\n\n1. Visit our Consultation page\n2. Choose your preferred specialist\n3. Select a time slot\n4. Complete the booking\n\nOr call us directly at +91-767-683-3165 for assistance!";
    }

    // Specialties
    if (msg.includes("specialty") || msg.includes("specialization")) {
      return "We have expert specialists in:\n\n• Urology\n• Neurology\n• Oncology\n• Cardiology\n• Dermatology\n• Orthopedics\n• Pediatrics\n• General Medicine\n\nWhich specialty are you interested in?";
    }

    // About
    if (msg.includes("about") || msg.includes("who are you")) {
      return "MedPathway is your trusted travel clinic based in Bengaluru, India. We specialize in:\n\n✓ Travel medicine and consultations\n✓ Vaccinations and immunizations\n✓ Medical tourism coordination\n✓ Emergency medical services\n✓ Personalized health solutions\n\nOur mission is to make your medical journey smooth and stress-free with exceptional healthcare services available 24/7.";
    }

    // Thank you
    if (msg.includes("thank") || msg.includes("thanks")) {
      return "You're welcome! Is there anything else I can help you with? We're here 24/7 for your healthcare needs! 😊";
    }

    // Goodbye
    if (msg.match(/^(bye|goodbye|see you|exit|quit)/)) {
      return "Thank you for contacting MedPathway! Take care and feel free to reach out anytime. Have a great day! 👋";
    }

    // Default response
    return "I'm here to help! You can ask me about:\n\n• Our services\n• Vaccinations\n• Medical tourism\n• Emergency care\n• Appointments\n• Contact information\n• Location and hours\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      type: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: getResponse(input),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Quick action buttons
  const quickActions = [
    { label: "Services", message: "What services do you offer?" },
    { label: "Emergency", message: "Emergency services" },
    { label: "Contact", message: "How can I contact you?" },
    { label: "Book Appointment", message: "I want to book an appointment" }
  ];

  const handleQuickAction = (message) => {
    setInput(message);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </span>
          <span className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us!
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">MedPathway Assistant</h3>
                <p className="text-xs text-blue-100">Online • Replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.type === "user"
                      ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm"
                      : "bg-white text-gray-800 rounded-2xl rounded-tl-sm shadow-sm border border-gray-200"
                  } px-4 py-3`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-400"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.message)}
                    className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-sm"
              />
              <button
                onClick={handleSend}
                disabled={input.trim() === ""}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
