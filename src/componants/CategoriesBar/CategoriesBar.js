import React from 'react'
import  {actGetcategories} from "../../Redux/categories/categoriesSlice";
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
const CategoriesBar = () => {
  const dispatch = useDispatch();
  const { records ,  loading , error } = useSelector((state) => state.categories)
  useEffect(() => {  
    if (!records.length) {
      dispatch( actGetcategories());
    }
  }, [dispatch, records]);
  return (
    
    <div className='relative w-full px-7 py-5 flex flex-row items-center justify-start bg-white gap-5'>

      {records.map((cat) => (
              <Link to={`/ShopProducts/${cat.prefix}`}>
        <a key={cat.id} className='text-2xl text-black hover:text-red-900 cursor-pointer'>{cat.Categorie}</a>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesBar
