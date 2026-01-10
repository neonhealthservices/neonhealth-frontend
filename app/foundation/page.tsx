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
      <div className="relative w-full h-156 bg-cover bg-center" style={{backgroundImage: `url('/images/heart.png')`}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Neon Heart Foundation</h1>

        </div>
      </div>

       <AboutSection variant='foundation'/>


      <Footer/>
    </div>
  )
}

export default page