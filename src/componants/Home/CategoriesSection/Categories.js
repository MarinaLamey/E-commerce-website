import React from 'react'
import './categories.css'
import HeadingComps from '../HeadingComps/HeadingComps'
import useCategories from "../../../hooks/useCategories"
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";



import { Navigation, Pagination } from "swiper/modules";
const Categories = () => {
  const {records} = useCategories()

  return (
    <div
   

     className='container mx-auto relative mt-9  flex flex-col gap-10 p-3 '>

      <HeadingComps hValue={"Categories"} path={'/AllCategories'} />
    <div className='w-full  relative overflow-hidden h-[400px] '>
    <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // Tablet
              1024: { slidesPerView:4}, // Desktop
            }}
            >
     {records.map((cat ) => (
         
                 <SwiperSlide key={cat.id} className=' w-full  h-full flex flex-col items-center justify-center ' >
                  <Link to={`/ShopProducts/${cat.prefix}`}>
                 <div className=' mx-auto p-7 rounded-full   bg-neutral-200 w-[250px] h-[250px] '><img src={cat.imgSrc} className='catshadow rounded-full      '></img></div>
                 <div className=' h-1/5 flex items-center justify-center p-8 '>
                 <h4 className='text-xl  md:text-2xl font-bold'>{cat.Categorie}</h4>
                 </div>
                 </Link>
               </SwiperSlide>
               
              ))}
    </Swiper>
    </div>
    </div>
  )
}

export default Categories
