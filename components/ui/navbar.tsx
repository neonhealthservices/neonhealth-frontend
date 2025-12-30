'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

// Navbar Component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/neon-logo.png"
              alt="Neon Health Services Logo"
              width={80}
              height={80}
            />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors text-sm">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors text-sm">About Us</Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors text-sm">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors text-sm">Contact Us</Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors text-sm">Blog</Link>
          </div>

          {/* Book Appointment Button - Desktop */}
          <Link href="/contact" >
            <button
              className="hidden md:block px-6 py-2.5 text-white font-medium rounded-md shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1a7f7a' }}
            >
              Book Appointment
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t"
            >
              <div className="py-4 flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-sm">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-sm">About Us</Link>
                <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-sm">Services</Link>
                <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-sm">Contact Us</Link>
                <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors py-2 text-sm">Blog</Link>
                <Link href="/contact" className="">
                  <button
                    className="px-6 lg:hidden py-2.5 text-white font-medium rounded-md shadow-md hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#1a7f7a' }}
                  >
                    Book Appointment
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
