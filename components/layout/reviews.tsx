'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  _id: string;
  patientName: string;
  title: string;
  content: string;
  service: string;
  rating: number;
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews, currentIndex]);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setReviews(data);
      } else {
        // Fallback data if none in DB
        setReviews([
          {
            _id: '1',
            patientName: 'Sarah Johnson',
            title: 'Exceptional Care and Expertise',
            content: 'The team at Neon Health Services provided me with world-class cardiology care. Their attention to detail and compassionate approach made all the difference in my recovery journey.',
            service: 'Cardiology Services',
            rating: 5
          },
          {
            _id: '2',
            patientName: 'Michael Chen',
            title: 'Professional and Efficient',
            content: 'From the moment I walked in, I felt I was in good hands. The diagnostic process was thorough, and the specialists explained everything clearly. Highly recommended for anyone seeking quality healthcare.',
            service: 'Diagnostic Imaging',
            rating: 5
          },
          {
            _id: '3',
            patientName: 'Elena Rodriguez',
            title: 'Compassionate Staff',
            content: 'The nursing staff and doctors went above and beyond to ensure my comfort. It is rare to find a hospital where you feel like more than just a patient. Thank you for the wonderful care.',
            service: 'Inpatient Care',
            rating: 5
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight"
            >
              Hear from our Patients
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed font-light"
            >
              We're proud to be the first choice for individuals and families who demand the highest standard of care. These are their words, their journeys, and their reasons for choosing Neon Health Services.
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => paginate(-1)}
              className="p-4 rounded-full border border-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 group shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-900/20"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Reviews Carousel/Grid */}
        <div className="relative min-h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence initial={false} custom={direction}>
              {reviews.map((review, index) => {
                const isVisible = (index >= currentIndex && index < currentIndex + 3) || 
                                 (currentIndex + 3 > reviews.length && (index >= currentIndex || index < (currentIndex + 3) % reviews.length));
                
                return (
                  <motion.div
                    key={review._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0, 
                      scale: isVisible ? 1 : 0.95,
                      display: isVisible ? 'block' : 'none'
                    }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col h-full border border-transparent hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500"
                  >
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-teal-600/20" />
                    </div>
                    
                    <p className="text-gray-900 text-xl lg:text-2xl leading-relaxed font-semibold mb-8 flex-grow">
                      "{review.content}"
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <p className="text-gray-900 font-medium italic">By {review.patientName}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
