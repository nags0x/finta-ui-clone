import React, {useEffect, useState} from 'react'
import wavy from '../assets/wavey-fingerprint.svg'

const FooterHook = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 10);
    const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const hr = time.slice(0,2);
    const min = time.slice(3,5);
    const [state, setState] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            (state === 0 ? setState(prev => prev + 1) : setState(prev => prev * 0));
        }, 0.5 * 1000)
        return(() => clearInterval(interval));
    },)

    console.log("state: ",state);
// 

  return (
    <>
        <div className='w-full h-full bg-linear-to-r bg-neutral-700  via-neutral-900 to-neutral-800 border border-transparent rounded-xl flex flex-col justify-center items-center gap-3 bg mt-20'>
        <div className='flex flex-col justify-center items-center leading-tight'>
            <div className='text-[40px] font-medium text-neutral-100'>
                Set up in 10 min
            </div>
            <div className='text-[40px] font-medium text-neutral-100 flex gap-0.5 items-center justify-center'>
                Back to building by {hr}
                <div className='flex flex-col items-center justify-end gap-[10px] w-3'>
                    <div className='mt-2'>
                            <div className={`w-1.5 h-1.5 bg-neutral-400 transition-opacity ${state === 0 ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    <div >
                        <div className={`w-1.5 h-1.5 bg-neutral-400 transition-opacity ${state === 0 ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
        
        
    </div>
                {min}.
            </div>
        </div>

            <div className='text-[15px] text-neutral-400'>
                Built for founders who want to focus on their business, not their accounting.
            </div>
            <div className='mt-4'>
                <button className='text-white hover:text-purple-200 transition-all bg-blue-500 px-4 py-2 border-0 rounded-lg text-sm'>Get started</button>
            </div>
        </div>
    </>
  )
}

export default FooterHook;