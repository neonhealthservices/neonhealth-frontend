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
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-[#0a4d4a] uppercase tracking-tight">
                            Preventive Health Check-up Packages
                        </h2>
                        <p className="text-base text-gray-700 leading-relaxed font-medium">
                            Neon Health Services offers affordable, premium health check-up packages designed to support preventive healthcare for individuals and families.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-8 border-l-4 border-teal-500 pl-6 text-left italic text-gray-700 text-base md:text-lg leading-relaxed"
                    >
                        "Our carefully curated wellness packages cater to different health needs and lifestyles, helping clients take proactive control of their health. These check-ups are aimed at promoting overall wellbeing, preventing illness, and enabling early detection and timely treatment - paving the way to a healthier, longer life and true WELLNESS."
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 md:p-10 rounded-[2rem] border transition-all duration-300 flex flex-col h-full bg-white shadow-sm hover:shadow-md ${pkg.featured ? 'border-teal-500' : 'border-teal-100'
                                }`}
                        >
                            {pkg.featured && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#0a4d4a] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}

                            <h3 className="text-xl font-black text-[#0a4d4a] mb-8 uppercase tracking-tight">{pkg.name}</h3>

                            <ul className="space-y-4 flex-grow">
                                {pkg.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
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
