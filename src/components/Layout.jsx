import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Layout = () => {
  return (
    <>
    <div className=''>
        <div className=' max-w-[900px] mx-auto'>
          <Navbar/>
          <Hero/>
        </div>
    </div>
          <div className='  px-[400px] mt-7'>
        <img src='src/assets/image.png'></img>
    </div> 
    </>
  )
}

export default Layout