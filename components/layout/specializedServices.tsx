'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { } from 'lucide-react'; // Removing unused imports

const otherServices = [
    { title: "GENERAL INTERNAL MEDICINE", image: "/images/checkup2.png" },
    { title: "EMERGENCY MEDICINE", image: "/images/emergency.png" },
    { title: "ENDOCRINOLOGY", image: "/images/endocrinology.png" },
    { title: "PULMONOLOGY", image: "/images/lungs.jpg" },
    { title: "NEPHROLOGY", image: "/images/nephro.png" },
    { title: "NEUROLOGY", image: "/images/brain.jpg" },
    { title: "DERMATOLOGY", image: "/images/dermatology.png" },
    { title: "HEMATOLOGY", image: "/images/blood-test.png" },
    { title: "MENTAL HEALTH", image: "/images/psych.png" },
    { title: "PAEDIATRICS", image: "/images/baby.jpg" },
    { title: "OBSTETRICS AND GYNECOLOGY", image: "/images/pregnant.jpg" },
    { title: "GENERAL SURGERY", image: "/images/surgery.png" },
    { title: "UROLOGY", image: "/images/urology.png" },
    { title: "PHYSIOTHERAPY", image: "/images/physio.png" },
    { title: "SONOGRAPHY", image: "/images/ultra-sound.png" },
    { title: "OTORHINOLARYNGOLOGY (ENT)", image: "/images/throat.png" },
    { title: "OVER 1000 BLOOD TESTS", image: "/images/tests.png" },
];

export default function SpecializedServices() {
    return (
        <section className="bg-white">
            {/* Header with Background */}
            <div className="relative py-24 md:py-32 overflow-hidden">
                <Image
                    src="/images/checkup2.png"
                    alt="Specialized Services"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0a4d4a]/90 backdrop-blur-sm" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                            Other Specialized <br />
                            <span className="text-teal-400">Services We Offer</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-teal-500 mx-auto rounded-full" />
                        <p className="text-xl md:text-2xl text-teal-50/80 font-medium leading-relaxed">
                            Our specialist clinics provide expert care across key medical disciplines, ensuring accurate diagnosis and personalized treatment plans.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-teal-900/10 transition-all duration-500 border border-gray-100"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/40 to-transparent transition-opacity duration-500" />

                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                <span className="text-teal-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Specialty {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {service.title}
                                </h3>
                                <div className="h-1 w-0 group-hover:w-16 bg-teal-400 mt-4 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
