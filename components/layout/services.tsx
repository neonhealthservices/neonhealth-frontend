"use client";

import React from "react";
import Image from "next/image";
import {ArrowRight, Activity} from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion";

interface CardiologyServiceProps {
   OnlyWhyNeonService?: boolean;
   ShowMoreServices?: boolean;
   hideCards?: boolean;
   header?: string;
   des?: boolean;
}

const CardiologyServices = ({OnlyWhyNeonService = false, ShowMoreServices = false, hideCards = false, header = "", des = true}: CardiologyServiceProps) => {
   const services = [
      {
         image: "/images/chest-heart.png",
         title: "DIAGNOSING HEART DISEASES",
         desc: "Comprehensive diagnostic procedures to identify and evaluate various heart conditions using state-of-the-art technology.",
      },
      {
         image: "/images/vascular.png",
         title: "VASCULAR DISORDERS",
         desc: "Expert diagnosis and treatment of conditions affecting the blood vessels, ensuring optimal circulatory health.",
      },
      {
         image: "/images/echocardiography.jpeg",
         title: "ECHOCARDIOGRAPHY",
         desc: "Advanced ultrasound imaging of the heart to assess structure and function.",
      },
      {
         image: "/images/ecg.jpeg",
         title: "ELECTROCARDIOGRAPHY",
         desc: "Precision recording of heart electrical activity to diagnose arrhythmias and other cardiac issues.",
      },
      {
         image: "/images/ambulatory-pressure.jpeg",
         title: "AMBULATORY BP MONITORING",
         desc: "Continuous blood pressure monitoring over 24 hours to track cardiovascular health in real-world settings.",
      },
      {
         image: "/images/holter.png",
         title: "HOLTER ECG",
         desc: "Extended cardiac rhythm monitoring to capture irregularities over 24 to 48 hours.",
      },
      {
         image: "/images/blood-biomarker.png",
         title: "CARDIAC BIOMARKER TESTING",
         desc: "Analyzing blood samples for specific markers that indicate heart health and potential risks.",
      },
      {
         image: "/images/specialized-clinic.png",
         title: "HIGHLY SPECIALIZED CARDIOLOGY CLINIC",
         desc: "Dedicated clinical excellence providing specialized consultations and advanced cardiac care.",
      },
      {
         image: "/images/metabolic.png",
         title: "METABOLIC DISORDERS",
         desc: "Managing metabolic conditions that impact cardiovascular health, including cholesterol and hypertension.",
      },
   ];

   return (
      <section className={`relative ${hideCards ? "py-14" : "pt-16 pb-24 md:pt-20 md:pb-32"} bg-white overflow-hidden`}>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center justify-center gap-6 mb-16 text-center">
               <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="max-w-4xl flex flex-col items-center">
                  <div className="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs mb-4">
                     <Activity className="w-4 h-4" />
                     <span>Medical Excellence</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 tracking-tight text-center">
                     {header} <span className="text-teal-600">SERVICES</span>
                  </h2>
                  {des && (
                     <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed font-normal text-center">
                        Beyond our recognized expertise in cardiology, we provide a multidisciplinary approach to healthcare, integrating advanced technology with compassionate
                        medical practice.
                     </p>
                  )}
               </motion.div>

               {!ShowMoreServices && (
                  <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}}>
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
               <div className="grid grid-cols-1 gap-16 md:gap-24 pt-10">
                  {services.map((service, index) => (
                     <motion.div
                        key={index}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: index * 0.1}}
                        viewport={{once: true}}
                        className="group relative h-auto min-h-[350px] md:h-[400px] flex items-center"
                     >
                        {/* Number Overlay - Straddling the left edge */}
                        <div className="absolute -left-8 md:left-5 z-30 pointer-events-none">
                           <span className="text-8xl md:text-8xl font-black text-teal-600/20 select-none leading-none tracking-tighter transition-all duration-700 group-hover:text-teal-400/40 group-hover:scale-110 block">
                              {(index + 1).toString().padStart(2, "0")}
                           </span>
                        </div>

                        {/* Main Card Container */}
                        <div className="relative h-full w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl transition-all duration-700 bg-white group-hover:shadow-teal-900/20">
                           {/* Background Image with Overlay */}
                           <div className="absolute inset-0 z-0">
                              <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-all duration-[2000ms] ease-out" />
                              {/* Multi-layered overlay for ultimate readability */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#0a4d4a] via-[#0a4d4a]/80 to-[#0a4d4a]/20 md:via-[#0a4d4a]/60 md:to-transparent z-10" />
                              <div className="absolute inset-0 bg-[#0a4d4a]/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                           </div>

                           {/* Content Container */}
                           <div className="relative z-20 h-full p-8 md:p-20 flex flex-col justify-center max-w-4xl ml-12 md:ml-32">
                              <div className="space-y-6">
                                 <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] uppercase tracking-tight">{service.title}</h3>

                                 <div className="h-2 w-24 bg-teal-500 rounded-full" />

                                 <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed max-w-2xl">{service.desc}</p>
                              </div>
                           </div>

                           {/* Corner Visual Decoration */}
                           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none" />
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
