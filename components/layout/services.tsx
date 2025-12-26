import React from 'react';
import Image from 'next/image';
import { Heart, Ambulance, ClipboardList, Hospital } from 'lucide-react';

const CardiologyServices = () => {
  const services = [
    {
      image: "/images/heart-stethoscope.png", 
      alt: "Heart and stethoscope",
      title: "Focused care for the heart, delivered with precision"
    },
    {
      image: "/images/drop.png", 
      alt: "Blood pressure monitoring",
      title: "Blood pressure & heart disease management"
    },
    {
      image: "/images/cardiac-monitor.png", 
      alt: "ECG cardiac monitor",
      title: "ECG and cardiac monitoring consultations"
    }
  ];

  const features = [
    {
      icon: <Heart className="w-12 h-12 text-teal-600" />,
      title: "Specialized cardiology expertise"
    },
    {
      icon: <Ambulance className="w-12 h-12 text-teal-600" />,
      title: "24/7 emergency services"
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-teal-600" />,
      title: "Modern diagnostic support"
    },
    {
      icon: <Hospital className="w-12 h-12 text-teal-600" />,
      title: "Accessible Health insurance"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cardiology Services Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cardiology Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Neon Health Services is a cardiology-based hospital with a special interest in the diagnosis
            and management of heart, vascular, and metabolic disorders
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mb-20">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
            See More
          </button>
        </div>

        {/* Why Neon Service Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Neon Service
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive cardiovascular care supported by adequate
              investigative capacity to ensure accurate diagnosis and effective treatment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-teal-50 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-teal-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiologyServices;