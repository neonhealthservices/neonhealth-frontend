"use client";

import Footer from "@/components/layout/footer";
import CardiologyServices from "@/components/layout/services";
import Navbar from "@/components/ui/navbar";
import SpecializedServices from "@/components/layout/specializedServices";
import HealthPackages from "@/components/layout/healthPackages";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {Heart, Activity, ShieldCheck, Microscope, Phone} from "lucide-react";

function page() {
   return (
      <div className="bg-white">
         <Navbar />

         {/* Hero Section */}
         <div className="relative h-[680px] w-full overflow-hidden flex items-center">
            <Image src="/images/checkup2.png" alt="Neon Health Services" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-emerald-950/75" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
               <div className="max-w-4xl space-y-8 lg:pt-10">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight">Our Services</h1>
                  <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-3xl">
                     At Neon Health Services, we provide comprehensive, patient-centered medical care delivered to International Standards.
                  </p>

                  <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-4xl">
                     We also provide logistics support for Interventional Procedures Such as Cardiac Stenting and pacing, alongside a range of specialist medical services.
                  </p>
               </div>
            </div>
         </div>

         {/* Intro Description */}

         <CardiologyServices ShowMoreServices header="CARDIOLOGY" des={false} />

         {/* Collaboration Section */}
         <div className="py-24 bg-white text-[#0a4d4a] relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="space-y-4 mb-16 text-center">
                  <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter">
                     In Collaboration with <br />
                     <span className="text-teal-600">Other Facilities</span>
                  </h2>
                  <div className="flex flex-col items-center gap-4">
                     <div className="h-1.5 w-24 bg-teal-500 rounded-full" />
                     <p className="text-lg md:text-xl text-teal-700 font-bold uppercase tracking-[0.4em]">Within and Outside the Country</p>
                  </div>
               </div>

               <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  <motion.div
                     whileHover={{y: -10}}
                     className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 border border-teal-50"
                  >
                     <Image
                        src="/images/interventional-cardiology.jpg"
                        alt="Interventional Cardiology"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/60 to-transparent" />
                     <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end h-full">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                           Interventional <br />
                           <span className="text-teal-400">Cardiology</span>
                        </h3>
                        <div className="h-1.5 w-16 bg-teal-400 my-4 group-hover:w-32 transition-all duration-500" />
                        <p className="text-white/90 text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed max-w-sm">
                           Minimally invasive, catheter-based treatments for structural heart conditions, including advanced stenting and valve repairs.
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     whileHover={{y: -10}}
                     className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 border border-teal-50"
                  >
                     <Image
                        src="/images/electro.png"
                        alt="Electrophysiology & Pacing"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/60 to-transparent" />
                     <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end h-full">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                           Electrophysiology <br />
                           <span className="text-teal-400"> & Pacing</span>
                        </h3>
                        <div className="h-1.5 w-16 bg-teal-400 my-4 group-hover:w-32 transition-all duration-500" />
                        <p className="text-white/90 text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed max-w-sm">
                           Advanced management of heart rhythm disorders through high-precision catheter ablation and pacemaker integrations.
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     whileHover={{y: -10}}
                     className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 border border-teal-50"
                  >
                     <Image
                        src="/images/telemedicine.jpg"
                        alt="Telemedicine Consultation"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/60 to-transparent" />
                     <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end h-full">
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                           Telemedicine <br />
                           <span className="text-teal-400">Consultation</span>
                        </h3>
                        <div className="h-1.5 w-16 bg-teal-400 my-4 group-hover:w-32 transition-all duration-500" />
                        
                        {/* Call button always shown */}
                        <div className="mb-4">
                           <a
                              href="tel:07015875297"
                              className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-2xl text-xs uppercase tracking-wider shadow-lg hover:shadow-teal-400/25 transition-all duration-300 active:scale-95"
                           >
                              <Phone className="w-3.5 h-3.5" />
                              <span>Call 07015875297</span>
                           </a>
                        </div>

                        <p className="text-white/90 text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed max-w-sm">
                           A virtual appointment where you speak with a specialist remotely using a smartphone or computer, allowing for remote diagnosis and care plans without travel.
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>

         <SpecializedServices />

         <HealthPackages />

         <Footer />
      </div>
   );
}

export default page;
