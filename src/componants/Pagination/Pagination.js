import React from "react"
import ReactPaginate from 'react-paginate';
import '../../pages/MainLayout/MainLayout/App.css'
import { LucideArrowLeft , LucideArrowRight } from "lucide-react";
import { useState ,useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'



const Pagination = ({ }) =>  {

  const[pageCount , setpageCount] = useState(0);
 
const dispatch = useDispatch()
const pagesCount = useSelector((state) => state.pageCount )
useEffect(() => {
setpageCount(pagesCount)
})

const getPageMovie = async(page) => {
  dispatch()
}

  const handlePageClick = (data) => {
  getPageMovie(data.selected + 1)
  }
 

  
  return (
    <>
    <div className=" container mx-auto relative flex justify-center  p-2 ">
    <ReactPaginate
      breakLabel=". . ."
      nextLabel={<LucideArrowRight/>}
      onPageChange={handlePageClick}
      marginPagesDisplayed={1} //last num 
      pageRangeDisplayed={1}//firt num 
      pageCount={4}
      previousLabel={<LucideArrowLeft/>}
      containerClassName=" z-40  flex items-center justify-center shadow-lg  rounded-xl   bg-white p-3 text-white gap-3 border-2  border-neutral-100 border-opacity-20  "
      pageLinkClassName="bgnum  relative py-2 px-3 font-bold text-2xl rounded-xl focus:bg-red-700"
      previousClassName=" bg  relative px-3 py-2 font-bold text-2xl rounded-xl hover:bg-red-700 "
      nextClassName=" bg  relative px-3 py-2 font-bold text-2xl rounded-xl hover:bg-red-700"
      breakClassName=" relative px-4 py-2 text-white rounded-md bg-red-900   "
      activeClassName="active"
      
      />
      </div>
  </>
  )
}

export default Pagination