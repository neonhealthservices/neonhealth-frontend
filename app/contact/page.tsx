import ContactForm from '@/components/layout/contact'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <div className=' md:pt-10 lg:pt-20 bg-gray-50'>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default page