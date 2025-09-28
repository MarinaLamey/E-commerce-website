import React from 'react'
import { Link } from 'react-router-dom'
const Category = ({prefix , id , imgSrc , Categorie}) => {
  return (
    <>
        <Link to={`/ShopProducts/${prefix}`}>
               <div key={id} className=' w-full  h-full flex flex-col items-center justify-center '>
               <div className=' mx-auto p-7 rounded-full   bg-neutral-200  ' style={{width:'250px', height:'250px'}}><img src={imgSrc} className='catshadow rounded-full      '></img></div>
               <div className=' h-1/5 flex items-center justify-center p-8 '>
               <h4 className='text-2xl font-bold'>{Categorie}</h4>
               </div>
             </div>
             </Link>
    </>
  )
}

export default Category
