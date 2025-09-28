import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaCalendarAlt, FaVenusMars } from "react-icons/fa";
import profilePic from '../../../assets/imgs/Negma.jpeg'
import { MdDelete, MdEdit } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
const ProfileLayout = () => {
  const userInfo = useSelector((state) =>state.auth.user)
  return (
    <div className='container mx-auto flex flex-row  items-start mt-5'>
   
            
             
    <div className='flex flex-col w-1/4 gap-3 '>
     {/* {Profile Card */}
              <div className="bg-white py-2 px-0  rounded-2xl box">
                <div className="flex flex-col items-center">
                  <img
                    src={profilePic}    
                    alt="Profile"
                    className="w-28 h-28 rounded-3xl object-cover mb-4 shadow-lg"
                  />
                  <h2 className="text-lg font-bold">{userInfo.firstName}{userInfo.lastName}</h2>
                  <div className="mt-4 text-gray-600 space-y-2">
                    <p className="flex items-center gap-2 text-lg">
                     <span className='p-2 rounded-full bg-neutral-100 shadow-lg '><FaPhone /></span>  {userInfo.phone}
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                     <span className='p-2 rounded-full bg-neutral-100 shadow-lg '><FaEnvelope /></span> {userInfo.email}
                    </p>
                  </div>
                </div>
              
      </div>
        <ul className="p-2 flex flex-col bg-white rounded-lg ">
              <NavLink to={""}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
                <button type="button" >Profile</button>
              </NavLink>
              <NavLink to={"orders"}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <button type="button">Orders</button>
              </NavLink>
                     <NavLink to={"/wishlistpage"}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-10 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <button type="button">WishList</button>
              </NavLink>
        </ul>
    </div>
     
     <div className='ml-5 w-3/4 flex flex-col justify-start'> 
      <Outlet/>
      </div> 
    </div>
    
   
  )
}

export default ProfileLayout
