import React from 'react'
import ProductsContainer from '../../ProductsContainer/ProductsContainer'
import useElectonicoffer from './useElectonicoffer'
import useBeautyoffers from './useBeautyoffers'

const OfferComp = () => {
  const { offersProducts} = useElectonicoffer()
  const { offersBeautyproducts } = useBeautyoffers()

   
  return (
    <>
    <ProductsContainer title={"Electronics Offers"}  cardCate={'Offers'} record={offersProducts} path={"/ProductsByHomeSection/electronicOffer"} />
    <ProductsContainer title={"Beauty Offers"}  cardCate={'Offers'} record={offersBeautyproducts} path={"/ProductsByHomeSection/beautyOffer"} />
    </>
  )
}
 
export default OfferComp
