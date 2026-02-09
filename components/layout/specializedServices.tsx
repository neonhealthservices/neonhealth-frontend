'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { } from 'lucide-react'; // Removing unused imports

const otherServices = [
    { title: "GENERAL INTERNAL MEDICINE", image: "/images/checkup.png" },
    { title: "EMERGENCY MEDICINE", image: "/images/reception.png" },
    { title: "ENDOCRINOLOGY", image: "/images/metabolic.png" },
    { title: "PULMONOLOGY", image: "/images/lungs.jpg" },
    { title: "NEPHROLOGY", image: "/images/nephro.png" },
    { title: "NEUROLOGY", image: "/images/brain.jpg" },
    { title: "DERMATOLOGY", image: "/images/lady.png" },
    { title: "HEMATOLOGY", image: "/images/blood-test.png" },
    { title: "MENTAL HEALTH", image: "/images/hospital-hall.jpg" },
    { title: "PAEDIATRICS", image: "/images/baby.jpg" },
    { title: "OBSTETRICS AND GYNECOLOGY", image: "/images/pregnant.jpg" },
    { title: "GENERAL SURGERY", image: "/images/general-surgery.jpg" },
    { title: "UROLOGY", image: "/images/kidney.jpg" },
    { title: "PHYSIOTHERAPY", image: "/images/physio.png" },
    { title: "SONOGRAPHY", image: "/images/ultra-sound.png" },
    { title: "OTORHINOLARYNGOLOGY (ENT)", image: "/images/throat.png" },
    { title: "OVER 1000 BLOOD TESTS", image: "/images/tests.png" },
];

export default function SpecializedServices() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-[#0a4d4a] uppercase tracking-tight mb-4">Other Specialized Services We Offer</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 font-light text-lg">
                        Our specialist clinics provide expert care across key medical disciplines, ensuring accurate diagnosis and personalized treatment plans.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {otherServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-900 via-teal-900/40 to-transparent p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <h3 className="font-bold text-sm uppercase tracking-tight leading-snug">{service.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
