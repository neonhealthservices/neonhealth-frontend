import React from 'react';

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-20 lg:pt-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="w-full">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/hospital-hall.jpg"
                alt="Hospital corridor with medical equipment"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Content Section */}
          <div className="w-full space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                We are honoured to introduce the <span className="font-semibold">NEON HEART FOUNDATION</span>, a non-governmental, nonprofit organization, launched 3months ago, and dedicated to improving cardiovascular health and saving lives through education, prevention, and access to care. Neon Heart Foundation is focused on Pregnancy-induced cardiomyopathy, otherwise called Peripartum Cardiomyopathy (PPCM).
              </p>
              
              <p>
                Since its inception, we have been able to provide free Echocardiography and ECG for PPCM patients.
              </p>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-white text-[#1a7f7a] border-2 border-[#1a7f7a] rounded-lg font-semibold text-lg hover:bg-[#ECF9F7] hover:text-[#1a7f7a] cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg">
                Get To Know Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}