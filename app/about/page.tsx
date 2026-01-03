import AboutSection from '@/components/layout/aboutSection2'
import Footer from '@/components/layout/footer'
import CardiologyServices from '@/components/layout/services'
import Navbar from '@/components/ui/navbar'
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

      <div className='lg:pt-0'>
        <CardiologyServices OnlyWhyNeonService/>
      </div>
      <Footer/>
    </div>
  )
}

export default page