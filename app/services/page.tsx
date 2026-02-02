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
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src='/images/checkup2.png'
          alt='Neon Health Services'
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 text-center uppercase tracking-tighter"
          >
            Our <span className="text-teal-400">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl text-center font-light leading-relaxed"
          >
            Comprehensive, patient-centered medical care delivered to international standards.
          </motion.p>
        </div>
      </div>

      {/* Intro Description */}
      <div className='bg-white text-gray-800 py-24 px-6'>
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs">
            <Activity className="w-4 h-4" />
            <span>Healthcare Excellence</span>
          </div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
            At <span className="font-bold text-[#0a4d4a]">Neon Health Services</span>, we provide comprehensive, patient-centered medical care delivered to International Standards. We also provide logistics support for Interventional Procedures Such as Cardiac Stenting and pacing, alongside a range of specialist medical services designed to meet diverse healthcare needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-black text-sm uppercase">Cardiology</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-black text-sm uppercase">Diagnostics</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-black text-sm uppercase">Specialist Care</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="font-black text-sm uppercase">Blood Tests</h3>
            </div>
          </div>
        </div>
      </div>

      <CardiologyServices ShowMoreServices />

      {/* Collaboration Section */}
      <div className="py-24 bg-[#0a4d4a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight">
            In Collaboration with <span className="text-teal-400">Other Facilities</span> <br />
            Within and Outside the Country
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            <div className="bg-white/5 border border-white/10 px-12 py-8 rounded-[2rem] hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold uppercase tracking-widest">Interventional Cardiology</h3>
            </div>
            <div className="bg-white/5 border border-white/10 px-12 py-8 rounded-[2rem] hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold uppercase tracking-widest">Electrophysiology & Pacing</h3>
            </div>
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