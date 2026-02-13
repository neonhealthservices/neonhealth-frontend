"use client";

import Footer from "@/components/layout/footer";
import CardiologyServices from "@/components/layout/services";
import Navbar from "@/components/ui/navbar";
import SpecializedServices from "@/components/layout/specializedServices";
import HealthPackages from "@/components/layout/healthPackages";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {Heart, Activity, ShieldCheck, Microscope} from "lucide-react";

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

               <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  <motion.div
                     whileHover={{y: -10}}
                     className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 border border-teal-50"
                  >
                     <Image
                        src="/images/interventionalCard.jpg"
                        alt="Interventional Cardiology"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/40 to-transparent" />
                     <div className="absolute inset-x-0 bottom-0 p-12">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                           Interventional <br />
                           <span className="text-teal-400">Cardiology</span>
                        </h3>
                        <div className="h-1.5 w-16 bg-teal-400 mt-6 group-hover:w-32 transition-all duration-500" />
                     </div>
                  </motion.div>

                  <motion.div
                     whileHover={{y: -10}}
                     className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 border border-teal-50"
                  >
                     <Image
                        src="/images/interventional-cardiology.png"
                        alt="Electrophysiology & Pacing"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/40 to-transparent" />
                     <div className="absolute inset-x-0 bottom-0 p-12">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                           Electrophysiology <br />
                           <span className="text-teal-400"> & Pacing</span>
                        </h3>
                        <div className="h-1.5 w-16 bg-teal-400 mt-6 group-hover:w-32 transition-all duration-500" />
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
