import React from 'react'
import Cartitemslist from '../../componants/cartItemslist/Cartitemslist'
import Cartsubtotal from '../../componants/cartsubtotal/Cartsubtotal'
import Loading from '../../componants/feedback/Loading/Loading'
import useCard from '../../hooks/useCard'
import LottieHandler from '../../componants/feedback/LottieHandler/LottieHandler'
import { useSelector } from 'react-redux'

 const Cartpage = () => {
  
const {products , changeQuantityHandler ,RemoveHandler , loading , error , userAccessToken , ordersPlaceSuccess} = useCard()


  return (
    <div className='container mx-auto w-full flex flex-col items-center relative px-3'  style={{minHeight:'700px'}}>
     
    <h3 className='text-4xl self-start font-bold p-2'>Your Cart</h3>
    <Loading loading={loading} error={error} type={'card'}>
   {products.length ?( <>
   <Cartitemslist products={products} changeQuantityHandler={changeQuantityHandler} RemoveHandler={RemoveHandler}/>
    <Cartsubtotal products ={products} userAccessToken={userAccessToken}/>
   </>) : ordersPlaceSuccess === "succeeded"? (
    <LottieHandler type={'success'} message={"Your order has been placed successfully"}/>
   ) : ( 
    <LottieHandler type={'Empty'} message={"Your cart is empty"}/>
   )
   }
   
    </Loading>
 </div>
  )
}

export default Cartpage
