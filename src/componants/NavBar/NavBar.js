import React from 'react'
import './navbar.css'
import { useEffect , useRef } from "react";
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { Search } from 'lucide-react'
import {SearchIcon} from 'lucide-react'
import { useState } from 'react'
import  {actGetcategories} from '../../Redux/categories/categoriesSlice';
import { actGetWishlistProduct } from '../../Redux/wishlist/wishlistSlice'
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import HederCounter from './HeaderCounter/HederCounter'
import {  authLogout} from "../../Redux/auth/authSlice"
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import SearchBar from './LeftHeader/SearchBar';
const NavBar = () => {
 const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);

 
 const [activesearch , setactivesearch] = useState(false)
  function ActiveSearch(){
    if (activesearch === false){
    setactivesearch(true)
    }else{
      setactivesearch(false)
    }
  }

    const dispatch = useDispatch();
      const {records , loading , error } =useSelector((state) => state.categories)
      useEffect(() => {  
        if (!records.length) {
          dispatch( actGetcategories());
        }
      }, [dispatch, records]);

      const {accessToken,user} = useSelector((state) => state.auth);

      useEffect(() => {
      if (accessToken) {
      dispatch(actGetWishlistProduct("ProductIds"));
       function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dispatch, accessToken]);
   const navigate = useNavigate();
  const menuItems = [
    { label: "Profile" ,to:"profile"},
    { label: "Orders",  to:"profile/orders"},
    { label: "Notifications", onClick: () => console.log("Notifications clicked") },
    { label: "Logout", onClick: () => {
     
      dispatch( authLogout());
      navigate("/");
      
    } , isLogout: true , to :'/' },

  ];

 

  return (
    <nav className='relative py-4 bg-[#f7f7fa] shadow-lg '>
      <div className='  container  mx-auto      flex flex-row   items-center justify-center  md:justify-around  '>
      <div className=' w-[30%]  sm:w-[10%] flex items-center justify-center ' style={{height:'69px'}}>
      <NavLink to='/'   className='navbarlogo text-xl  sm:text-3xl font-medium flex items-center '> <span className='maincolor drop-shadow-logodrop text-2xl sm:text-4xl text-center' >N-</span><h2 >NegmCartilla</h2>
      </NavLink>
      </div>
      {/* large screen */}
      <div className='  w-[40%]   hidden md:flex items-center justify-center '>
      <ul className='text-black flex flex-row   '>

     <li className='text-xl font-normal px-3  relative overflow-hidden ' > <NavLink to='/' className='navanc  px-3 flex items-center justify-center '  style={{height:'69px'}}>Home</NavLink></li>
      <li className='text-xl font-normal px-3  relative  menuactive' ><NavLink to="/AllCategories" className='navanc  relative overflow-hidden px-3 flex items-center justify-center'  style={{height:'69px'}}>Categories</NavLink>
      <div className='categuremenu px-4 py-6'>
        <ul>
       {records.map((cate) => (
          <Link to={`/ShopProducts/${cate.prefix}`}>
          <li key={cate.id} >{cate.Categorie}</li>
          </Link>
       ))}
       </ul>
      </div>
      </li>
      <li className='text-xl font-normal px-3 relative overflow-hidden   ' ><NavLink to="/Offers" className='navanc px-3 flex items-center justify-center'  style={{height:'69px'}}>Offers</NavLink></li>
      <li className='text-xl font-normal  px-3 relative overflow-hidden' ><NavLink to='/ContactUs' className=' navanc  px-3 flex items-center justify-center'  style={{height:'69px'}}>Contact Us</NavLink></li>
      </ul>
      </div>
        {/* large scren */}

        {/* mobile screen */}
       <div className="w-[20%] visible  lg:hidden  relative"   ref={dropdownRef}  >
      {/* Dropdown Button */}
      <button
        
        onClick={() => setOpen((prev) => !prev)} 
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        className="flex items-center justify-center gap-1 w-full  font-medium text-black   
                   md:w-auto  md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 
                   dark:text-white  
                   md:dark:hover:bg-transparent  rounded-lg"
                  
      >
        <Menu color='black ' className=' w-5'  />  
        <svg
          className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-black " : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div
      
          className="absolute top-[35px] right-[-40px]  mt-2 w-48 bg-white rounded-lg shadow-lg shadow-red-300 z-50 transform transition-all duration-300 ease-in-out mt-2 z-10 grid grid-cols-1 text-sm bg-white  
                     rounded-lg shadow-md  md:grid-cols-3 "
        >
          <ul className='text-black py-2   flex flex-col   text-xl gap-2 '>

      <NavLink to='/' ><li className=' px-4 py-2 cursor-pointer transition-shadow duration-200 hover:bg-gray-100 hover:shadow-md' >Home</li></NavLink>
      <NavLink to="/AllCategories"   ><li className=' px-4 py-2 cursor-pointer transition-shadow duration-200 hover:bg-gray-100 hover:shadow-md'>Categories</li></NavLink>
      
      <NavLink to="/Offers"    ><li  className=' px-4 py-2 cursor-pointer transition-shadow duration-200 hover:bg-gray-100 hover:shadow-md'>Offers</li></NavLink>
      <NavLink to='/ContactUs'    ><li  className=' px-4 py-2 cursor-pointer transition-shadow duration-200 hover:bg-gray-100 hover:shadow-md'>Contact Us</li></NavLink>
      </ul>
        </div>
      )}
</div>
      
    
        {/* mobile screen */}

      <div className='  mt-2 w-fit  md:w-fit flex items-center flex-row justify-between gap-4 relative  '  style={{height:'69px'}}>
     < HederCounter />
      <div className=''>
      <button onClick={() => ActiveSearch()} 
        aria-expanded={isOpen ? "true" : "false"}
          aria-controls="mobile-menu"
          >
      <Search color='black'  className='w-5 md:w-7 z-20 drop-shadow-logodrop cursor-pointer animationicon ' style={{transition:'1s'}}  />
        </button >
      { activesearch === true ? (<div
          className="absolute top-[60px] right-[-20px]  mt-2 w-[300px]  bg-white rounded-lg shadow-lg shadow-red-300 z-50 transform transition-all duration-300 ease-in-out mt-2 z-10 grid grid-cols-1 text-sm bg-white  
                     rounded-lg shadow-md  "
        > 
        <SearchBar/>
        </div>
        )
 : ''}
 </div>
{!accessToken ? (
  <>
    <NavLink to="/login"><Button href={'/login'}  buttonValue={'LogIn'} />  </NavLink> 
 
  </>
): (
  <>
  <p className='hidden md:flex font'>Hello {user.firstName}</p>
      <DropdownMenu items={menuItems} profileImg="../../assets/imgs/Negma.jpeg" />
  </>
)
} 
  
    
   
      
     </div>
      </div>
    </nav>
  
  )
}

export default NavBar
