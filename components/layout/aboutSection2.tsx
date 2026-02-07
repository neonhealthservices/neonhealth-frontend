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
              src="/images/pregnant-2.jpg"
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
            src="/images/about-hero.jpg"
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
            {/* Left Column: The Statement */}
            <div className="lg:col-span-2 space-y-10 flex flex-col justify-center lg:-translate-y-[30%]">
              <div className="space-y-6 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-5 py-2 bg-teal-600/10 text-teal-700 rounded-full text-xs font-bold uppercase tracking-[0.3em] border border-teal-600/20"
                >
                  <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" />
                  The Neon Standard
                </motion.div>

                <h3 className="text-5xl md:text-6xl xl:text-7xl font-black text-[#0a4d4a] leading-[1] tracking-tight italic">
                  Advanced <span className="text-teal-600">Care.</span> <br />
                  Trusted <span className="text-teal-600">Pro.</span> <br />
                  <span className="relative inline-block mt-2">
                    Exceptional
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-teal-500/20 -rotate-1" />
                  </span>
                </h3>
              </div>
            </div>

            {/* Right Column: The Detail */}
            <div className="lg:col-span-3 space-y-10 lg:pl-12 lg:border-l border-teal-200/50">
              <div className="grid gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-teal-50">
                      <Star className="w-6 h-6 text-teal-600" />
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
                      At Neon, our approach goes beyond only treatment. We focus on prevention education and long-term wellness.
                      For patients who expect the very best, Neon offers the expertise, precision, and compassion found in the world’s leading medical centers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-teal-50">
                      <Shield className="w-6 h-6 text-teal-600" />
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
                      We are committed to delivering excellent, patient-centred care through integrity, compassion, and teamwork. Supported by a 100% specialist consultant team, we ensure accurate diagnosis and improved outcomes.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-10 border-t border-teal-200/50"
              >
                <div className="bg-[#0a4d4a] rounded-3xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-400/30 transition-colors" />
                  <p className="text-xl md:text-2xl font-bold leading-tight relative z-10">
                    "Quality Healthcare Is Not a Privilege — <br />
                    <span className="text-teal-400 italic">It’s a Promise!"</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Mission and Vision Header --- */}
      <div className="max-w-6xl mx-auto px-4 lg:px-2 mb-20">
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
          className="group relative bg-[#f0fdfc] rounded-t-[2rem] rounded-b-none  transition-all duration-500 border-b-[5px] border-teal-500 flex flex-col h-full overflow-hidden"
        >
          <div className="p-10 space-y-6 flex-grow">
            <h2 className="text-2xl font-black text-[#0a4d4a] tracking-tighter">
              <span className="uppercase">Mission</span>
            </h2>
            <p className="text-gray-700 leading-relaxed font-light text-base">
              To provide accessible, world-class healthcare with a strong focus on cardiovascular excellence, driven by innovation, ethical medical practice, and compassionate care.
            </p>
          </div>

        </motion.div>

        {/* Vision Card */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-[#f0fdfc] rounded-t-[2rem] rounded-b-none  transition-all duration-500 border-b-[5px] border-teal-500 flex flex-col h-full overflow-hidden"
        >
          <div className="p-10 space-y-6 flex-grow">
            <h2 className="text-2xl font-black text-[#0a4d4a] tracking-tighter">
              <span className="uppercase">Vision</span>
            </h2>
            <p className="text-gray-700 leading-relaxed font-light text-base">
              To be a leading benchmark for private healthcare in Nigeria and Africa, distinguished by excellence in cardiology and setting new standards in quality.
            </p>
          </div>

        </motion.div>

        {/* Quality Card */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-[#f0fdfc] rounded-t-[2rem] rounded-b-none transition-all duration-500 border-b-[5px] border-teal-500 flex flex-col h-full overflow-hidden"
        >
          <div className="p-10 space-y-6 flex-grow">
            <h2 className="text-2xl font-black text-[#0a4d4a] tracking-tighter">
              <span className="uppercase">Quality of Care</span>
            </h2>
            <p className="text-gray-700 leading-relaxed font-light text-base">
              We follow strict international safety guidelines and comprehensive infection control measures. Each procedure is overseen by a dedicated safety team.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}