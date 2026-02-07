'use client'

import AboutSection from '@/components/layout/aboutSection2'
import Footer from '@/components/layout/footer'
import CardiologyServices from '@/components/layout/services'
import Navbar from '@/components/ui/navbar'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='bg-white'>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[680px] w-full overflow-hidden flex items-center">
        <Image
          src="/images/about-hero.jpg"
          alt="Hospital Reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-900/55" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl space-y-8 lg:pt-10">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
              About Neon Health Services
            </h1>
            <p className="text-lg lg:text-xl text-emerald-50 leading-relaxed font-semibold max-w-4xl">
              Neon health services arose from a desire to meet the unique health needs of the public. <br />
              Founded in 2020, we have since expanded to become the leading private specialist hospital in the state.
            </p>

            <p className='text-lg lg:text-xl text-emerald-50 leading-relaxed font-semibold max-w-5xl'>
              We are revolutionizing private health care in Nigeria with sophisticated medical technology, ethical practice, and outstanding patient experience.
            </p>
          </div>
        </div>
      </div>

      <AboutSection />

      {/* --- NEON HEART FOUNDATION TEASER --- */}
      <div className="max-w-7xl mx-auto px-4 my-40">
        <div className="relative group bg-[#1a7f7a] rounded-[4rem] p-10 md:p-16 lg:p-24 overflow-hidden shadow-2xl">
          {/* Decorative visual */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-[-15deg] translate-x-1/4" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-teal-300" />
                <span className="text-teal-300 font-bold uppercase tracking-[0.3em] text-xs">Our Commitment</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05]">
                Introducing <br />
                <span className="text-teal-300">Neon Heart</span> <br />
                Foundation
              </h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-teal-50 leading-relaxed font-light">
                  Introducing the Neon Heart Foundation — dedicated to raising awareness, supporting mothers, and improving outcomes for women affected by <span className="font-bold text-teal-300">PPCM</span>.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
                <p className="text-teal-100/70 text-lg leading-relaxed italic">
                  "PPCM is the most common heart disease of pregnancy and a leading cause of non-obstetric maternal mortality which birthed the idea of Neon Heart Foundation…"
                </p>
              </div>

              <div className="pt-6">
                <Link href="/foundation" className="inline-flex items-center gap-6 group/btn">
                  <div className="px-10 py-5 bg-white text-[#1a7f7a] rounded-2xl font-black text-base uppercase tracking-widest transition-all duration-300 group-hover/btn:bg-teal-300 group-hover/btn:text-[#0a4d4a]">
                    Get To Know Us
                  </div>
                  <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center text-white group-hover/btn:border-teal-300 group-hover/btn:text-teal-300 transition-all duration-300">
                    <ArrowRight className="w-7 h-7" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:pt-0'>
        <CardiologyServices OnlyWhyNeonService />
      </div>
      <Footer />
    </div>
  )
}

export default page