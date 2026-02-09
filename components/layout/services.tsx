'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Activity,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardiologyServiceProps {
  OnlyWhyNeonService?: boolean;
  ShowMoreServices?: boolean;
  hideCards?: boolean;
}

const CardiologyServices = ({
  OnlyWhyNeonService = false,
  ShowMoreServices = false,
  hideCards = false
}: CardiologyServiceProps) => {
  const services = [
    {
      image: "/images/chest-heart.png",
      title: "Heart Disease",
      desc: "Comprehensive diagnostic and therapeutic solutions for chronic heart conditions. We specialize in managing coronary artery disease, heart failure, and arrhythmias with personalized care plans."
    },
    {
      image: "/images/vascular.png",
      title: "Vascular Health",
      desc: "Expert care for your circulatory system. Our specialists treat peripheral artery disease, varicose veins, and deep vein thrombosis using the latest minimally invasive techniques."
    },
    {
      image: "/images/metabolic.png",
      title: "Metabolic Care",
      desc: "Managing the intersection of heart health and metabolism. Focused treatment for hypertension, diabetes-related cardiac issues, and cholesterol management."
    },
    {
      image: "/images/holter.png",
      title: "Holter ECG",
      desc: "Continuous 24-48 hour cardiac monitoring to capture irregular heart rhythms that a standard ECG might miss during a short office visit."
    },
    {
      image: "/images/doppler.png",
      title: "Doppler Ultrasonography",
      desc: "Advanced imaging to visualize the speed and direction of blood flow throughout your heart and vessels using harmless sound waves."
    },
    {
      image: "/images/electro.png",
      title: "Advanced ECG",
      desc: "Precision recording of the electrical signals in your heart to quickly diagnose heart attacks and abnormal rhythms."
    },
    {
      image: "/images/pressure.png",
      title: "BP Monitoring",
      desc: "Ambulatory blood pressure monitoring over a full 24-hour cycle to get a true picture of your vascular health outside the hospital."
    },
    {
      image: "/images/echo.png",
      title: "Echocardiography",
      desc: "Real-time ultrasound imaging of the heart to evaluate its structure, valves, and pumping capacity with extreme precision."
    },
  ];

  return (
    <section className={`relative ${hideCards ? 'py-14' : 'py-24 md:py-32'} bg-white overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs mb-4">
              <Activity className="w-4 h-4" />
              <span>Medical Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-gray-900 tracking-tight">
              Our Clinical <span className="text-teal-600">Specialties</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed font-normal">
              Beyond our recognized expertise in cardiology, we provide a multidisciplinary approach to healthcare, integrating advanced technology with compassionate medical practice.
            </p>
          </motion.div>

          {!ShowMoreServices && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/services"
                className="group flex items-center gap-3 text-[#0a4d4a] font-bold text-sm tracking-widest uppercase hover:text-teal-600 transition-colors"
              >
                <span>Explore all departments</span>
                <div className="w-10 h-10 rounded-full border border-[#0a4d4a]/20 flex items-center justify-center group-hover:border-teal-600 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Services Grid */}
        {!hideCards && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 border border-gray-100"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a]/80 via-[#0a4d4a]/20 to-transparent transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-12 bg-teal-400 mb-4 transition-all duration-500" />
                    <p className="text-white/70 text-sm font-light leading-snug line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardiologyServices;