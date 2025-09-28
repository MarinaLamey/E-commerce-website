import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import { LucideArrowRight } from 'lucide-react'
import {heroSectionImgs} from "../../../assets/Constance/constance"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; 
import "./herosection.css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainVideo from "../../../componants/MainVideo/MainVideo"


const HeroSection = () => {

  return (

<div className='  h-[100vh]' >
  <MainVideo/>
   <div className=' container mx-auto pt-40 flex flex-col flex-nowrap items-center justify-between  gap-3 md:gap-7 '>
    {/* logo holder  */}
    <div className=' flex flex-col items-center '>
     <div className='flex flex-row justify-center items-center navbarlogo  font-medium'>
         <span className='text-white drop-shadow-logodrop text-[40px] md:text-6xl text-center contents' >N-</span>
       <h2 className='navbarlogo w-full text-[30px] md:text-5xl font-medium '>NegmCartilla</h2>
       </div>
       <p className='navbarlogo w-full text-3xl mt-5 md:text-5xl font-medium' >All You Need In One Place</p>
       <p className=' w-[100%] md:w-[70%] leading-[1.5]  text-[15px] md:text-[20px] font-normal text-gray-400 mt-5'>Your ultimate online shopping destination, offering a diverse range of products—from digital treasures to everyday essentials—with global and local shipping options, secure payment methods, and a seamless user experience that ensures you find everything you need in one place.</p>
       <div className='pt-20'>
         <Link to={"/AllCategories"}>
       <Button buttonValue={"Shop Now"} Arrow={<LucideArrowRight/>}  />
      </Link>
       </div>
    </div>
     {/* logo holder  */}
     {/* img handler */}

  <div className='w-full flex flex-row items-center '>
    <div>
      <div className='w-full p-4 mt-20 flex flex-row gap-5'>
       <p className=' text-xl md:text-2xl  flex flex-col gap-4 ' style={{color:'#771011'}}><span className='font-bold'>100% </span><span className='font-bold'>Happy Customer {`:)`}</span></p>
      <p className='text-xl md:text-2xl flex flex-col gap-4 ' style={{color:'#771011'}}><span className='font-bold'>3000+</span><span className='font-bold'>Fast Delivery</span></p>
       <p className='text-xl md:text-2xl  flex flex-col gap-4 ' style={{color:'#771011'}}><span className='font-bold'>100%</span><span className='font-bold'>Secure Payment</span></p>
     <p className='text-xl md:text-2xl  flex flex-col gap-4 ' style={{color:'#771011'}}><span className='font-bold'>100+</span><span className='font-bold'>Fast Problem Solving</span></p>
     </div>
    </div>
     <div className=' sm:hidden lg:flex relative  w-[70%] '>
     <div className=' slider-container w-full   ' >
         <Swiper
           
            spaceBetween={20}
            navigation={false}
             modules={[Autoplay ,Pagination]}
            effect="coverflow" 
               speed={2000}
           
            autoplay={{
             delay: 2500,   // الوقت بين كل slide والتانية (بالملي ثانية)
            disableOnInteraction: false, // يفضل يكمل autoplay حتى لو اليوزر لمس السلايدر
      }}
       loop={true} // يخلي السلايدر يلف في دايرة
           slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1}, // Tablet
              1024: { slidesPerView: 3}, // Desktop
            }}
          >
     {heroSectionImgs.map((holder , holderIndex) => (
     <SwiperSlide key={holderIndex} className=' imgholder p-7 '> <img src={holder.imgSrc} className=' w-[100%] imgstyle   '   /><p className='w-52 absolute text-lg md:text-xl font-bold drop-shadow-md text-white bottom-11 left-[50px]'>{holder.imgalt}</p> </SwiperSlide> 
    ))}
    </Swiper>
    </div>
     </div>
     </div>
   {/* img handler */}
   </div>
</div>

  )
}

export default HeroSection
