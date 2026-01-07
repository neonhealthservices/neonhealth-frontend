import React from 'react';
import Image from 'next/image';
import { Heart, Ambulance, ClipboardList, Hospital } from 'lucide-react';
import Link from 'next/link';

interface CardiologyServiceProps {
  OnlyWhyNeonService?: boolean;
  ShowMoreServices?: boolean;
}



const CardiologyServices = ({ OnlyWhyNeonService = false, ShowMoreServices = false }: CardiologyServiceProps) => {
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

  const moreServices = [
    {
      image: "/images/throat.png",
      alt: "Endocrinology",
      title: "Endocrinology"
    },
    {
      image: "/images/brain.jpg",
      alt: "Neurology",
      title: "Neurology"
    },
    {
      image: "/images/kidney.jpg",
      alt: "Urology",
      title: "Urology"
    },
    {
      image: "/images/lungs.jpg",
      alt: "Pulmonology",
      title: "Pulmonology"
    },
    {
      image: "/images/blood-test.png",
      alt: " Hematology",
      title: " Hematology"
    },
    {
      image: "/images/lady.png",
      alt: " Dermatology",
      title: " Dermatology"
    },
    {
      image: "/images/pregnant.jpg",
      alt: "Obstetrics and Gynaecology",
      title: "Obstetrics and Gynaecology"
    },
    {
      image: "/images/baby.jpg",
      alt: "Paediatrics",
      title: "Paediatrics"
    },
    {
      image: "/images/general-surgery.jpg",
      alt: " General Surgery",
      title: "General Surgery"
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
    <div className={`${!OnlyWhyNeonService ? 'min-h-screen' : ''} bg-white py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        {!OnlyWhyNeonService && (
          <div>
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
       {!ShowMoreServices && (
         <div className="text-center mb-20">
          <Link href="/services" className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
            See More
          </Link>
        </div>
       )}

          </div>
        )}
        {/* More Services Section */}
        {ShowMoreServices && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Other Services Include
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive cardiology services tailored to meet all your cardiovascular health needs
              </p>
            </div>

            {/* More Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {moreServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg text-center "
                >
                  <div className="flex justify-center mb-0">
                    <div className="relative w-84 h-64">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 text-base mb-3 mt-0.5 font-bold leading-relaxed">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Why Neon Service Section */}
        {!ShowMoreServices && (
          <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Neon Services
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
        )}
      </div>
    </div>
  );
};

export default CardiologyServices;