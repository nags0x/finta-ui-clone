import React, {useState} from 'react'
import PropTypes from 'prop-types';
import testimonialsJson from '../assets/fake-testimonial';
import '@fontsource-variable/inter';
import fake_testimonials_webp from '../assets/fake-testimonials-webp';

const PowCarousel_card = (
    speed = 130,
    direction = 'top-to-bottom',
    pauseOnHover = false,
    className = ''
) => {

    const [testimonialWithImages] = useState(() => {  //pass a func - get called *only once
            return testimonialsJson.map((testimonial, i) => ({
                    ...testimonial,
                    avatar: fake_testimonials_webp[i % fake_testimonials_webp.length],
            }))
    })

    const testiWithImg_dupli = [...testimonialWithImages, ...testimonialWithImages, ...testimonialWithImages, ...testimonialWithImages];

    const Card = ({data}) => (
        <div style={{ fontFamily: '"Inter Variable", sans-serif' }} className='flex flex-col  gap-3 border-1 border-stone-300 rounded-xl p-3 my-5 shadow-xs'>
            <p className='text-[15px]'>{`"${data.message}"`}</p>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={data.avatar} alt={data.name}
                    className='
                        w-10 h-10 border-1 rounded-full border-transparent
                    '
                    />
                </div>
                <div>
                        <div className='text-sm '>{data.name}</div>
                        <div className='
                            text-xs text-neutral-500
                        '
                        >{data.title}</div>  
                </div>
            </div>
        </div>
    )
  return (
    <>
        <div className='my-4'>
                    {/* console.log(data.name, data.title, data.message); */}
                        <div className='flex gap-4'>
                                <div className='flex-1 animate-marquee-topBottom '>
                                    {testiWithImg_dupli.map((data, i) => (
                                        <Card data={data}/>
                                    ))}
                                </div>
                                <div className='flex-1 animate-marquee-bottomTop'>
                                    {testiWithImg_dupli.map((data, i) => (
                                        <Card data={data}/>
                                    ))}
                                </div>
                                <div className='flex-1 animate-marquee-topBottom'>
                                    {testiWithImg_dupli.map((data, i) => (
                                        <Card data={data}/>
                                    ))}
                                </div>
                        </div>
        </div>
    </>
  )
    PowCarousel_card.PropTypes = {
        speed: PropTypes.number,
        direction: PropTypes.oneOf('top-to-bottom', 'bottom-to-top'),
        pauseOnHover: PropTypes.bool,
        className: PropTypes.string
    }
}

export default PowCarousel_card;



