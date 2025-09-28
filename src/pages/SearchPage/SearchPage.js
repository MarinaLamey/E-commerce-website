import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { actGetSearchproducts } from '../../Redux/searchProducts/searchSlice';
import { useMemo } from 'react';
import MainVideo from '../../componants/MainVideo/MainVideo'
import CategoriesBar from '../../componants/CategoriesBar/CategoriesBar'
import TitlaandFilterationbar from '../../componants/TitleandFiltertionbar/TitlaandFilterationbar'
import SideFilter from '../../componants/SideFilter/SideFilter'
import Card from '../../componants/Card/Card'
import Loading from '../../componants/feedback/Loading/Loading'
import Gridlist from '../../componants/Gridlist/Gridlist'
import { motion } from "framer-motion";
const SearchPage = () => {
    function useQuery() {
  return new URLSearchParams(useLocation().search);  //well get search word from url
}
 const query = useQuery();
  const searchTerm = query.get("q"); // 
  const dispatch = useDispatch();
  const {records , loading , error} = useSelector((state) => state.search)
     const wishlishListItemsId = useSelector((state) => state.wishlist.itemsId)
        const { sortType } = useSelector((state) => state.sort);
         const record = records.map((el) => ({
      ...el,
       isAuthenticated: true,
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
   dispatch(actGetSearchproducts(searchTerm)) 
  },[searchTerm , dispatch])
  return (
     <div className=' mx-auto relative   ' style={{minHeight:'700px'}} >
                <MainVideo/>
                <CategoriesBar/>
                  <div className='w-full h-full px-20 mx-auto flex flex-col    ' >
                  <TitlaandFilterationbar title={'500'} />
                  <div className=' w-full flex flex-row gap-3 '>
                   <SideFilter/>
            <div className='w-3/4  py-5 flex flex-col  gap-2 p-2  rounded-lg'  style={{minHeight:'600px' , backgroundColor:'#fff'}}>
            <Loading  loading={loading} error={error} type={'product'} >
              <Gridlist emptymessage={"There are no products"} records={sortedProducts} renderItem={(record) => 
                 <motion.div
                        key={record.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: record.id * 0.2, // يخلي كل كارد يطلع بعد التاني
                        }}
                      >
                         <Card key={record.id} {...record}/>
                        </motion.div>
               } ></Gridlist>
            </Loading>
              </div>
                  </div>
                  </div>
            </div>
  )
}

export default SearchPage
