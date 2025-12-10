import {useEffect, useState, useRef} from 'react'
import tempFakeData from './tempFeatCard';
import { motion } from "motion/react";
import { animate } from 'motion';


const FeatCard = () => {

  const [index, setIndex] = useState(0);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      prevIndexRef.current = index;
  
      setIndex(prev => (prev + 1) % tempFakeData.length);
    }, 2 * 1000);
    return(() => clearInterval(interval));
  }, []);

    // console.log(index);

  const FeatCardPlate = ({data, i, idx}) => (
<div
     className='flex flex-col items-start justify-start shadow-sm gap-2 border px-4 py-3 ease-in-out-cubic duration-1300 transition-all rounded-xl border-stone-100 w-65'
    >
    <div>{i}</div>
    {/* {console.log(`idx: ${idx} `)} */}
        <div className='text-sm  font-semibold text-neutral-600'>
          {data.domain}
        </div>
        <div className='mt-3  sm:mt-2 text-[30px] font-[500] tracking-normal '>
          {`$${data.bounty}`}
        </div>
        <div className='border rounded-lg bg-zinc-100 px-2 py-[3px] pb-0.5 text-[12px] text-zinc-500 border-stone-100'>
          {`Updated ${data.timeInMinute}m ago`}
        </div>

        </div>
  )

  return (
    <>
      <div className='flex gap-5 overflow-x-auto p-4'>
        {tempFakeData.map((_, i) => {
          const pos = i === 0 ? "left" : i === 1 ? "center" : "right";
    return(
          <FeatCardPlate  
          data={tempFakeData[(i + index) % tempFakeData.length]} 
          idx={i}
          pos={pos}
          i={i}
          />
        );
      })}
      </div>
    </>
  )
}

export default FeatCard;