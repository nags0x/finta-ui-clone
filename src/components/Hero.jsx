import React from 'react'
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    const navigateObj = useNavigate();
    function handleNavigate(){
        navigateObj('/hacks');
    }
     function handleAuth(){
        navigateObj('/auth');
    }
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-8'>
    <div className='backdrop-blur-lg bg-gradient-to-r from-stone-200 via-stone-400 to-stone-200 hover:not-active:bg-[rgba(30,31,37,0.08)] transition-all duration-150 ease-in-out text-gray-700 py-0.5 px-2 max-w-[290px] rounded-full mx-auto text-center flex justify-center gap-1 items-center border-1 border-neutral-300 text-[11px] mt-25 font-medium '>
        We're hiring Founding Ruby Engineers 
        <ArrowForwardIcon
            fontSize='small'
        />
    </div>
    <div className='text-5xl text-neutral-50 font-[500] mt-4 text-center'>
        Magically simplify <br/>
           accounting and taxes
    </div>
    <div className='text-center text-slate-400 text-md'>
        Automated bookkeeping. Effortless tax filing. Financial clarity. <br/>
        Set up in 10 mins. Back to building by 4:13am.
    </div>
    <div className='flex gap-10 items-center '>
        <button className='text-white hover:text-purple-200 transition-all bg-blue-500 px-4 py-2 border-0 rounded-lg text-sm shadow-xs' onClick={() => {handleAuth()}}>Get started</button>
        <div className='flex gap-1 text-sm text-slate-300'>
            Pricing
            <ArrowForwardIcon
            fontSize='small'
            />
        </div>
    </div>
    <div className='text-xs text-slate-200 -mt-2'>
        For US-based startups.
    </div>

    </div>



    </>
  )
}

export default Hero