import React from 'react'
import  {actGetcategories ,  recordsClenUp} from '../Redux/categories/categoriesSlice';
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from "react";
const useCategories = () => {
  const dispatch = useDispatch();
    const {records , loading , error } =useSelector((state) => state.categories)

    useEffect(() => {  
   
     dispatch( actGetcategories());
        
      
      return () => {
      
        dispatch( recordsClenUp())
      }
    }, [dispatch]);

  return {records , loading , error}
}

export default useCategories
