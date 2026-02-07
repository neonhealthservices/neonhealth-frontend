'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, Shield, Star } from 'lucide-react';

interface AboutSectionProps {
  variant?: 'default' | 'foundation';
}

export default function AboutSection({ variant = 'default' }: AboutSectionProps) {
  if (variant === 'foundation') {
    // Keep foundation variant simple or as it was if possible
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/pregnant.jpg"
              alt="Neon Heart Foundation"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-[#0a4d4a] uppercase tracking-tight">Neon Heart <br /><span className="text-teal-600">Foundation</span></h2>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              We are building a sanctuary for maternal health. The Neon Heart Foundation is a non-profit movement dedicated to eradicating the silent threat of PPCM.
            </p>
            <p className="italic text-gray-600 border-l-4 border-teal-500 pl-6">
              "Our mission is simple yet vital: No mother should lose her life while bringing life."
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
      {/* --- About Us Section --- */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[500px] w-full max-w-lg mx-auto rounded-t-[3rem] overflow-hidden shadow-sm"
        >
          <Image
            src="/images/about.jpg"
            alt="Hospital corridor with medical equipment"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="border-l-8 border-teal-600 pl-6">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tight">About Neon</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            At Neon, we are dedicated to providing world-class medical services tailored to the specific needs of our patients. Our commitment to excellence drives us to continually improve and innovate.
          </p>
        </motion.div>
      </div>

      {/* --- Advanced Care Statement Section --- */}
      <div className="mb-40 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-teal-50/20 rounded-[4rem] p-10 md:p-20 border border-teal-100/30 overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Column: Statement */}
            <div className="lg:col-span-2 space-y-8 text-center lg:text-start">
              <div className="inline-block px-6 py-2 bg-teal-600 text-white rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                The Neon Standard
              </div>
              <h3 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#0a4d4a] leading-[1.1] italic">
                "Advanced Care. <br />
                Trusted Professional. <br />
                <span className="text-teal-600">Exceptional Outcome.</span>"
              </h3>
            </div>

            {/* Right Column: Detail */}
            <div className="lg:col-span-3 space-y-12">
              <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed border-l-4 border-teal-600/10 pl-8">
                At Neon, our approach goes beyond only treatment. We focus on prevention education and long-term wellness.
                For patients who expect the very best, Neon offers the expertise, precision, and compassion found in the world’s leading medical centers, delivered with the comfort and convenience of being close to home.
              </p>

              <div className="pt-12 border-t border-teal-200/50 text-center">
                <p className="text-2xl md:text-4xl font-black text-[#0a4d4a] leading-tight">
                  Quality Healthcare Is Not a Privilege <br />
                  <span className="text-teal-600 flex items-center justify-center gap-4 mt-3">
                    <span className="h-[2px] w-8 md:w-16 bg-teal-600/20"></span>
                    It’s a Promise!
                    <span className="h-[2px] w-8 md:w-16 bg-teal-600/20"></span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Mission and Vision Header --- */}
      <div className="max-w-6xl mx-auto px-4 lg:px-20 mb-20">
        <p className="text-xl mb-2 text-gray-700 font-semibold">Our Mission and Vision</p>
        <p className="text-2xl lg:text-3xl text-gray-700 font-bold leading-snug">
          We provide excellent, patient-centered care through a multidisciplinary team of 100% specialist consultants, ensuring accurate diagnosis and superior health outcomes.
        </p>
      </div>

      {/* --- Mission, Vision, Quality Grid --- */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-16">
        {/* Mission Card */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-white p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 border border-teal-50 flex flex-col h-full"
        >
          <div className="space-y-6 flex-grow">
            <h2 className="text-2xl font-black text-[#0a4d4a] tracking-tighter">
              <span className="text-teal-600 uppercase">Mission</span>
            </h2>
            <div className="w-12 h-1 bg-teal-500/30 group-hover:w-24 transition-all duration-500" />
            <p className="text-gray-600 leading-relaxed font-light text-base">
              To provide accessible, world-class healthcare with a strong focus on cardiovascular excellence, driven by innovation, ethical medical practice, and compassionate care.
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-[#0a4d4a] p-10 rounded-3xl shadow-2xl hover:shadow-emerald-900/40 transition-all duration-500 flex flex-col h-full text-white"
        >
          <div className="space-y-6 flex-grow">
            <h2 className="text-2xl font-black tracking-tighter">
              <span className="uppercase">Vision</span>
            </h2>
            <div className="w-12 h-1 bg-emerald-400/30 group-hover:w-24 transition-all duration-500" />
            <p className="text-teal-50/80 leading-relaxed font-light text-base">
              To be a leading benchmark for private healthcare in Nigeria and Africa, distinguished by excellence in cardiology and setting new standards in quality.
            </p>
          </div>
        </motion.div>

        {/* Quality Card */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-white p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 border border-teal-50 flex flex-col h-full"
        >
          <div className="space-y-6 flex-grow">
            <h2 className="text-2xl font-black text-[#0a4d4a] tracking-tighter">
              <span className="text-teal-600 uppercase">Quality of Care</span>
            </h2>
            <div className="w-12 h-1 bg-teal-500/30 group-hover:w-24 transition-all duration-500" />
            <p className="text-gray-600 leading-relaxed font-light text-base">
              We follow strict international safety guidelines and comprehensive infection control measures. Each procedure is overseen by a dedicated safety team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}