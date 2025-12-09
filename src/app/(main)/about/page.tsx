import { Heart, Users, Award, Target, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About MedPathway</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted travel clinic in Bengaluru, India, making medical journeys smooth and stress-free.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At MedPathway, our mission is to make your medical journey as smooth as possible while
                providing exceptional healthcare services. Based in Bengaluru, our experienced team guides
                you towards optimal health and wellness with personalized medical solutions, from routine
                check-ups to complex travel-related needs.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We focus on combining clinical excellence with genuine care, so every patient feels informed,
                supported, and confident at every step of their healthcare journey.
              </p>
            </div>
            <div>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to become a leading, trusted healthcare and travel-health partner for
                individuals in India and across the globe. We aim to set a benchmark for safe, well-planned
                medical travel by offering clear guidance, transparent information, and access to quality care.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We believe that excellence in healthcare should be accessible, reliable, and compassionate.
                Every service we provide is designed to help you focus on healing while we take care of the
                details.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                MedPathway is a dedicated travel clinic and healthcare partner offering a wide range of
                medical solutions, including vaccinations, travel health advice, and pre-travel medical
                evaluations. Our professionals stay up to date with global health guidelines to ensure
                you are fully prepared and protected wherever you go.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Beyond travel health, we are committed to long-term wellness. We work closely with you to
                understand your needs, provide clear recommendations, and create a safe, reassuring
                experience from your first consultation to your return home.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">What Makes Us Different</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Specialized focus on travel medicine and medical tourism.</li>
                <li>• Personalized guidance instead of one-size-fits-all advice.</li>
                <li>• Strong network of trusted healthcare partners and facilities.</li>
                <li>• Clear communication so you always know what to expect.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency & 24/7 Care */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Emergency Medical Services
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                We understand that emergencies can happen at any time. That is why MedPathway offers
                emergency medical support to help you receive the right care when it matters most.
                Whether you are at home or traveling, our goal is to connect you quickly with trusted
                medical professionals and facilities.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our team is prepared to guide you through urgent situations with calm, clear steps so you
                are never left feeling alone or unsure about what to do next.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Available When You Need Us</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our emergency-focused services are built around responsiveness and reliability. From
                helping you find immediate care to coordinating follow-up support, we aim to make sure
                you receive timely, appropriate medical attention.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                While this page gives an overview, you can customize it further with details about your
                emergency workflows, on-call team, and any partner hospitals or ambulance services you
                work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Compassion</h3>
              <p className="text-gray-600">We treat every person with empathy, dignity, and respect.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Accessibility</h3>
              <p className="text-gray-600">We work to make quality healthcare easy to reach and understand.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
              <p className="text-gray-600">We aim for the highest standards in every service we deliver.</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-600">We use technology and new ideas to improve patient journeys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
      Contact Us
    </h2>

    <div className="grid md:grid-cols-3 gap-8 text-center">
      {/* Address */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Our Address</h3>
        <p className="text-gray-600">Bengaluru, India</p>
      </div>

      {/* Email */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
        <a
          href="mailto:medpathway01@gmail.com"
          className="text-blue-600 hover:underline"
        >
          medpathway01@gmail.com
        </a>
      </div>

      {/* Phone */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
        <p className="text-gray-600">+91-767-683-3165</p>
      </div>
    </div>

    <div className="mt-10 text-center">
      <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
      <p className="text-gray-600">
        We are open 24 hours a day, 7 days a week.
      </p>
      <p className="text-gray-600">
        Feel free to reach out to us anytime!
      </p>
    </div>
  </div>
</section>

    </div>
  );
}
