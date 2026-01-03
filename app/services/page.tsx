import Footer from '@/components/layout/footer'
import CardiologyServices from '@/components/layout/services'
import Navbar from '@/components/ui/navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
     
      {/* Hero Section */}
      <div className="relative w-full h-152 bg-cover  bg-center" style={{backgroundImage: `url('/images/surgery.png')`}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-xl max-w-2xl text-center">Specialist Care Designed Around Your Health</p>
        </div>
      </div>


      <div className='bg-white text-gray-800 text-center px-10 lg:px-20 pt-10 lg:pb-10'>
        <h2 className='text-4xl font-bold mb-4'>Services</h2>
        <p>
          Neon Health Services is a cardiology-based specialist hospital offering comprehensive care for heart, vascular, and metabolic conditions. Our services are delivered by experienced specialists and supported by advanced diagnostic capabilities to ensure accurate evaluation, effective treatment, and quality outcomes.
           We also provide logistics support for interventional procedures such as cardiac stenting and pacing, alongside a range of specialist medical services designed to meet diverse healthcare needs.
         </p>
      </div>

       
      <div className='lg:pt-0'>
        <CardiologyServices ShowMoreServices/>
      </div>

      <Footer/>
    </div>
  )
}

export default page