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
    <section className={`relative ${hideCards ? 'py-14' : !OnlyWhyNeonService ? 'pt-48 pb-24' : 'py-12'} bg-gradient-to-br from-teal-900 to-teal-950 text-white`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${hideCards ? 'items-center text-center' : 'lg:flex-row lg:items-start'} gap-16`}>

          {/* Left Column: Context */}
          <div className={`${hideCards ? 'max-w-3xl' : 'lg:w-1/3 lg:sticky lg:top-32'} space-y-8`}>
            <motion.div
              initial={{ opacity: 0, x: hideCards ? 0 : -20, y: hideCards ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`flex items-center ${hideCards ? 'justify-center' : ''} gap-2 text-teal-300 font-bold uppercase tracking-widest text-sm mb-4`}>
                <Activity className="w-5 h-5" />
                <span>Specialized Care</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black leading-tight mb-6 text-white tracking-tight">
                Our Services
              </h2>
              <p className="text-teal-50/80 text-lg leading-relaxed mb-8">
                Although recognized for excellence in cardiology, our scope of services spans multiple medical specialties, ensuring holistic, world-class care under one roof.
              </p>

              {!ShowMoreServices && (
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-white text-teal-900 font-bold px-8 py-4 rounded-full hover:bg-teal-50 transition-all duration-300 group"
                >
                  <span>SEE ALL OUR SERVICES</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Column: Scrollable Services */}
          {!hideCards && (
            <div className="lg:w-2/3 space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index % 3 * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group grid md:grid-cols-2 gap-8 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-4">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-teal-50/70 leading-relaxed text-base lg:text-lg">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-teal-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Clinical Detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default CardiologyServices;