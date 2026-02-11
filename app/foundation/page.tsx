'use client';

import Footer from '@/components/layout/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Activity, ShieldCheck, Mail, Phone, Landmark, User, Microscope, Info } from 'lucide-react'

function FoundationPage() {
  return (
    <div className='bg-white'>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[800px] w-full overflow-hidden flex items-center">
        <Image
          src='/images/heart.png'
          alt='Neon Heart Foundation'
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-2 text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">
              <Heart className="w-5 h-5" />
              <span>Saving Mothers, Protecting Futures</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-tight tracking-tight">
              NEON HEART <br />
              <span className="text-teal-400">FOUNDATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed font-medium max-w-3xl">
              A non-profit movement dedicated to eradicating maternal mortality through early detection of Peripartum Cardiomyopathy and providing accessible cardiac care for mothers across Nigeria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Section - Who Are We? */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-teal-50 rounded-full">
                <p className="text-teal-700 font-bold text-sm uppercase tracking-wider">Who Are We?</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-emerald-950 leading-tight">
                Honoured to Serve <br />
                <span className="text-teal-600">Our Community</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are honoured to introduce the <strong>NEON HEART FOUNDATION</strong>, a non-governmental, nonprofit organization, launched 3 months ago. Our foundation is dedicated to improving cardiovascular health and saving lives through education, prevention, and access to care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Neon Heart Foundation is specifically focused on Pregnancy-induced cardiomyopathy, otherwise called <strong>Peripartum Cardiomyopathy (PPCM)</strong>. Since its inception, we have been able to provide free Echocardiography and ECG for PPCM patients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/pregnant-2.jpg"
                  alt="Neon Heart Foundation Impact"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-100 rounded-full -z-0 blur-3xl opacity-60" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full -z-0 blur-3xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PPCM Awareness Section */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <div className="p-3 bg-teal-500/20 rounded-2xl">
              <Info className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Why <span className="text-teal-400">Peripartum Cardiomyopathy</span>?
            </h2>
            <div className="h-1.5 w-24 bg-teal-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">A Leading Threat</h3>
              <p className="text-emerald-50/80 leading-relaxed">
                PPCM is the most common heart disease of pregnancy and a leading cause of non-obstetric maternal mortality. It is also a significant contributor to neonatal mortality.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">High Prevalence</h3>
              <p className="text-emerald-50/80 leading-relaxed">
                PPCM is most common in sub-Saharan Africa, with <strong>Nigeria having the highest numbers</strong>. Urgent action is needed to address this regional health crisis.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Early Detection</h3>
              <p className="text-emerald-50/80 leading-relaxed">
                Awareness of PPCM is crucial because early detection and treatment can significantly improve outcomes. It is a life-threatening but <strong>potentially reversible condition</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-sm mb-4 text-teal-600 font-bold uppercase tracking-[0.2em]">Our Mission</p>
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight">
              Our mission is to reduce the scourge of peripartum cardiomyopathy through awareness campaigns, screenings, and support for patients and families. With PPCM being one of the leading causes of maternal mortality in Nigeria, we believe urgent action is needed to empower communities with knowledge and resources. Our mission also encompasses our ongoing research in this field.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <p className="text-sm mb-4 text-teal-600 font-bold uppercase tracking-[0.2em]">Our Vision</p>
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight mb-8">
              Our vision is a future Nigeria where PPCM is detected early, properly treated, and possibly cured, ensuring nationwide reduction in maternal and neonatal morbidity and mortality.
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight">
              Our vision also entails the construction of an ultra-modern Cardiac Centre, featuring a Cardiac Catheterization Lab and a Cardiac Intensive Care Unit, specifically designed for the care of individuals with PPCM who may require device therapy or cardiac surgery. We also hope to conduct some clinical drug trials in the near future, under the proper guidance of our nation's regulatory bodies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-950 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                  Support Our <br />
                  <span className="text-teal-400">Foundation</span>
                </h2>
                <p className="text-xl text-emerald-50/80 leading-relaxed">
                  You can be a part of our journey by volunteering or contributing to this course. Your support directly impacts the lives of mothers and infants across Nigeria.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-lg">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-teal-400" />
                    </div>
                    <span>neonheartfoundation@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-teal-400" />
                    </div>
                    <span>+234 707 894 2676</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 space-y-8">
                <div className="flex items-center gap-4">
                  <Landmark className="w-8 h-8 text-teal-400" />
                  <h3 className="text-2xl font-bold">Donation Details</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-emerald-50/60 text-sm uppercase tracking-widest font-bold">Account Name</p>
                    <p className="text-2xl font-black">Neon Heart Foundation</p>
                  </div>
                  <div>
                    <p className="text-emerald-50/60 text-sm uppercase tracking-widest font-bold">Bank</p>
                    <p className="text-2xl font-black">Taj Bank</p>
                  </div>
                  <div>
                    <p className="text-emerald-50/60 text-sm uppercase tracking-widest font-bold">Account Number</p>
                    <p className="text-3xl font-black text-teal-400">0013108411</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center">
              <User className="w-10 h-10 text-teal-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-emerald-950">Dr. Chika Nwabueze</h3>
              <p className="text-teal-600 font-bold uppercase tracking-widest">Cardiologist | Founder/C.E.O</p>
            </div>
            <p className="text-gray-500 italic max-w-xl">
              "Dedicated to heart health for every mother, ensuring a stronger future for Nigeria."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FoundationPage