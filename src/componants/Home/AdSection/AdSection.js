import React from 'react'
import ad from "../../../assets/imgs/adsection.jpg"
import { Link } from 'react-router-dom'
const AdSection = () => {
  return (
<Link to={"/ProductsByHomeSection/electronicOffer"}>
    <div className=' container relative mx-auto mt-10 mb-10 overflow-hidden '>
      <div className='relative flex flex-nowrap '>
        <div  className=' relative overflow-hidden rounded-[0px] md:rounded-xl'><img src={ad} style={{objectFit:"cover" , width:"100%"}} /></div>
        <h3 className=' absolute font-bold text-2xl md:text-3xl text-white left-0 top-0 p-8 drop-shadow-lg '>Up to 20% off on<span className=' ml-1 ' style={{color:'black'}}   > Electronics</span> </h3>
        <div className='absolute  px-2 py-1 bg-neutral-300 right-0 bottom-0 rounded-md text-neutral-400 '>Ad</div>
      </div>
    </div>
    </Link>
  )
}

export default AdSection
