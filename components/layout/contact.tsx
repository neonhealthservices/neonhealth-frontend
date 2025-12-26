'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[60vw] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-600">
            Compassionate care, prompt response, and expert attention always within reach.
          </p>
        </div>

        {/* Wrapper */}
        <div className="relative bg-white shadow-lg ">

          {/* Contact Info (Overflow Panel) */}
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[20%] 
            bg-teal-600 text-white p-10 h-[85%] w-[45%] z-10 shadow-xl">
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <p>
                  Plot 132 G Lane, Ewet Housing Estate,<br />
                  Uyo, Akwa Ibom State
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <a href="mailto:neonhealthservices@gmail.com" className="hover:underline">
                  neonhealthservices@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <a href="tel:+2349150617554" className="block hover:underline">
                    +234 915 061 7554
                  </a>
                  <a href="tel:+2348093387474" className="block hover:underline">
                    +234 809 338 7474
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="pt-4 border-t border-teal-500">
                <p className="font-semibold">
                  Emergency:{' '}
                  <a href="tel:+2348036189199" className="hover:underline">
                    +234 0803 618 9199
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className=" ml-auto md:w-[50%] p-8 md:p-10">
            <h2 className="text-2xl text-center font-bold text-gray-900 mb-8">
              Reach Out
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 resize-none"
              />

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-white text-[#1a7f7a] border-2 border-[#1a7f7a] rounded-lg font-semibold text-lg hover:bg-[#ECF9F7] hover:text-[#1a7f7a] cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
