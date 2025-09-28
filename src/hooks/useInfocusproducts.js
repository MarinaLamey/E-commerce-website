import React from 'react'
import {actGetInfocusproducts } from "../Redux/productsInfocus/infocusproductsSlice"
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
const useInfocusproducts = () => {
   const dispatch = useDispatch()
   const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
  const {records , loading , error} = useSelector((state) => state.infocusproducts)
  const { accessToken } = useSelector((state) => state.auth);
useEffect(()=> {
  dispatch(actGetInfocusproducts())
  
},[dispatch])
 
  const record = records.map((el) => ({
    ...el,
     isAuthenticated: !!accessToken,
     isLike :wishlishListItemsId.includes(el.id)
  }))
  return {record , loading , error}
}

export default useInfocusproducts
