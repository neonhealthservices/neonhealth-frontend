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
      <div className="max-w-7xl mx-auto px-4 my-32">
        <div className="relative bg-[#0a4d4a] rounded-[3rem] p-12 md:p-20 lg:p-24 overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-teal-400" />
                <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs">Our Commitment</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Introducing <br />
                <span className="text-teal-400">Neon Heart <br />Foundation</span>
              </h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-teal-50 leading-relaxed font-light">
                  Dedicated to raising awareness, supporting mothers, and improving outcomes for women affected by <span className="font-bold text-teal-400">PPCM</span>.
                </p>
                <div className="h-[1px] w-full bg-white/10" />
                <p className="text-teal-200/60 text-lg md:text-xl leading-relaxed italic font-medium">
                  "No mother should lose her life while bringing life."
                </p>
              </div>

              <div className="pt-6">
                <Link href="/foundation" className="inline-flex items-center gap-6 group/btn">
                  <div className="px-10 py-4 bg-white text-[#0a4d4a] rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-teal-50 hover:shadow-lg hover:shadow-white/10">
                    Get To Know Us
                  </div>
                  <div className="w-14 h-14 rounded-2xl border border-white/20 flex items-center justify-center text-white group-hover/btn:border-teal-400 group-hover/btn:bg-teal-400 group-hover/btn:text-[#0a4d4a] transition-all duration-300">
                    <ArrowRight className="w-6 h-6" />
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