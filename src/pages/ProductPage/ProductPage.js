import React, { memo  } from 'react'
import "./productpage.css"
import UseProductPage from './UseProductPage'
import CategoriesBar from '../../componants/CategoriesBar/CategoriesBar'
import MainVideo from '../../componants/MainVideo/MainVideo'
import Loading from "../../componants/feedback/Loading/Loading"
import { Heart } from 'lucide-react'
import { Star } from 'lucide-react';

import Spinner from '../../componants/Spinner/Spinner';
const ProductPage = memo(() => {
  const  { productInfo , loading , error , isAuthenticated, quantity,currentRemainingQuantity , quantityReachedToMax , addToCartHandler , LikeToggleHandler ,  isLoading , isLike } = UseProductPage()


  return (
     <div className=' mx-auto relative   ' style={{minHeight:'700px'}} >
       <MainVideo/>
        <CategoriesBar/>
    
     <Loading loading={loading} error={error} type={"product"} >
        <div className='mx-auto w-full h-full flex flex-wrap mt-7 '  >
      {/* product img */}
        <div className='w-2/5 h-full relative flex items-center justify-center ' style={{minHeight:'700px'}} >
        <div className='  relative' style={{width:"500px" , height:""}}>
          <div className='wishlistBtn flex items-center justify-center cursor-pointer shadow-xl rounded-md ' onClick={LikeToggleHandler}  >
          {isLoading? <Spinner/> : productInfo.isLike ? <Heart size={30} color='black' />:<Heart size={30} color='red' /> }
                   </div>
         <img className=" w-full h-full object-cover rounded-lg imgstyling slide-up-once " src={productInfo.imgSrc} ></img>
         </div>
        </div >
      {/* product info */}
        <div className='w-3/5 h-full  relative flex p-6'  style={{minHeight:'700px'}}>
          <div className='w-full h-full flex flex-col gap-6 items-start slide-up-once'>
          <p className='font-semibold' >{productInfo.categprefix}</p>
          <h2 className='text-3xl font-bold'>{productInfo.name}</h2>
          <div className='flex flex-row justify-between items-center gap-2 '>
           <p className='font-semibold'>EGP {productInfo.price}</p>
           {
            productInfo['secprefix'] == "Best" ? <div className=' rounded-sm px-2 py-1 text-sm flex flex-row justify-center items-center gap-1'style={{backgroundColor:"#f2f4f7"}} ><Star size={20} color='#FFC107'></Star>{`${productInfo.secprefix[0]}Seller In ${productInfo.categprefix}` }</div> : "" 
           }
            {
            productInfo['secprefix'] == "InFocus" ? <div className='rounded-sm px-2 py-1 text-sm flex flex-row justify-center items-center gap-1' style={{backgroundColor:"#f2f4f7"}} > <Star size={20} color='#FFC107'></Star>{`${productInfo.secprefix[0]} In ${productInfo.categprefix}` }</div> : "" 
           }
          </div>
         
         <p className='font-semibold'>Get it by 19 Sept <span className='text-neutral-400'>Order in 20h59m</span></p>
         <p>{productInfo.discription}</p>
         <p className={`maximumNotice text-lg`}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
     <button  className="  btn flex flex-row items-center justify-between gap-2" data-effect="spin" style={{padding:`10px 20px`}}
      onClick={addToCartHandler}
       disabled={ quantityReachedToMax} 
     >
    Add To Card
    <a className=' absolute w-full h-full '> </a>
        <span className="text"></span>
        <span className="shimmer"></span>
    </button> 
          </div>
          </div>
        </div>
      </Loading>
    </div>
  )
})

export default ProductPage
