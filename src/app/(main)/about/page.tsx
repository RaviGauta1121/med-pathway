import { Heart, Users, Award, Target, Mail, Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Med Pathway</h1>
          <p className="text-xl">Transforming healthcare accessibility for everyone</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality healthcare services to everyone through 
                innovative technology and compassionate care. We strive to bridge the gap 
                between patients and healthcare providers, making medical assistance available 
                at your fingertips.
              </p>
            </div>
            <div>
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted healthcare platform globally, revolutionizing 
                how people access medical care. We envision a world where quality healthcare 
                is not a privilege but a right accessible to all, regardless of location or 
                economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Compassion</h3>
              <p className="text-gray-600">Caring for every patient with empathy</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Accessibility</h3>
              <p className="text-gray-600">Making healthcare available to all</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
              <p className="text-gray-600">Delivering the highest quality care</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-600">Using technology to improve lives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 1800-XXX-XXXX</p>
              <p className="text-gray-600">24/7 Support</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">support@medpathway.com</p>
              <p className="text-gray-600">info@medpathway.com</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Pan India Service</p>
              <p className="text-gray-600">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
