import React from 'react'
import {actGetBestproducts} from "../Redux/productsBestseller/bestsellerproductsSlice"
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
const useBestproducts = () => {
  const dispatch = useDispatch()
  const {records , loading , error} = useSelector((state) => state.bestsellerproducts)
    const { accessToken } = useSelector((state) => state.auth);
     const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
    
useEffect(()=> {
  dispatch(actGetBestproducts())
  
},[dispatch])
 
 const record = records.map((el) => ({
    ...el,
     isAuthenticated: !!accessToken,
     isLike :wishlishListItemsId.includes(el.id)

  }))
  return {record , loading , error}
}

export default useBestproducts
