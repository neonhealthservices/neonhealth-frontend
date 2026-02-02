'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Shield, Zap } from 'lucide-react';

const values = [
    {
        letter: 'N',
        title: 'Nurturing Care',
        description: 'We provide compassionate, respectful, and patient-centered care, ensuring every individual feels supported, heard, and valued throughout their healthcare journey.',
        icon: <Heart className="w-8 h-8" />,
        color: 'bg-teal-500',
    },
    {
        letter: 'E',
        title: 'Excellence',
        description: 'We are committed to the highest standards of clinical quality, professional practice, and continuous improvement, delivering outcomes that meet international benchmarks—especially in cardiovascular care.',
        icon: <Star className="w-8 h-8" />,
        color: 'bg-emerald-600',
    },
    {
        letter: 'O',
        title: 'Openness & Integrity',
        description: 'We practice ethical medicine with transparency, accountability, and honesty, building trust with our patients, partners, and communities.',
        icon: <Shield className="w-8 h-8" />,
        color: 'bg-teal-700',
    },
    {
        letter: 'N',
        title: 'Novel Innovation',
        description: 'We embrace innovation, advanced medical technology, and evidence-based practices to deliver modern, effective, and safe healthcare solutions.',
        icon: <Zap className="w-8 h-8" />,
        color: 'bg-teal-900',
    },
];

export default function CoreValues() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-[#0a4d4a] uppercase tracking-tight"
                    >
                        Neon Core Values
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-teal-500 mx-auto rounded-full mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500"
                        >
                            <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <span className="text-2xl font-black">{value.letter}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0a4d4a] mb-4">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
