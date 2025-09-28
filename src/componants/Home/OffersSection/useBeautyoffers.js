import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actGetbeautyOffers ,  productsCleanUp} from '../../../Redux/products/productsSlice'
const useBeautyoffers = () => {
  const dispatch = useDispatch();
    const {loading , error , beautyOffers} = useSelector((state) => state.products)
     const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
     const userAccessToken = useSelector((state) => state.auth.accessToken);
  const offersBeautyproducts = beautyOffers.map((el) => ({
      ...el,
       isLike :wishlishListItemsId.includes(el.id),
       isAuthenticated: userAccessToken
    }))
    useEffect(() => {
    dispatch(actGetbeautyOffers())
    return () => {
        dispatch( productsCleanUp())
    }
    },[dispatch])
  return { offersBeautyproducts , loading , error}
}

export default useBeautyoffers
