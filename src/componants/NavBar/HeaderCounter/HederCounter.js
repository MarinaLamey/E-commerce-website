import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from "react";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {getCartTotalQuantitySelector} from "../../../Redux/cart/cartSlice"
import { Heart } from 'lucide-react'
import { LucideShoppingBag } from 'lucide-react'
import '../shopingbag.css'
import LeftHeader from "../LeftHeader/LeftHeader"

const HederCounter = () => {
      const totalQuantity= useSelector(getCartTotalQuantitySelector)
    const totalWishlistQuantaty = useSelector((state)=> state.wishlist.itemsId.length);
    
         

    
    
  return (
    <>
   <LeftHeader totalQuantity={ totalQuantity}  page={'/Cartpage'} icon={ <LucideShoppingBag color='black'  className=' w-5  drop-shadow-logodrop cursor-pointer animationicon' style={{transition:'1s'}}/>}/>
       <LeftHeader totalQuantity={ totalWishlistQuantaty}  page={'/wishlistpage'} icon={ <Heart color='black'  className='w-5  drop-shadow-logodrop cursor-pointer animationicon' style={{transition:'1s'}}/>} />
       </>
  )
}

export default HederCounter
