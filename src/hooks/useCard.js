import React from 'react'
import { actGetproductByitems , changeQuantityCart , 
    removeItemCart ,  productsFullInfoCleanp} from '../Redux/cart/cartSlice'
import {resetOrderStatus} from "../Redux/orders/ordersSlice"                                     
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
const useCard = () => {
 const {items , productFullInfo , loading , error} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
    const userAccessToken = useSelector((state) => state.auth.accessToken);

    const ordersPlaceSuccess = useSelector((state) => state.orders.loading )

    const products =Array.isArray(productFullInfo)
  ? productFullInfo.map((el) => ({
      ...el,
      quantity: items[el.id],
    }))
  : [];

  useEffect(()=> {
   dispatch(actGetproductByitems())
    return () => {
   
      dispatch( productsFullInfoCleanp())
      dispatch(resetOrderStatus())
    }
  },[dispatch])
 
 
  const changeQuantityHandler = useCallback( (id  , quantity)=> {
  dispatch( changeQuantityCart({id,quantity}))
  },[dispatch]);

  const RemoveHandler = useCallback( (id  )=> {
  dispatch(removeItemCart(id))
  },[dispatch]);
  return {products,changeQuantityHandler,RemoveHandler ,loading  , error , userAccessToken , ordersPlaceSuccess}
}

export default useCard
