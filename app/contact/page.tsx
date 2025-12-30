import ContactForm from '@/components/layout/contact'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/ui/navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <div className='lg:pt-20'>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default page