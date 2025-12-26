
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 to-teal-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Neon Health Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Neon Health Services</h3>
            <p className="text-gray-300 mb-4">
              Advanced Cardiology Services& other specialties
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
              Connect With Us
            </a>
            <p className="text-gray-300 mt-4">
              Compassionate care, prompt response, and expert attention always within reach.
            </p>
          </div>

          {/* Emergency Care */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
            <p className="text-gray-300 mb-4">
              Swift, dependable response for medical and heart-related emergencies. Our facility is equipped to deliver timely, life-saving emergency care day and night.
            </p>
            <div className="mt-4">
              <span className="text-gray-300">Emergency Line: </span>
              <a href="tel:08036189199" className="text-teal-400 hover:text-teal-300 transition-colors">
                0803 618 9199
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Plot 132 G Lane, Ewet Housing Estate,</p>
                  <p className="text-gray-300">Uyo, Akwa Ibom State</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:neonhealthservices@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                  neonhealthservices@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+2349150617554" className="block text-teal-400 hover:text-teal-300 transition-colors">
                    +234 915 061 7554
                  </a>
                  <a href="tel:+2348093387474" className="block text-teal-400 hover:text-teal-300 transition-colors">
                    +234 809 338 7474
                  </a>
                </div>
              </div>

              {/* Emergency Line */}
              <div className="pt-2">
                <span className="text-gray-300">Emergency: </span>
                <a href="tel:+2348036189199" className="text-teal-400 hover:text-teal-300 transition-colors font-semibold">
                  +234 0803 618 9199
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-800 pt-6">
          <p className="text-gray-400 text-sm">© 2025 Neon Health Services</p>
        </div>
      </div>
    </footer>
  );
}