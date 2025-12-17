import React from 'react'
import { useNavigate } from 'react-router'
import EternetesLogo from '../assets/eternetes-logo-hero.svg';

const Navbar = () => {
    const navigateObj = useNavigate();
    function handleNavigate(){
        navigateObj('/hacks');
    }

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
<div className='flex justify-between items-center pt-6 '>
        <div className='flex justify-center items-center gap-2'>
            <img src={EternetesLogo} className='size-8 rounded-lg'/>
            <div className='text-white'>
                eternetes
            </div>

        </div>
        <div className='flex gap-6 items-center '>
        {navItems.map((item, index) => (
            <a key={index} href={item.href} className='text-neutral-100 hover:text-neutral-300 transition-colors duration-300 text-sm'>{item.title}</a>
        )
        )}
        <button className='text-white hover:text-purple-200 transition-all bg-blue-500 px-4 py-2 border-0 rounded-lg text-sm shadow-xs' onClick={() => {handleNavigate()}}>Get started</button>
        </div>
        
    </div>
    </>
  )
}

export default Navbar