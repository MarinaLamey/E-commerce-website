import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {actGetproducts ,  productsCleanUp } from "../Redux/products/productsSlice"
const useProducts = () => {

  const dispatch = useDispatch();
  const {  records , loading, error } = useSelector((state) => state.products); 
  const params = useParams();
  const userAccessToken = useSelector((state) => state.auth.accessToken);
 const cartItems = useSelector((state) => state.cart.items)
 const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
 const { sortType } = useSelector((state) => state.sort);
 const productsFullInfo = records.map((el) => ({
  ...el,
  quantity: cartItems[el.id] || 0,
  isLike :wishlishListItemsId.includes(el.id),
  isAuthenticated: userAccessToken ? true : false,
}));

const  sortedProducts =  useMemo(()=> {
   if (!productsFullInfo ) return [];

    let sorted = [...productsFullInfo ];
    if (sortType === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
}, [productsFullInfo , sortType] )

  useEffect(() => {
  dispatch(actGetproducts(params.prefix));
    return () => {
   dispatch( productsCleanUp())
     
    };
  }, [dispatch, params.prefix])
  return{ sortedProducts , loading , error }
}

export default useProducts
