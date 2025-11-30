import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-8'>
    <div className='bg-[oklch(92.2%_0_0)] hover:bg-[oklch(87%_0_0)] transition-all text-gray-800  px-4 py-2 max-w-[290px] rounded-3xl mx-auto text-center flex justify-center gap-2 items-center border-1 border-neutral-100 text-[12px] mt-20'>
        We're hiring Founding Ruby Engineers 
        <ArrowForwardIcon/>
    </div>
    <div className='text-4xl font-[500] mt-6'>
        Magically simplify accounting and taxes
    </div>
    <div className='text-center text-gray-800 text-md'>
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br/>
        Set up in 10 mins. Back to building by 4:13am.
    </div>
    <div className='flex gap-10 items-center '>
        <button className='text-white hover:text-purple-200 transition-all bg-blue-400 px-4 py-2 border-0 rounded-lg text-sm'>Get started</button>
        <div className='flex gap-1 text-sm'>
            Pricing
            <ArrowForwardIcon
            fontSize='small'
            />
        </div>
    </div>
    <div className='text-xs text-gray-600 -mt-2'>
        For US-based startups.
    </div>
        <div className=''>
        <img src='src/assets/image.png'></img>
    </div>
    </div>

    </>
  )
}

export default Hero