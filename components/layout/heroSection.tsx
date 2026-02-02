'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center pt-48 pb-20">
      {/* Background Image - Moved to cover entire parent */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="/images/man-in-suit.png"
          alt="Healthcare Professional"
          className="w-full h-full object-cover"
        />
        {/* Dark Full Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 w-full">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-5xl xl:text-7xl font-bold uppercase mb-8 tracking-tight text-white"
          >
            <span className="block mb-2">Welcome To</span>
            NEON HEALTH SERVICES
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 mb-12 text-gray-100 leading-relaxed text-lg lg:text-xl font-light max-w-3xl"
          >
            <p>
              At Neon Health Services, we provide our patients with advanced treatments and state-of-the-art therapies. We are committed to delivering the best medical care to all our clients at every point in time.
            </p>
            <p>
              Our team of highly trained professionals are committed to remaining at the forefront of medical progress by continually enhancing their skills and expertise to deliver exceptional care.
            </p>
            <p>
              Your health and well-being are our highest priorities, and we remain dedicated to delivering healthcare of the best quality.
            </p>

          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/services" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 inline-block shadow-lg hover:shadow-teal-900/40">
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}