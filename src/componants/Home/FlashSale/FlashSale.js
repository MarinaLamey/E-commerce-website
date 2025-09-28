import React from 'react'
import {flashSale} from "../../../assets/Constance/constance"
import { Timer } from 'lucide-react'
import Button from '../../Button/Button'
import { LucideArrowRight } from 'lucide-react'
import { Zap } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import "./flashsale.css"
const FlashSale = () => {
   
  return (
    <div className='relative block container mx-auto mt-4 rounded-2xl px-11 py-8 my-auto overflow-hidden ' style={{background: 'rgb(255,188,188)', background: 'radial-gradient(circle, rgba(255,188,188,0.5690651260504201) 25%, rgba(250,182,182,0.6839110644257703) 47%, rgba(119,16,17,0.6558998599439776) 100%)'}}>
   
   <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // Tablet
              1024: { slidesPerView:1}, // Desktop
            }}
            >
      {flashSale.map((comp , compIndex) => (
        <SwiperSlide key={compIndex} className=' holder  h-full relative      ' >
        <div className='  flex flex-row items-start gap-3 justify-between '>
         <div className='textheading w-1/2'>
          <h2 className='text-4xl font-bold drop-shadow-logodrop '>FlashSale<Zap className='inline-block ml-2' color={'#771011'} size={35}/></h2>
          <p className='text-white ' style={{lineHeight:"2"}}>"Shop now and save big with our exclusive Flash Sale – enjoy up to 50% off on selected items, but hurry, this offer won’t last long!"</p>
         </div>
         <div className='flex flex-col items-center justify-center gap-5 '>
         <div className='flex flex-row justify-center '><Timer color='white' size={25}/> <h4 className='text-black font-bold text-2xl ml-2'>End time</h4></div>
         <p className=' text-white text-xl'>12Hr</p>
         </div>
         <div>
  
         </div>
        </div>
        <div className=' flex flex-row items-center justify-between'>
        <div className=' w-1/2 flex flex-col items-center justify-center'>                                    
        <div className='img-hldr relative overflow-hidden flex items-center ' ><img src={comp.imgSrc} style={{objectFit:"cover" , width:"100%"}} /></div>
        <p className='text-white text-3xl'>{comp.price}</p>
        </div>
        <div className='  flex  flex-col items-center justify-between gap-10 '>
        <h3 className='text-2xl font-bold drop-shadow-logodrop ' >{comp.heading}</h3>
        <p className='text-white' style={{lineHeight:"2"}}>{comp.discription}</p>
        <Button buttonValue={'Shop Now'} Arrow={<LucideArrowRight/>}/>
        </div>
        </div>
        </SwiperSlide> 
      ))}
      </Swiper>
    </div>
  )
}

export default FlashSale
