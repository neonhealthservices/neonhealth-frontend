import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-full flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/man-in-suit.png"
            alt="Healthcare Professional"
            className="w-full h-full object-contain object-right"
          />
          {/* Gradient Overlay - stronger on left, fading to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ECF9F7] via-[#ECF9F7] to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full max-sm:pb-32">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: '#1a7f7a' }}>
              Leading Cardiovascular<br />Care for Healthier Lives
            </h1>

            {/* Subheading */}
            <p className="text-gray-700 text-base lg:text-lg mb-8 leading-relaxed">
              Advanced cardiovascular care delivered with integrity, compassion, and expertise<br />
              — supported by a multidisciplinary medical team and modern technology.
            </p>

            {/* CTA Button */}
           <Link href="/services" className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
            Explore Our Services
          </Link>
          </div>
        </div>
      </div>

      {/* Bottom Contact Bar */}
      <div 
        className="absolute bottom-0 left-0 right-0 text-white py-4 px-6"
        style={{ backgroundColor: '#1a7f7a' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {/* General Line */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">General Line: 0915 081 7554</div>
                <div className="opacity-90">Emergency (24/7): 0803 618 9189</div>
                <div className="opacity-90">WhatsApp: 0915 081 7554 | 0808 338 7474</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Email: neonhealthservices@gmail.com</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Location:</div>
                <div className="opacity-90">Plot 1/2 G1 Lane, Ewet Housing Estate ,</div>
                <div className="opacity-90">Uyo, Akwa Ibom State</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}