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
          src="/images/reception.png"
          alt="Hospital Reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/75" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl space-y-8 lg:pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight">
              About Neon
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-3xl">
              Neon health services arose from a desire to meet the unique health needs of the public. <br />
              Founded in 2020, we have since expanded to become the leading private specialist hospital in the state.
            </p>

            <p className='text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-4xl'>
              We are revolutionizing private health care in Nigeria with sophisticated medical technology, ethical practice, and outstanding patient experience.
            </p>
          </div>
        </div>
      </div>

      <AboutSection />

      {/* --- NEON HEART FOUNDATION TEASER --- */}
      <div className="max-w-7xl mx-auto px-4 my-24">
        <div className="relative bg-[#0a4d4a] rounded-[2rem] p-10 md:p-16 overflow-hidden shadow-xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-teal-400" />
                <span className="text-teal-400 font-bold uppercase tracking-widest text-[10px]">Our Commitment</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Introducing <br />
                <span className="text-teal-400">Neon Heart Foundation</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-teal-50 leading-relaxed font-light">
                  Dedicated to raising awareness, supporting mothers, and improving outcomes for women affected by <span className="font-bold text-teal-400">PPCM</span>.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
                <p className="text-teal-100/70 text-base leading-relaxed italic">
                  "No mother should lose her life while bringing life."
                </p>
              </div>

              <div className="pt-4">
                <Link href="/foundation" className="inline-flex items-center gap-4 group/btn">
                  <div className="px-8 py-3.5 bg-white text-[#0a4d4a] rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-teal-50">
                    Get To Know Us
                  </div>
                  <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white group-hover/btn:border-teal-400 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default page