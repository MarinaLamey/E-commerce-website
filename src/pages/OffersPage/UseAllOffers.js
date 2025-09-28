import { actGetOffersProducts , productsCleanUp} from "../../Redux/products/productsSlice";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useMemo } from "react";

const UseAllOffers = () => {
  
    const dispatch = useDispatch()
    const {offers , loading , error} = useSelector((state) => state.products)
        const { accessToken } = useSelector((state) => state.auth);
        const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
        const { sortType } = useSelector((state) => state.sort);
  const record = offers.map((el) => ({
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
    useEffect(() => {
        dispatch(actGetOffersProducts())
        return()=> {
            dispatch(productsCleanUp())
        }
    } ,[dispatch])

  return {sortedProducts , loading , error}
}

export default UseAllOffers
