import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actGetproductsOffers , productsCleanUp} from '../../../Redux/products/productsSlice'
const useElectonicoffer = () => {
    const dispatch = useDispatch();
    const {loading , error , electronicoffers} = useSelector((state) => state.products)
    const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
      const userAccessToken = useSelector((state) => state.auth.accessToken);

    const offersProducts = electronicoffers.map((el) => ({
      ...el,
       isLike :wishlishListItemsId.includes(el.id),
          isAuthenticated: userAccessToken
    }))

    useEffect(() => {
    dispatch(actGetproductsOffers());
   
   return () => {
    dispatch( productsCleanUp())
   }
    
    } ,[dispatch])
  return {loading , error , offersProducts}
}

export default useElectonicoffer
