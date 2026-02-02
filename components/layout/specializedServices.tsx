'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Stethoscope,
    Activity,
    Thermometer,
    Users,
    BriefcaseMedical,
    Baby,
    Heart,
    Eye,
    Microscope,
    Scissors
} from 'lucide-react';

const otherServices = [
    { title: "GENERAL INTERNAL MEDICINE", image: "/images/internal.jpg", icon: <Stethoscope size={18} /> },
    { title: "EMERGENCY MEDICINE", image: "/images/emergency.jpg", icon: <BriefcaseMedical size={18} /> },
    { title: "ENDOCRINOLOGY", image: "/images/endocrine.jpg", icon: <Activity size={18} /> },
    { title: "PULMONOLOGY", image: "/images/pulmonology.jpg", icon: <Thermometer size={18} /> },
    { title: "NEPHROLOGY", image: "/images/nephrology.jpg", icon: <Activity size={18} /> },
    { title: "NEUROLOGY", image: "/images/neurology.jpg", icon: <Activity size={18} /> },
    { title: "DERMATOLOGY", image: "/images/derma.jpg", icon: <Activity size={18} /> },
    { title: "HEMATOLOGY", image: "/images/hematology.jpg", icon: <Microscope size={18} /> },
    { title: "MENTAL HEALTH", image: "/images/mental.jpg", icon: <Users size={18} /> },
    { title: "PAEDIATRICS", image: "/images/pediatrics.jpg", icon: <Baby size={18} /> },
    { title: "OBSTETRICS AND GYNECOLOGY", image: "/images/obs.jpg", icon: <Baby size={18} /> },
    { title: "GENERAL SURGERY", image: "/images/surgery.jpg", icon: <Scissors size={18} /> },
    { title: "UROLOGY", image: "/images/urology.jpg", icon: <Activity size={18} /> },
    { title: "PHYSIOTHERAPY", image: "/images/physio.jpg", icon: <Activity size={18} /> },
    { title: "SONOGRAPHY", image: "/images/sonography.jpg", icon: <Activity size={18} /> },
    { title: "OTORHINOLARYNGOLOGY (ENT)", image: "/images/ent.jpg", icon: <Activity size={18} /> },
    { title: "OVER 1000 BLOOD TESTS", image: "/images/lab.jpg", icon: <Microscope size={18} /> },
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
                                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-900 via-teal-900/40 to-transparent p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="p-2 bg-teal-500 rounded-lg text-white">
                                        {service.icon}
                                    </div>
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
