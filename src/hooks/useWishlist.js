import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actGetWishlistProduct ,  productsFullInfoCleanUp} from "../Redux/wishlist/wishlistSlice"
const useWishlist = () => {
        const dispatch = useDispatch()
       const {productsFullInfo , loading , error} = useSelector((state)=> state.wishlist);
         const cartItems = useSelector((state) => state.cart.items);
         const { accessToken } = useSelector((state) => state.auth);
     const products = productsFullInfo.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLike:true,
         isAuthenticated: !!accessToken ,
      }));
    
        useEffect(()=> {
       dispatch(actGetWishlistProduct("ProductsFullInfo"))
       return () => {
        dispatch(productsFullInfoCleanUp())
        
       }
        }, [dispatch])
  return {products , loading , error}
}

export default useWishlist
