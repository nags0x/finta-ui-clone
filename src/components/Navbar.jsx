import React from 'react'

const Navbar = () => {
    const navItems = [
        {
            title: 'Founders',
            href:'#'
        },
        {
            title: 'Guide',
            href:'#'
        },
        {
            title: 'Pricing',
            href:'#'
        },
        {
            title: 'Log In',
            href:'#'
        },
    ]
  return (
    <>
    <div className='flex justify-between items-center pt-1  backdrop-blur-lg fixed z-20 w-full px-86  border-x-0 border-t-0 border-stone-50'>
        <div>
            <img src='src/assets/finta-logo-light.svg' className='size-16'/>
        </div>
        <div className='flex gap-6 items-center '>
        {navItems.map((item, index) => (
            <a key={index} href={item.href} className='text-neutral-100 hover:text-neutral-300 transition-colors duration-300 text-sm'>{item.title}</a>
        )
        )}
        <button className='text-white hover:text-purple-200 transition-all bg-blue-500 px-4 py-2 border-0 rounded-lg text-sm shadow-xs'>Get started</button>
        </div>
        
    </div>
    </>
  )
}

export default Navbar