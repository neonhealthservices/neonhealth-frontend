'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Navbar Component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Foundation', href: '/foundation' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div
        className="w-full text-white py-2 px-6 hidden md:block"
        style={{ backgroundColor: '#1a7f7a' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>0915 061 7554</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>neonhealthservices@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Plot 132, A Line, Ewet Housing Estate, Uyo (Landmark: Kings and Queens School)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full transition-all duration-300 relative border-b border-gray-100 ${scrolled
          ? "bg-white/95 backdrop-blur-lg"
          : "bg-white/90 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center h-[60px] md:h-[90px]">

          {/* Left Column: Logo Container (Takes 1/3 space) */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="relative flex items-center h-full">
              {/* Massive Logo: Absolute positioned to bleed out without affecting nav flow */}
              <div className="absolute left-[-10px] md:left-[-20px] h-32 w-42 md:h-[700px] md:w-[200px] pointer-events-none z-20">
                <Image
                  src="/neon-logo.png"
                  alt="Neon Health Services Logo"
                  fill
                  className="object-contain object-left pointer-events-auto transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              {/* Invisible spacer to maintain some responsive hit area if needed */}
              <div className="w-16 h-8 md:w-32 md:h-12" />
            </Link>
          </div>

          {/* Center Column: Desktop Navigation (Takes 1/3 space, perfectly centered) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-6 lg:space-x-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[10px] lg:text-base  transition-all duration-300 ${isActive ? 'text-teal-600' : 'text-gray-900 hover:text-teal-600'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 right-0 h-1.5 bg-teal-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column: CTA Container (Takes 1/3 space) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <Link href="/contact">
                <button
                  className="px-8 py-3 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
                  style={{ backgroundColor: '#1a7f7a' }}
                >
                  Book Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-900 hover:bg-gray-100/50 transition-colors z-30"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-3 mx-0 p-6 bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100 md:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl transition-all duration-200 text-xs font-black uppercase tracking-widest ${isActive
                        ? 'bg-teal-50 text-teal-600 shadow-sm'
                        : 'text-gray-900 hover:bg-gray-50 hover:text-teal-600'
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button
                      className="w-full px-6 py-4 text-white font-bold rounded-2xl shadow-xl hover:opacity-95 transition-all"
                      style={{ backgroundColor: '#1a7f7a' }}
                    >
                      Book Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
