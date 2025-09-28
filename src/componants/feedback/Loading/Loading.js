import React from 'react'
import "./loading.css"
import Categoryskeletone from '../skeletons/Categoryskeletone/Categoryskeletone'
import Cardskeketon from '../skeletons/Cardskeleton/Cardskeketon'
import Productskeleton from '../skeletons/Productskeleton/Productskeleton'
import Wishlistskeletone from '../skeletons/Wishlistskeleton/Wishlistskeletone'
import TableSkeleton from '../skeletons/TableSkeleton/TableSkeleton'
import LottieHandler from '../LottieHandler/LottieHandler'
const Loading = ({loading , error , children , type}) => {
  const skeletonsType = {
  category :Categoryskeletone , 
  card:Cardskeketon,
  product:Productskeleton,
  wishlist: Wishlistskeletone,
  table: TableSkeleton 
  }
  const Componant = skeletonsType[type];
    if (loading === "pending") {
        return <Componant />
      }
      if (loading === "failed") {
        return ( <LottieHandler type={'Error'} message={error}/> )
      }
      return <div className='w-full  '>{children}</div>;
}

export default Loading
