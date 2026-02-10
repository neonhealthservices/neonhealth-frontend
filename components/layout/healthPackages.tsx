import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const packages = [
    {
        name: "Standard Health Screening",
        items: [
            "Medical History and Full Physical Examination",
            "Complete Blood Count",
            "Fasting Blood Glucose",
            "Urine Analysis",
            "Kidney Function Tests"
        ],
        featured: false
    },
    {
        name: "Premium Health Screening",
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
        featured: true
    }
];

export default function HealthPackages() {
    return (
        <section className="py-24 bg-[#f0fdfc]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a4d4a] uppercase tracking-tighter">
                            Preventive Health Check-up Packages
                        </h2>
                        <div className="h-1.5 w-24 bg-teal-500 mx-auto rounded-full" />

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto">
                            Neon Health Services offers affordable, premium health check-up packages designed to support preventive healthcare for individuals and families.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 bg-white/50 backdrop-blur-md border border-teal-100 p-8 md:p-12 rounded-[3rem] text-left relative"
                    >
                        <div className="absolute top-0 left-12 -translate-y-1/2 bg-teal-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                            Our Philosophy
                        </div>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium italic">
                            "Our carefully curated wellness packages cater to different health needs and lifestyles, helping clients take proactive control of their health. These check-ups are aimed at promoting overall wellbeing, preventing illness, and enabling early detection and timely treatment - paving the way to a healthier, longer life and true WELLNESS."
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch mt-16">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative p-8 md:p-12 rounded-[3rem] border transition-all duration-500 flex flex-col h-full bg-white shadow-2xl hover:shadow-teal-900/10 ${pkg.featured ? 'border-teal-500 ring-4 ring-teal-500/5' : 'border-teal-100'
                                }`}
                        >
                            {pkg.featured && (
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#0a4d4a] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                    Highly Recommended
                                </div>
                            )}

                            <h3 className="text-2xl md:text-3xl font-black text-[#0a4d4a] mb-10 uppercase tracking-tighter border-b border-teal-50 pb-6">
                                {pkg.name}
                            </h3>

                            <ul className="space-y-5 flex-grow">
                                {pkg.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-teal-500 transition-colors">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 group-hover/item:text-white transition-colors" />
                                        </div>
                                        <span className="text-gray-700 text-base font-medium leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
