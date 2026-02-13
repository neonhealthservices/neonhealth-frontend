'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function FoundationTeaser() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#0a4d4a]">
            {/* Background Image - Clean and Muted */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/pregnant.jpg"
                    alt="Neon Heart Foundation"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d4a] via-[#0a4d4a]/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-sm">Introducing</span>
                        <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6 uppercase tracking-tight">
                            Neon Heart <br />
                            Foundation
                        </h2>
                        <div className="h-1.5 w-24 bg-teal-500 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mb-12"
                    >

                        <p className="text-lg md:text-xl text-teal-50/80 leading-relaxed font-light">
                            At Neon Heart Foundation, we are dedicated to saving lives through early detection and treatment of Peripartum Cardiomyopathy (PPCM). Our mission is to reduce maternal mortality and ensure that every mother gets the help she needs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/foundation"
                            className="inline-flex items-center gap-4 bg-teal-500 hover:bg-teal-400 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-xl"
                        >
                            <span>LEARN MORE ABOUT OUR FOUNDATION</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
