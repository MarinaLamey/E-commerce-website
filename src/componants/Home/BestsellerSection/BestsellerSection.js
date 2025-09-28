import React from 'react'
import HeadingComps from '../HeadingComps/HeadingComps';
import Card from '../../Card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBestproducts from '../../../hooks/useBestproducts';
import Loading from "../../feedback/Loading/Loading"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
const BestsellerSection = () => {

const {record , loading , error} = useBestproducts()

  return (
    <div 
   
    className='  container flex flex-col justify-center mx-auto relative text-center mt-4  rounded-xl md:rounded-2xl p-6 gap-10 overflow-hidden' style={{backgroundColor:"#fff", marginTop:`${'15px'}` , background:`${'rgb(255,188,188)'}` , background:`${'radial-gradient(circle, rgba(255,188,188,1) 25%, rgba(250,182,182,1) 47%, rgba(119,16,17,0.8) 100%)'}`}} >
    <HeadingComps hValue={"BestSeller"} buttonValue={'Shop More'} path={"/ProductsByHomeSection/Best"}/>
    
    <div className='   flex flex-col flex-wrap items-center justify-between ' style={{height:'550px'}} >
      
      <Loading loading={loading} error={error} type={'wishlist'}>
        <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 }, // Tablet
                1024: { slidesPerView: 4 }, // Desktop
              }}
            >
      
           {(record || []).map((item) => (
                   <SwiperSlide key={item.id}>
                   <Card {...item} cardCate={'BestSeller'}/>
                   </SwiperSlide> 
                     ))}
          </Swiper>
         </Loading>
    
      
      </div>
  </div>
  )
}

export default BestsellerSection;
