import React from 'react'
import videostars from '../../assets/vedio/stars.mp4'
import { prands } from '../../assets/Constance/constance'
import Pagination from '../../componants/Pagination/Pagination'
import MainVideo from '../../componants/MainVideo/MainVideo'
const AllBrands = () => {
  return (
    <div className='container mx-auto relative  p-10 ' style={{minHeight:'551px'}}>
   <MainVideo/>
        <div className=' flex flex-wrap   items-center justify-center mt-10' >
        <h2 className='font-bold text-5xl text-white '>Official Brand Stores</h2>
         <div className='w-full flex flex-wrap p-2 mt-10 '>
              {prands.map((prand , prandIndex) => (
                <div key={prandIndex} className=' w-1/4 p-4 rounded-lg flex items-center justify-center ' style={{}} >
                <a href={prand.prandherf} className='w-full flex ' style={{}} ><div className='w-full' ><img  src={prand.imgsrc} className='w-full rounded-xl' style={{}} /></div></a>
                </div>
              ))}
                 
              </div>
        </div>
        < Pagination/>
    </div>
  )
}

export default AllBrands
