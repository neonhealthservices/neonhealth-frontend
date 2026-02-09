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
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div className="relative h-[450px] w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-xl">
            <Image
              src="/images/pregnant-2.jpg"
              alt="Neon Heart Foundation"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8 pt-4">
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              We are building a sanctuary for maternal health. The Neon Heart Foundation is a non-profit movement dedicated to eradicating the silent threat of PPCM.
            </p>
            <p className="italic text-gray-600 border-l-4 border-teal-500 pl-6 text-lg">
              "Our mission is simple yet vital: No mother should lose her life while bringing life."
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-gray-800">
      {/* --- About Neon Grid Section --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-lg"
        >
          <Image
            src="/images/about-hero.jpg"
            alt="Neon Health Services Facility"
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
          <div className="space-y-4">


            <h2 className="text-4xl md:text-3xl font-black text-[#0a4d4a] leading-tight tracking-tight">
              Advanced Care. Trusted Professional. Exceptional Outcome.
            </h2>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">

                <p className="text-base text-gray-700 leading-relaxed font-normal">
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
            >
              <div className="flex items-start gap-4">

                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  We are committed to delivering excellent, patient-centred care through integrity, compassion, and teamwork. Supported by a 100% specialist consultant team, we ensure accurate diagnosis and improved outcomes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >

          </motion.div>
        </motion.div>
      </div>

      {/* --- Mission Section --- */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <p className="text-sm mb-2 text-teal-600 font-bold uppercase tracking-wider">Our Mission</p>
        <p className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-bold leading-snug">
          To provide accessible, world-class healthcare with a strong focus on cardiovascular excellence, driven by innovation, ethical medical practice, and compassionate care.
        </p>
      </div>

      {/* --- Vision Section --- */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <p className="text-sm mb-2 text-teal-600 font-bold uppercase tracking-wider">Our Vision</p>
        <p className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-bold leading-snug">
          To be a leading benchmark for private healthcare in Nigeria and Africa, distinguished by excellence in cardiology and setting new standards in quality.
        </p>
      </div>

      {/* --- Quality Section --- */}
      <div className="max-w-6xl mx-auto px-4 mb-32">
        <p className="text-sm mb-2 text-teal-600 font-bold uppercase tracking-wider">Quality of Care</p>
        <p className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-bold leading-snug">
          We follow strict international safety guidelines and comprehensive infection control measures. Each procedure is overseen by a dedicated safety team.
        </p>
      </div>
    </div>
  );
}