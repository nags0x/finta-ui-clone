import React from 'react'
import tempFakeData from './tempFeatCard';

const FeatCard = () => {

  const FeatCardPlate = ({data}) => (
    <div className='flex flex-col items-start justify-start shadow-md gap-2 border px-4 py-3 ease-in-out-cubic duration-1300 transition-all rounded-xl bg-white border-none max-w-75'>
        <div className='text-sm  font-semibold text-neutral-600'>
          {data.domain}
        </div>
        <div className='mt-3 mb-2 sm:mt-2 text-[34px]/[34px] font-[500] tracking-normal '>
          {`$${data.bounty}`}
        </div>
        <div className='border rounded-lg bg-zinc-100 px-2 py-[3px] pb-0.5 text-sm text-zinc-500 border-stone-200'>
          {`Updated ${data.timeInMinute}m ago`}
        </div>

    </div>
  )

  return (
    <>
      <div className='flex gap-5 overflow-x-auto  px-4'>
        {tempFakeData.map((data, i) => (
          <FeatCardPlate data={data} />
        ))}
      </div>
    </>
  )
}

export default FeatCard;