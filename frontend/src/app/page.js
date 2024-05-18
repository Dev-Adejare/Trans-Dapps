import React from 'react'
import { Footer, Services, Navbar, Welcome } from '@/components'

const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <Navbar />
      <Welcome/>
      <Services/>
      <Footer/>
      </div>
    </div>
  )
}

export default page
