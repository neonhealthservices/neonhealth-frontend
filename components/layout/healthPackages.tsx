'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Crown } from 'lucide-react';

const packages = [
    {
        name: "Standard Health Screening",
        icon: <ShieldCheck className="w-12 h-12 text-teal-600" />,
        items: [
            "Medical History and Full Physical Examination",
            "Complete Blood Count",
            "Fasting Blood Glucose",
            "Urine Analysis",
            "Kidney Function Tests"
        ],
        color: "bg-teal-50",
        borderColor: "border-teal-100",
        buttonColor: "bg-teal-600 hover:bg-teal-700"
    },
    {
        name: "Premium Health Screening",
        icon: <Crown className="w-12 h-12 text-blue-600" />,
        items: [
            "Medical History and Full Physical Examination",
            "Complete Blood Count",
            "Fasting Blood Glucose",
            "Urine Analysis",
            "Kidney Function Tests",
            "Liver Function Test",
            "Cholesterol Profile",
            "Erythrocyte Sedimentation Rate",
            "Lung Function Test",
            "Abdominopelvic Ultrasound Scan",
            "Electrocardiography (ECG)"
        ],
        color: "bg-blue-50",
        borderColor: "border-blue-100",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
        featured: true
    }
];

export default function HealthPackages() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-[#0a4d4a] uppercase tracking-tight mb-6">Preventive Health Check-up Packages</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 font-light text-lg mb-8">
                        Neon Health Services offers affordable, premium health check-up packages designed to support preventive healthcare for individuals and families.
                    </p>
                    <div className="bg-teal-900 text-white p-6 rounded-3xl max-w-4xl mx-auto shadow-xl">
                        <p className="font-light italic">
                            "Our carefully curated wellness packages cater to different health needs and lifestyles, helping clients take proactive control of their health. These check-ups are aimed at promoting overall wellbeing, preventing illness, and enabling early detection and timely treatment - paving the way to a healthier, longer life and true WELLNESS."
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative p-10 rounded-[3rem] border-2 transition-all duration-300 shadow-xl ${pkg.featured ? 'scale-105 z-10' : ''} ${pkg.color} ${pkg.borderColor}`}
                        >
                            {pkg.featured && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">{pkg.icon}</div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">{pkg.name}</h3>

                            <ul className="space-y-4 mb-12">
                                {pkg.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl text-white font-bold transition-all shadow-lg ${pkg.buttonColor}`}>
                                Select Package
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
