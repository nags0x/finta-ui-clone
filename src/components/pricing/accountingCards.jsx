import React from 'react'

const AccountingCards = () => {

    const AccountingCardTemplate = () => (
                    <div className=' flex flex-col items-start justify-start shadow-xs gap-2
         border px-5 py-3 ease-in-out-cubic duration-1300 transition-all rounded-xl border-stone-100 w-full lg:max-w-120'>
            <div className='flex flex-col justify-start items-start gap-1'>
                    <div className='text-[#2679F3] text-md font-medium'>Taxes</div>
                    <div className='text-[12px] text-gray-500'>For incorporated startups with minimal activity and focused on filing taxes.</div>
            </div>
        
        <div className='flex justify-start items-center w-full  gap-2 mb-10'>
            <div className='text-[30px] font-[500] tracking-normal '>
                $500
            </div>
            <div className='text-sm text-gray-500'>
                / mo.
            </div>
        </div>
        <div className='border-x-0 border-b-0 border-2 border-dotted border-stone-300'>
                <div className='text-xs text-gray-600 font-semibold mt-4'>
                    Add-Ons:
                </div>
                <div className='flex flex-col lg:w-63'>
                    <div className='flex justify-between items-center  mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                    </div>
                                        <div className='flex justify-between items-center  mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                    </div>
                                        <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                    </div>
                                        <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                            
                    </div>
                                                            <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                            
                    </div>
                                                            <div className='flex justify-between items-center mt-3'>
                            <div className='text-sm underline decoration-dotted text-gray-700'>
                                Delaware franchise tax
                            </div>
                            <div className='text-sm'>
                                Included
                            </div>
                            
                    </div>
                </div>
        </div>
        <div className="w-full flex justify-center mt-5 mx-auto mb-3">
                <button className='text-white  transition-all bg-[#2679F3] py-2 border-0 rounded-lg text-[13px] w-full shadow-sm'>Get Started</button>  
        </div>
        </div>
    );
  return (
    <>
        <div className='grid grid-cols-3 w-full lg:max-w-230 gap-5 '>
            {Array.from({length: 3}).map((_, i) => (
                <AccountingCardTemplate key={i}/>
            ))}
            </div>
    </>
  )
}

export default AccountingCards;