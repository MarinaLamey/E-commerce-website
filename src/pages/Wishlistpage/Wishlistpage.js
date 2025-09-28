import React from 'react'
import useWishlist from '../../hooks/useWishlist'
import Gridlist from "../../componants/Gridlist/Gridlist"
import Loading from '../../componants/feedback/Loading/Loading'
import Card from '../../componants/Card/Card'

const Wishlistpage = () => {
const {products , loading , error} = useWishlist()
  return (
   <div className='container mx-auto w-full flex flex-col items-center relative px-3 '  style={{minHeight:'700px'}}>
    <h3 className='text-4xl self-start font-bold p-2'>Your WistList</h3>
    <div className='w-full  py-5 flex flex-wrap gap-2 p-2  rounded-lg'  style={{minHeight:'600px' , backgroundColor:'#fff'}}>
    <Loading loading={loading} error={error} type={'wishlist'}>
     <Gridlist emptymessage={'Your wishlist is empty'} records={products} renderItem={(record)=> <Card {...record}/>} />
    </Loading>
    </div>
    </div>
  )
}

export default Wishlistpage
