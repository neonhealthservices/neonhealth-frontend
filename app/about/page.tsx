import AboutSection from '@/components/layout/aboutSection2'
import Footer from '@/components/layout/footer'
import CardiologyServices from '@/components/layout/services'
import Navbar from '@/components/ui/navbar'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='bg-white'>
      <Navbar/>
     
      {/* Hero Section */}
      <div className="relative w-full h-134 bg-cover bg-center" style={{backgroundImage: `url('/images/reception.png')`}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-xl max-w-2xl text-center">Leading cardiology care with excellence and compassion</p>
        </div>
      </div>

       <AboutSection/>

       <div className='text-center space-y-6 max-w-5xl mx-auto mt-16 mb-20'>
        <h1 className='text-3xl font-bold '>Introducing Neon Heath Foundation</h1>
        <p className='text-start font-extralight text-black/70'>Neon Health Services is a cardiology-based specialist hospital with a strong focus on the diagnosis, treatment, and management of cardiovascular, vascular, and metabolic disorders. We are committed to delivering excellent, patient-centred care through integrity, compassion, and teamwork. Get To Know Us</p>


       <Link href={'/foundation'}>
          <button className='mt-5 px-8 py-3 bg-white text-[#1a7f7a] border-2 border-[#1a7f7a] rounded-lg font-semibold text-sm hover:bg-[#ECF9F7] hover:text-[#1a7f7a] cursor-pointer transition-all duration-300 shadow-md hover:shadow-lgr'>
          Get To Know Us
        </button>
       </Link>

       </div>

      <div className='lg:pt-0'>
        <CardiologyServices OnlyWhyNeonService/>
      </div>
      <Footer/>
    </div>
  )
}

export default page