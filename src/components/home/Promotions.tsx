import { Tag, Clock, Users } from "lucide-react";

export default function Promotions() {
  const promotions = [
    {
      icon: Tag,
      title: "First Consultation Free",
      description: "Get your first online consultation absolutely free",
      badge: "Limited Time",
      color: "bg-green-500",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency medical assistance",
      badge: "Always Available",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Family Health Plans",
      description: "Special packages for your entire family",
      badge: "New",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Special Offers
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className={`absolute top-4 right-4 ${promo.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                {promo.badge}
              </div>
              <promo.icon className="h-12 w-12 text-medical-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {promo.title}
              </h3>
              <p className="text-gray-600">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
