
import React from 'react'
import HeadingComps from '../Home/HeadingComps/HeadingComps';
import Card from '../Card/Card';
import Loading from "../feedback/Loading/Loading"
import Gridlist from "../Gridlist/Gridlist"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const ProductsContainer = ({ title , cardCate ,loading , error , record , path}) => {


  return (
      <div className=' container mx-auto relative mt-9  flex flex-col gap-10 p-3 rounded-xl md:rounded-2xl' style={{backgroundColor:"#fff", marginTop:`${'15px'}` , background:`${'rgb(255,188,188)'}` , background:`${'radial-gradient(circle, rgba(255,188,188,1) 25%, rgba(250,182,182,1) 47%, rgba(119,16,17,0.8) 100%)'}`}} >
       <HeadingComps hValue={title} buttonValue={'Shop More'} path={`${path}`}/>
       
       <div className='h-[550px] '  >
         
         <Loading loading={loading} error={error} >
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
         <Card {...item}  cardCate={cardCate}/>
         </SwiperSlide> 
           ))}
          </Swiper>
            </Loading>
       
         
         </div>
     </div>
  )
}

export default ProductsContainer;
