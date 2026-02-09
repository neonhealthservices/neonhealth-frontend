'use client';

import Footer from '@/components/layout/footer'
import CardiologyServices from '@/components/layout/services'
import Navbar from '@/components/ui/navbar'
import SpecializedServices from '@/components/layout/specializedServices'
import HealthPackages from '@/components/layout/healthPackages'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Activity, ShieldCheck, Microscope } from 'lucide-react'

function page() {
  return (
    <div className='bg-white'>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[680px] w-full overflow-hidden flex items-center">
        <Image
          src='/images/checkup2.png'
          alt='Neon Health Services'
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/75" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl space-y-8 lg:pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-3xl">
              At Neon Health Services, we provide comprehensive, patient-centered medical care delivered to International Standards.
            </p>

            <p className='text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-4xl'>
              We also provide logistics support for Interventional Procedures Such as Cardiac Stenting and pacing, alongside a range of specialist medical services.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Description */}



      <CardiologyServices ShowMoreServices />

      {/* Collaboration Section */}
      <div className="py-24 bg-[#f0fdfc] text-[#0a4d4a] relative border-y border-teal-50">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tight">
              In Collaboration with <br />
              <span className="text-teal-600">Other Facilities</span>
            </h2>
            <div className="inline-flex items-center gap-4">
              <div className="h-[1px] w-8 bg-teal-400" />
              <p className="text-sm md:text-base text-teal-700 font-bold uppercase tracking-[0.3em]">
                Within and Outside the Country
              </p>
              <div className="h-[1px] w-8 bg-teal-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-teal-100 flex items-center justify-center group hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-center leading-tight">
                Interventional <br />
                <span className="text-teal-600">Cardiology</span>
              </h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-teal-100 flex items-center justify-center group hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-center leading-tight">
                Electrophysiology <br />
                <span className="text-teal-600"> & Pacing</span>
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      <SpecializedServices />

      <HealthPackages />

      <Footer />
    </div>
  )
}

export default page