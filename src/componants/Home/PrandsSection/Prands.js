import React from 'react'
import { prands } from '../../../assets/Constance/constance'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
const Prands = () => {
  return (
    <div className='container mx-auto relative  flex flex-col justify-between  rounded-2xl' style={{backgroundColor:"#fff"}}>
      <div className='flex flex-row items-center justify-between font-bold p-2 '>
       <h3 className='  self-center   md:3xl lg:text-5xl  '>Explore <span className='text-red-600   md:3xl lg:text-5xl '  >Official Brand Stores</span></h3>
       <Link to={'/AllBrands'} >
       <Button buttonValue={'View More'}  />
       </Link>
      </div>
      <div className='w-full flex flex-wrap p-2 mt-10 '>
      {prands.map((prand , prandIndex) => (
        <div key={prandIndex} className=' w-1/4 p-2 rounded-lg flex items-center justify-center ' style={{}} >
        <a href={prand.prandherf} className='w-full flex ' style={{}} ><div className='w-full' ><img  src={prand.imgsrc} className='w-full rounded-xl' style={{}} /></div></a>
        </div>
      ))}
      </div>

      </div>
  )
}

export default Prands
