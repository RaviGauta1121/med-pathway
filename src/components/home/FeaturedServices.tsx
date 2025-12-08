import { Ambulance, Plane, Video, BookOpen } from "lucide-react";
import Link from "next/link";

export default function FeaturedServices() {
  const services = [
    {
      icon: Ambulance,
      title: "Emergency Assistance",
      description: "24/7 emergency support with ambulance tracking",
      href: "/emergency",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Plane,
      title: "Medical Tourism",
      description: "World-class treatment destinations and packages",
      href: "/medical-tourism",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Video,
      title: "Online Consultation",
      description: "Connect with expert doctors via video call",
      href: "/consultation",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: BookOpen,
      title: "Health Information",
      description: "Comprehensive health resources and tips",
      href: "/health-info",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="medical-card hover:scale-105 transition-transform"
            >
              <div className={`${service.bgColor} p-4 rounded-lg w-fit mb-4`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
