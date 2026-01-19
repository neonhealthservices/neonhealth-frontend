'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
    { name: 'About Us', href: '/about' },
    { name: 'Foundation', href: '/foundation' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-7xl transition-all duration-300 relative ${scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-xl py-0.5 rounded-full border border-white/20"
          : "bg-white/95 backdrop-blur-md shadow-lg py-1 rounded-full border border-white/10"
          }`}
      >
        <div className="max-md:pr-6 md:px-10 flex items-center justify-between h-[52px] md:h-[60px] relative">
          {/* Logo Container */}
          <div className="w-40 md:w-56 flex-shrink-0 relative">
            <Link href="/" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-2 md:-ml-4">
              <div className="relative h-32 w-40 md:h-42 md:w-42 transition-all duration-300">
                <Image
                  src="/neon-logo.png"
                  alt="Neon Health Services Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Absolute Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Book Appointment Button Container */}
          <div className="w-32 md:w-56 flex justify-end">
            <div className="hidden md:block">
              <Link href="/contact">
                <button
                  className="px-6 py-2.5 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-teal-500/20 hover:scale-105 transition-all active:scale-95 whitespace-nowrap"
                  style={{ backgroundColor: '#1a7f7a' }}
                >
                  Book Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100/50 transition-colors"
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
                      className={`px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive
                        ? 'bg-teal-50 text-teal-600 shadow-sm'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-teal-600'
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
