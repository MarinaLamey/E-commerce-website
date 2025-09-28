import React from 'react'
import { actGetProduct , productCleanUp} from '../../Redux/selectedProduct/selectedProductslice'
import {actLikeToggle} from "../../Redux/wishlist/wishlistSlice"
import {addToCart} from '../../Redux/cart/cartSlice'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const UseProductPage = () => {
  const {id} = useParams()
    const dispatch = useDispatch();
    const {product , loading , error} = useSelector((state) => state.product);
        const cartItems = useSelector((state) => state.cart.items);
        const isAuthenticated = useSelector((state) => state.auth.accessToken);
        const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
      const quantity = cartItems[product.id] || 0;
      
  //
  const currentRemainingQuantity = product.max - (quantity ?? 0)
const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
const [isLoading , setisLoading] = useState(false);


const productInfo = {
  ...product, 
  quantity: cartItems[product.id] || 0,
  isLike: wishlishListItemsId.includes(product.id),
  isAuthenticated: !!isAuthenticated
};


  const addToCartHandler = () => {
    dispatch(addToCart(id));
    
  };
 const LikeToggleHandler = () => {
    if( isAuthenticated){
    if(!isLoading){  //if loading false customer cant make dislike while loading
        setisLoading(true);
    dispatch(actLikeToggle(id)).unwrap()
        .then(() => setisLoading(false))
        .catch(() => setisLoading(false));
    }
  }
  }


 
    useEffect(()=> {
    dispatch(actGetProduct(id))
    return () => {
        dispatch(productCleanUp())
    }
    },[dispatch , id])
  return {productInfo , loading , error , isAuthenticated, quantity,currentRemainingQuantity , quantityReachedToMax , addToCartHandler , LikeToggleHandler , isLoading }
}

export default UseProductPage
