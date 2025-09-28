import React, { useState } from "react";
import { useEffect } from "react";
import  {actGetcategories} from "../../Redux/categories/categoriesSlice";
import { useDispatch , useSelector } from 'react-redux';
import {Link} from "react-router-dom"
const SideFilter = () => {


  const dispatch = useDispatch();
  const {loading , error , records } =useSelector((state) => state.categories)
  useEffect(() => {  
    if (!records.length) {
      dispatch( actGetcategories());
    }
  }, [dispatch, records]);


  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(50);

  
  const brands = ["Huawie" , "kiko","Apple", "Samsung", "LG"];

  const toggleSelection = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };
  
  return (
    <div className="w-1/5 p-4  border rounded-lg" style={{backgroundColor:'#fff' }}>
      {/* Categories Section */}
      <div className="mb-6 flex flex-col">  
        <h3 className="text-2xl font-bold mb-2">Category</h3>
        {records.map((category) => (
          <Link to={`/ShopProducts/${category.prefix}`}>
          <div key={category.id} className="flex items-center  mb-2 hover:bg-red-400  " style={{transition:'0.5s' ,  padding: '5px 10px' ,   border: '1px solid #ddd' ,borderRadius:'15px' }} >
            <input
              type="checkbox"
              id={category}  
              className="mr-2"
              checked={selectedCategories.includes(category)}
              onChange={() =>
                toggleSelection(selectedCategories, setSelectedCategories, category)
              }
            />          
            <label htmlFor={category} className="text-xl">
              {category.Categorie}
            </label>
          </div>
          </Link>
        ))}
      </div>

      {/* Brands Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Brand</h3>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2 hover:bg-red-400"  style={{transition:'0.5s' ,  padding: '5px 10px' ,   border: '1px solid #ddd' ,borderRadius:'15px' }}>
            <input
              type="checkbox"
              id={brand}
              className="mr-2"
              checked={selectedBrands.includes(brand)}
              onChange={() =>
                toggleSelection(selectedBrands, setSelectedBrands, brand)
              }
            />
            <label htmlFor={brand} className="text-xl">
              {brand}
            </label>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-2xl font-bold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
        <p className="text-xl text-gray-600 mt-2">Up to ${priceRange}</p>
      </div>
    </div>
  );
};

export default SideFilter;
