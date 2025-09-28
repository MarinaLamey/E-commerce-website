import React from 'react'
import { useParams } from "react-router-dom";
import { actGetProductsSection , productsCleanUp } from '../../Redux/products/productsSlice';
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useMemo } from 'react';
const useProductsBysection = () => {
     const { secPrefix } = useParams();
 const dispatch = useDispatch()
 const {secProduct , loading , error} = useSelector((state) => state.products)
   const { accessToken } = useSelector((state) => state.auth);
      const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
      const { sortType } = useSelector((state) => state.sort);
   
  const record = secProduct.map((el) => ({
    ...el,
     isAuthenticated: !!accessToken,
          isLike :wishlishListItemsId.includes(el.id)

  }))
  const  sortedProducts =  useMemo(()=> {
       if (!record ) return [];
    
        let sorted = [...record ];
        if (sortType === "lowToHigh") {
          sorted.sort((a, b) => a.price - b.price);
        } else if (sortType === "highToLow") {
          sorted.sort((a, b) => b.price - a.price);
        }
        return sorted;
    }, [record , sortType] )
  useEffect(()=> {
  dispatch(actGetProductsSection(secPrefix))
  return ()=> {
    dispatch(productsCleanUp())
  }
  },[dispatch])
  return {sortedProducts ,  loading , error}
}

export default useProductsBysection
